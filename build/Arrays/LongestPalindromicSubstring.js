"use strict";
/**
 *  5. Longest Palindromic Substring
 */
Object.defineProperty(exports, "__esModule", { value: true });
// Use a DP matrix to keep track of previous palindromes
const longestPalindrome = (s) => {
    if (s.length < 2)
        return s;
    let max = s[0];
    let matrix = [];
    for (let letter of s) {
        matrix.push(new Array(s.length).fill(0));
    }
    for (let i = 0; i < s.length; i++) {
        matrix[i][i] = 1;
    }
    for (let col = 1; col < s.length; col++) {
        for (let row = 0; row < col; row++) {
            if (row === col - 1 && s[row] === s[col]) {
                if (max.length < 2)
                    max = s.slice(row, col + 1);
                matrix[row][col] = 1;
            }
            else if (matrix[row + 1][col - 1] === 1 && s[row] === s[col]) {
                if (max.length < col - row + 1) {
                    max = s.slice(row, col + 1);
                }
                matrix[row][col] = 1;
            }
        }
    }
    return max;
};
exports.default = () => {
    const s = 'aaaa';
    console.log(longestPalindrome(s));
};
