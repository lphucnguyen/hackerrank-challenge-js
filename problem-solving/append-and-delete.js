'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'appendAndDelete' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. STRING t
 *  3. INTEGER k
 */

function appendAndDelete(s, t, k) {
    const min = Math.min(s.length, t.length);
    let i = 0;
    
    while(i < min && s[i] == t[i]) i++;
    
    const opt = s.length + t.length - 2 * i;
    
    if(opt == k) return "Yes";
    else if(opt > k) return "No";
    else if(s.length + t.length - k <= 0) return "Yes";
    else if(Math.abs(s.length + t.length - k) % 2 == 0) return "Yes";
    else return "No"; 
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const t = readLine();

    const k = parseInt(readLine().trim(), 10);

    const result = appendAndDelete(s, t, k);

    ws.write(result + '\n');

    ws.end();
}
