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
    "CellRaw": ({}, {}, num: any, {}) => Number(num.sourceString),
    "name": ({}, name: any, {}) => name.sourceString,
    "Statement_do": {apply: 0},
    "Do": {name: 1, params: 4, intocell: 8},
    "Statement_define": {important: 0}
};

const syntaxTree = toAST(match, mapping);

console.log(JSON.stringify(syntaxTree, null, 2));
