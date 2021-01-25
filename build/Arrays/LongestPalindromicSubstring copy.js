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
            if (row > col - max.length)
                break;
        }
    }
    return max;
};
const longestPalindromeB = (s) => {
    let max = '';
    // Iterate through string
    for (let i = 0; i < s.length; i++) {
        // Every iteration, j will be 0 or 1 (even or odd)
        for (let j = 0; j < 2; j++) {
            let left = i;
            let right = i + j;
            // expand palindrome outwards while outermost values are equal
            while (s[left] && s[left] === s[right]) {
                left--;
                right++;
            }
            if (right - left - 1 > max.length) {
                max = s.substring(left + 1, right);
            }
        }
    }
    return max;
};
exports.default = () => {
    const s = 'aabbaca';
    console.log(longestPalindromeB(s));
};
