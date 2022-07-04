/*
Maria plays college basketball. Each season she maintains a record of her games.
She tabulates the number of time she breaks her season record for the 
most points and least points in a game. Points scored in the first game establish her
record for the season and she begins counting there.

ex: 
scores = [12,24,10,24]
Scores are in the same order as the games played. She tabulates her results as follows:

                                     Count
    Game  Score  Minimum  Maximum   Min Max
     0      12     12       12       0   0
     1      24     12       24       0   1
     2      10     10       24       1   1
     3      24     10       24       1   1
     
Given the scores for a season, determine the number of times Maria breaks her records for 
most and least points scored during the season.

Input Format:
The first line contains an integer , the number of games.
The second line contains  space-separated integers describing the respective values of.

Returns:
int[2]: An array with the numbers of times she broke her records. Index  is for breaking
most points records, and index  is for breaking least points records.

Sample Input:
9
10 5 20 20 4 5 2 25 1

Sample Output:
2 4
*/

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
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores) {
    let highBreakCount = 0;
    let lowBreakCount = 0;
    let maximumScore = scores[0];
    let minimumScore = scores[0];
    
    for (let i=0; i<scores.length; i++) {
        if (scores[i]>maximumScore) {
            maximumScore = scores[i];
            highBreakCount++;
        }
        if (scores[i]<minimumScore) {
            minimumScore = scores[i];
            lowBreakCount++;
        }
    }
    return [highBreakCount, lowBreakCount];
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const scores = readLine().replace(/\s+$/g, '').split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

    const result = breakingRecords(scores);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
