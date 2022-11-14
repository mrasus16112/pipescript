import { readSync } from 'fs';

const procedures: {[key: string]: (params: bigint[]) => bigint} = {
    "Add Number And Return's Number": ([n1, n2]) => n1 + n2,
    "Subtract's Number And's Served Number": ([n1, n2]) => n1 - n2,
    "Calculate Derivative": () => 0n,
    "Grounders": ([n]) => n,
    "Roof": ([n]) => n,

    "Time Fetch": () => BigInt(new Date().getTime()),
    "Number Random": ([min, max]) => BigInt(Math.random() * Number(max - min) + Number(min)),

    "Get Character for in terminal"() {
        let buf = Buffer.alloc(1);
        readSync(0, buf, 0, 1, null);
        return BigInt(buf[0]);
    },
    "Put Character In For Terminal"([char]) {
        process.stdout.write(String.fromCharCode(Number(char)));
        return char;
    },
    "Put String In Terminal NULL For Terminated"(str) {
        let term = str.indexOf(0n);
        let strterm = str.slice(0, term).map(n => String.fromCharCode(Number(n))).join('');
        process.stdout.write(strterm);
        return BigInt(term);
    }
};

export default procedures;