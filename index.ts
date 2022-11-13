import { readFileSync } from 'fs';
import ohm from 'ohm-js';
import { toAST } from 'ohm-js/extras';

const digitRange = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY';

function read(path: string) {
    return String(readFileSync(path));
}

function error(code: number, message: string) {
    console.error(`ERR ${code}\n${message}`);
    process.exit(code);
}

if (Math.random() < 1/100) error(-2000, "I will murder you.");

let config = {
    tape: 256,
    base: 37,
    endparam: -1,
    typescript: true
} as const;

try {
    config = JSON.parse(read(process.argv[3]));
} catch (e) {
    error(59, "psconfig.json fail!!!!");
}

const outputText: string[] = [`type Cell = { name?: string, val: bigint }`, `const tape: Cell[] = new Array(${config.tape}).fill({val: 0});`];

const grammar = ohm.grammar(read("pipescript.ohm"));
const match = grammar.match(read(process.argv[2])); // temporary dirty fix lmao

if (match.failed()) error(2, "Did you fail English class?");

const mapping = {
    "Statement_import": {thingy: 0},
    "Statement_make": {make: 0},
    "Make_cname": {id: 1, name: 3},
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
        digits.forEach((e, i) => converted += (37 ** i) * allowedDigits.indexOf(e));
        return {original: num.sourceString, converted};
    },
    "Cell_name": {name: 2},
    "Cell_raw": {id: 2}
};

const tree: any = toAST(match, mapping);

console.log(JSON.stringify(tree, null, 2));

let indentLevel = 0;
for (let statement of tree) {
    switch (statement.type) {
        
    }
}

console.log(outputText.join('\n'));