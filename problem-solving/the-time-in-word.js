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
 * Complete the 'timeInWords' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER h
 *  2. INTEGER m
 */

function timeInWords(h, m) {
    const words = [
        "", "one", "two", "three", "four", "five", "six", "seven",
        "eight", "nine", "ten", "eleven", "twelve", "thirteen", 
        "fourteen", "quarter", "sixteen", "seventeen", "eighteen",
        "nineteen", "twenty", "twenty one", "twenty two", 
        "twenty three", "twenty four", "twenty five", "twenty six",
        "twenty seven", "twenty eight", "twenty nine", "half",
    ];
    
    if(m == '00'){
        return `${words[parseInt(h)]} o' clock`;
    }else {
        const minutes = parseInt(m);
        const hour = parseInt(h);
        const isPassHalf = minutes > 30;
        
        if(minutes == 30 || minutes == 15){
            return `${words[minutes]} past ${words[hour]}`
        }
        else if(!isPassHalf) {
            const minuteString = minutes <= 1 ? 'minute' : 'minutes';
            return `${words[minutes]} ${minuteString} past ${words[hour]}`
        }else {
            if(minutes == 45) {
                return `${words[60 - minutes]} to ${words[hour + 1]}`
            }
            return `${words[60 - minutes]} minutes to ${words[hour + 1]}`
        }
    }

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const h = parseInt(readLine().trim(), 10);

    const m = parseInt(readLine().trim(), 10);

    const result = timeInWords(h, m);

    ws.write(result + '\n');

    ws.end();
}
