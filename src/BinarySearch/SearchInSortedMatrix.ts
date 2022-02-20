/**
 * Grokking the Coding Interview
*/

import { PrintArray } from "../utils/Utilities";

const searchInSortedMatrixDOESNTWORKWITHTHISMATRIXTYPE = (matrix: number[][], target: number): number[] => {
    let rows = matrix.length;
    let cols = matrix[0].length;

    const numToCell = (num: number) => {
        let row = Math.floor(num / cols);
        let col = num % cols;
        return [row, col];
    }

    const cellToNum = (row:number, col:number): number => {
        return (row + 1) * (col + 1);
    }

    let L = 0;
    let R = cellToNum(rows - 1, cols - 1);

    while (L <= R) {
        let M = Math.floor(L + (R - L)/2);
        let [row, col] = numToCell(M);
        let val = matrix[row][col];
        let val2 = matrix[col][row];
        console.log(`L: ${L} | R: ${R} | M: ${M} | vals: A-${val} B-${val2} | row: ${row} | col: ${col}`);

        if (val === target) return [row, col];
        if (val < target) L = M + 1;
        else R = M - 1;
    }

    return [-1, -1];
}

const searchInSortedMatrix = (matrix: number[][], target: number): number[] => {
    let row = matrix.length - 1;
    let col = 0;

    while (row >= 0 && col < matrix[0].length) {
        let val = matrix[row][col];

        if (val === target) return [row, col];
        if (val < target) col++;
        if (val > target) row--;
    }

    return [-1, -1];
}

export default () => {
    let array = [
        [1, 4, 7, 12, 15, 1000],
        [2, 5, 19, 31, 32, 1001],
        [3, 8, 24, 33, 35, 1002],
        [40, 41, 42, 44, 45, 1003],
        [99, 100, 103, 106, 128, 1004],
    ];

    console.log(searchInSortedMatrix(array, 2));
};
