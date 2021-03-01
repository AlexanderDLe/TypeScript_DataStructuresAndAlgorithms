"use strict";
/**
 * 378. Kth Smallest Element in a Matrix
 */
Object.defineProperty(exports, "__esModule", { value: true });
const findKthLargestHeap = (matrix, k) => {
    return 0;
};
const findKthLargestBS = (matrix, k) => {
    if (!matrix || !matrix.length || !matrix[0].length)
        return 0;
    let n = matrix.length;
    let lo = matrix[0][0];
    let hi = matrix[n - 1][n - 1];
    const getValues = () => {
        let mid = Math.floor((lo + hi) / 2);
        let highestLow = lo;
        let lowestHigh = hi;
        let row = n - 1;
        let col = 0;
        let count = 0;
        while (row >= 0 && col < n) {
            let curr = matrix[row][col];
            if (curr > mid) {
                lowestHigh = Math.min(lowestHigh, curr);
                row--;
            }
            else {
                highestLow = Math.max(highestLow, curr);
                col++;
                count += row + 1;
            }
        }
        console.log(mid, count, highestLow, lowestHigh);
        return { count, highestLow, lowestHigh };
    };
    do {
        let { count, highestLow, lowestHigh } = getValues();
        if (count === k)
            return highestLow;
        else if (count < k)
            lo = highestLow;
        else if (count > k)
            hi = lowestHigh;
    } while (lo < hi);
};
exports.default = () => {
    const matrix = [
        [1, 5, 9],
        [10, 11, 13],
        [12, 13, 15],
    ];
    const k = 8;
    console.log(findKthLargestHeap(matrix, k));
};
