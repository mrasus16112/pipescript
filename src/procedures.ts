import { readSync } from 'fs';
import config from './index';

function stringFrom(pstring: bigint[]) {
    let term = pstring.indexOf(config.terminator);
    return String.fromCodePoint(...pstring.slice(0, term).map(Number));
}

const procedures: {[key: string]: (params: bigint[]) => bigint} = {
    "Add Number And Return's Number": ([n1, n2]) => n1 + n2,
    "Subtract's Number And's Served Number": ([n1, n2]) => n1 - n2,
    "Calculate Derivative": () => 0n,
    "Grounders": ([n]) => n,
    "Roof": ([n]) => n,

    "Time Fetch": () => BigInt(new Date().getTime()),
    "Number Random": ([min, max]) => BigInt(Math.random() * Number(max - min) + Number(min)),

    "Get Character But is Character For in Terminal"() {
        let buf = Buffer.alloc(1);
        readSync(1, buf, 0, 1, null);
        return BigInt(buf[0]);
    },
    "Put Character In For Terminal"([char]) {
        process.stdout.write(String.fromCharCode(Number(char)));
        return char;
    },
    "Put Character But Is Number In For Terminal"([num]) {
        process.stdout.write(String(num));
        return num;
    },

    "Put String In Terminal For"(pstring) {
        process.stdout.write(stringFrom(pstring));
        return 0n;
    },

    "Index Of String Of"([pchar, ...pstring]) {
        let string = stringFrom(pstring);
        let char = String.fromCodePoint(Number(pchar));
        return BigInt(string.indexOf(char));
    },
};

export default procedures;