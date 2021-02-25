"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const countSubstrings = (s) => {
    let count = s.length;
    let matrix = [];
    for (let i = 0; i < s.length; i++) {
        matrix.push(new Array(s.length).fill(0));
        matrix[i][i] = 1;
    }
    for (let col = 1; col < s.length; col++) {
        for (let row = 0; row < col; row++) {
            if (row === col - 1 || matrix[row + 1][col - 1]) {
                if (s[row] === s[col]) {
                    count++;
                    matrix[row][col] = 1;
                }
            }
        }
    }
    return count;
};
exports.default = () => {
    let str = 'aabaaca';
    console.log(countSubstrings(str));
};
