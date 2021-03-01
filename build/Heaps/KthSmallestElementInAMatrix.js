"use strict";
/**
 * 378. Kth Smallest Element in a Matrix
 */
Object.defineProperty(exports, "__esModule", { value: true });
const findKthLargestBS = (matrix, k) => {
    if (!matrix || !matrix.length || !matrix[0].length)
        return 0;
    let n = matrix.length;
    let lo = matrix[0][0];
    let hi = matrix[n - 1][n - 1];
    let res;
    do {
    } while (false);
    return res;
};
exports.default = () => {
    const matrix = [
        [1, 5, 9],
        [10, 11, 13],
        [12, 13, 15],
    ];
    const k = 4;
    console.log(findKthLargestBS(matrix, k));
};
