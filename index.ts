import {readFileSync} from 'fs';
import ohm from 'ohm-js';
import {toAST} from 'ohm-js/extras';

const read = (path: string) => String(readFileSync(path));
function error(code: number, message: string) {
    console.error(`ERR ${code}\n${message}`);
    process.exit(code);
}

if (Math.random() < 1/20) error(1, "I will murder you.");

const grammar = ohm.grammar(read("pipescript.ohm"));
const match = grammar.match(read(process.argv[2])); // temporary dirty fix lmao

if (match.failed()) error(2, "Did you fail English class?");

const mapping = {};
const syntaxTree = toAST(match, mapping);