import {readFileSync} from 'fs';
import ohm from 'ohm-js';
import {toAST} from 'ohm-js/extras';

if (Math.random() < 1/20) console.error("ERR 000\nYou pitiful coward. Try again.");
const grammar = ohm.grammar(String(readFileSync("pipescript.ohm")));

