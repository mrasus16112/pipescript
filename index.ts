import { readFileSync, readdirSync } from 'fs';
import ohm from 'ohm-js';
import { toAST } from 'ohm-js/extras';
import procedures from './extras/procedures';
import yargs from 'yargs/yargs';
import merge from 'lodash.merge';
import { text } from 'stream/consumers';

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

interface Cell {
    name?: string;
    value: bigint;
} 

const tape: Cell[] = Array(config.tape).fill({value: 0n});
const nameLookup = new Map<string, number>();
const definedProcedures = new Map<string, Function | ohm.Node[]>();
let isFunction = (procedure: Function | ohm.Node[]): procedure is Function => (procedure as Function).call !== undefined;

const actions: ohm.ActionDict<any> = {
    _iter: (...children) => children.map(c => c.e()),
    
    Statement() {

    },
    // primitives
    number(sign, num) {
        let digits: string[] = (num.sourceString).split('').reverse();
        let allowedDigits = digitRange.substring(0, config.base);
        let converted: bigint = 0n;
        digits.forEach((e, i) => converted += BigInt((config.base ** i) * allowedDigits.indexOf(e)));
        if (sign.sourceString) converted = -converted;
        return converted;
    },
    name: (_0, text, _2) => text.sourceString,

    // cell references
    Cell_index: (_0, _1, index, _3) => Number(index.e()) - 1,
    Cell_name(_0, _1, name, _3) { 
        let index = nameLookup.get(name.e());
        if (!index) error(948, "oh the misery every name wants to be my enemy");
        return index;
    },

    // make
    Make_set: (_0, cell, _2, val) => tape[cell.e()] = val.e(),
    Make_name: (_0, cell, _2, name) => nameLookup.set(name.e(), cell.e()),

    // do
    Do(_0, _1, _2, name, _4, _5, _6, cell, _8, _9, _10, serve) {
        let procedure = definedProcedures.get(name.e());
        if (!procedure) error(1984, "that ain't a procedure my guy");
        if (isFunction(procedure)) {
            tape[serve.e()] = procedure(tape.slice(cell.e()));
        } else {}
    }
};

const semantics = grammar.createSemantics();
semantics.addOperation("e", actions);
semantics(match).e();
console.log(tape);
