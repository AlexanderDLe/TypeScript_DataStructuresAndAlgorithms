"use strict";
/**
 *  AlgoExpert
 */
Object.defineProperty(exports, "__esModule", { value: true });
const levenshteinDistance = (str1, str2) => {
    let DP = new Array(str1.length + 1).fill(0);
    DP = DP.map(item => new Array(str2.length + 1).fill(0));
    for (let col = 0; col <= str2.length; col++) {
        DP[0][col] = col;
    }
    for (let row = 0; row <= str1.length; row++) {
        DP[row][0] = row;
    }
    for (let row = 1; row <= str1.length; row++) {
        let str1Char = str1[row - 1];
        for (let col = 1; col <= str2.length; col++) {
            let str2Char = str2[col - 1];
            if (str1Char === str2Char)
                DP[row][col] = DP[row - 1][col - 1];
            else
                DP[row][col] = 1 + Math.min(DP[row][col - 1], DP[row - 1][col], DP[row - 1][col - 1]);
        }
    }
    return DP[str1.length][str2.length];
};
exports.default = () => {
    const str1 = 'abc';
    const str2 = 'yabd';
    // [    ''  y  a  b  d
    //  ''  [0, 1, 2, 3, 4],
    //   a  [0, 0, 0, 0, 0],
    //   b  [0, 0, 0, 0, 0],
    //   c  [0, 0, 0, 0, 0]
    // ]
    console.log(levenshteinDistance(str1, str2));
};
