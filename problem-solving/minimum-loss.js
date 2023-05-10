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
 * Complete the 'minimumLoss' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts LONG_INTEGER_ARRAY price as parameter.
 */

function minimumLoss(price) {
    let min = Number.MAX_VALUE;
    let arr = price;
    let indexes = {};

    arr.forEach((item, index) => {
        indexes[item] = index
    });

    arr = arr.sort((a, b) => b - a);

    for(let i = 0; i < arr.length - 1; i++){
        if(indexes[arr[i]] < indexes[arr[i+1]]){
            min = Math.min(min, arr[i] - arr[i+1]);   
        }
    }

    return min;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const price = readLine().replace(/\s+$/g, '').split(' ').map(priceTemp => parseInt(priceTemp, 10));

    const result = minimumLoss(price);

    ws.write(result + '\n');

    ws.end();
}
