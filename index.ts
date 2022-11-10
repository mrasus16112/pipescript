import {readFileSync} from 'fs';
import ohm from 'ohm-js';
import {toAST} from 'ohm-js/extras';

const tape = new BigInt64Array(6_969);

function read(path: string) {
    return String(readFileSync(path));
}

function error(code: number, message: string) {
    console.error(`ERR ${code}\n${message}`);
    process.exit(code);
}

if (Math.random() < 1/100) error(1, "I will murder you.");

const grammar = ohm.grammar(read("pipescript.ohm"));
const match = grammar.match(read(process.argv[2])); // temporary dirty fix lmao

if (match.failed()) error(2, "Did you fail English class?");

type node = any;

const mapping = {
    "Statement_import": {file: 0},
    "Statement_make": {make: 0},
    "Make_cname": {id: 1, name: 3},
    "name": ({}, name: node, {}): string => name.sourceString,
    "Statement_do": {apply: 0},
    "Do": {name: 1, params: 4, into: 8},
    "Statement_define": {definition: 0},
    "Define_proc": {name: 3, block: 4},
    "Define_cond": {value1: 1, compare: 3, value2: 4, block: 5},
    "Define_loop": {value1: 1, compare: 4, value2: 5, block: 6},
    "Statement_serve": {id: 1},
    "Number": (num: node): {original: string, converted: number} => {
        let digits: string[] = (num.sourceString).split('').reverse();
        let range = '0123456789abcdefghijklmnopqrstuvwxyzA';
        let converted = 0;
        digits.forEach((e, i) => converted += (37 ** i) * range.indexOf(e));
        return {original: num.sourceString, converted};
    },
    "SpecVal_cellname": {name: 2},
    "SpecVal_cellraw": {id: 2}
};

const syntaxTree = toAST(match, mapping);

console.log(JSON.stringify(syntaxTree, null, 2));
