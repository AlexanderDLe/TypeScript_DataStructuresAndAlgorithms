/**
 * 647. Palindromic Substrings
 */

import { PrintMatrix } from '../utils/Utilities';

const countSubstrings = (s: string): number => {
    let count = 0;

    let matrix = [];
    for (let char of s) {
        matrix.push(new Array(s.length).fill(0));
    }
    for (let i = 0; i < s.length; i++) {
        matrix[i][i] = 1;
        count++;
    }
    for (let col = 1; col < s.length; col++) {
        for (let row = 0; row < col; row++) {
            if (row === col - 1 && s[col] === s[row]) {
                matrix[row][col] = 1;
                count++;
            } else if (matrix[row + 1][col - 1] === 1 && s[col] === s[row]) {
                matrix[row][col] = 1;
                count++;
            }
        }
    }
    PrintMatrix(matrix);
    return count;
};

export default (): void => {
    let str = 'aabaaca';
    console.log(countSubstrings(str));
};
