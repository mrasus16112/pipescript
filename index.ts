import { readFileSync, readdirSync } from 'fs';
import ohm from 'ohm-js';
import { toAST } from 'ohm-js/extras';
import procedures from './extras/procedures';
import yargs from 'yargs/yargs';
import merge from 'lodash.merge';

function read(path: string) {
    return String(readFileSync(path));
}

function error(code: number, message: string) {
    console.error(`ERR ${code}\n${message}`);
    process.exit(code);
}

// --- //

if (Math.random() < 1/100) error(-2000, "I will murder you.");

// --- //

const grammar = ohm.grammar(read("./pipescript.ohm"));
const match = grammar.match(read(process.argv[2])); // temporary dirty fix lmao

if (match.failed()) error(2, "Did you fail English class?");

// --- //

const defaultConfig = {
    tape: 6969,
    base: 37,
    terminator: 0n,
}

let config: typeof defaultConfig = JSON.parse(read(process.argv[3]));

config = merge(defaultConfig, config);

if (config.tape < 1) config.tape = defaultConfig.tape;
if (config.base < 1 || config.base > 61) config.base = defaultConfig.base;
if (config.terminator < 0) config.terminator = defaultConfig.terminator;

export default config;

// --- //

const digitRange = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY';

const mapping = {
    "Statement_make": {make: 0},
    "Make_cname": {cell: 1, name: 3},
    "Make_setv": {cell: 1, val: 3},
    "name": ({}, name: ohm.Node, {}) => name.sourceString,
    "Statement_do": {apply: 0},
    "Do": {name: 1, word: 3, params: 4, into: 8},
    "Statement_define": {define: 0},
    "Define_proc": {name: 3, block: 4},
    "Define_cond": {value1: 1, compare: 3, value2: 4, block: 5},
    "Define_loop": {value1: 1, compare: 4, value2: 5, block: 6},
    "Statement_serve": {id: 1},
    "number"(num: ohm.Node) {
        let digits: string[] = (num.sourceString).split('').reverse();
        let allowedDigits = digitRange.substring(0, config.base);
        let converted = 0;
        digits.forEach((e, i) => converted += (config.base ** i) * allowedDigits.indexOf(e));
        return converted;
    },
    "Cell_name": {name: 2},
    "Cell_raw": {id: 2}
};

const tree = toAST(match, mapping);
console.log(JSON.stringify(tree, null, 2));

// --- //

type Cell = {
    value: bigint;
    name?: string;
};

const callStack: string[] = [];
const tape: Cell[] = new Array(config.tape)

function executeStatement(statement: {[key: string]: any}) {
    if (statement.type == "Make_cname") {
        
    } else if (statement.type == "Make_setv") {

    }
}