import {readFileSync} from 'fs';
import ohm from 'ohm-js';
import {toAST} from 'ohm-js/extras';

const read = (path: string) => String(readFileSync(path));
function error(code: number, message: string) {
    console.error(`ERR ${code}\n${message}`);
    process.exit(code);
}

if (Math.random() < 1/100) error(1, "I will murder you.");

const grammar = ohm.grammar(read("pipescript.ohm"));
const match = grammar.match(read(process.argv[2])); // temporary dirty fix lmao

if (match.failed()) error(2, "Did you fail English class?");

const mapping = {
    "Statement_import": {file: 0},
    "Statement_make": {make: 0},
    "Make_cname": {cellidx: 1, name: 3},
    "name": ({}, name: any, {}): string => name.sourceString,
    "Statement_do": {apply: 0},
    "Do": {name: 1, params: 4, intocell: 8},
    "Statement_define": {definition: 0},
    "Define_proc": {name: 3, block: 4},
    "Define_cond": {value1: 1, compare: 3, value2: 4, block: 5},
    "Define_loop": {value1: 1, compare: 4, value2: 5, block: 6},
    "SpecVal_meal": {type: 0, name: 2},
    "Number": (num: any) => {
        let original: string[] = [...(num.sourceString)].reverse();
        let range = '0123456789abcdefghijklmnopqrstuvwxyzA';
        let converted = 0;
        original.forEach((e, i) => converted += (37 ** i) * range.indexOf(e));
        return {original: num.sourceString, converted};
    },
};

const syntaxTree = toAST(match, mapping);

console.log(JSON.stringify(syntaxTree, null, 2));
