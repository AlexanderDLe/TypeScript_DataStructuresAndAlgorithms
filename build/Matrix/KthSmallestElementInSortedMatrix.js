"use strict";
/**
 * 378. Kth Smallest Element in a Matrix
 */
Object.defineProperty(exports, "__esModule", { value: true });
const priority_queue_1 = require("@datastructures-js/priority-queue");
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
const findKthSmallestHeap = (matrix, k) => {
    const n = matrix.length;
    let maxHeap = new priority_queue_1.MaxPriorityQueue({ priority: (x) => x.value });
    for (let row = 0; row < n; row++) {
        for (let col = 0; col < n; col++) {
            let cell = { value: matrix[row][col] };
            maxHeap.enqueue(cell);
            if (maxHeap.size() > k)
                maxHeap.dequeue();
        }
    }
    return maxHeap.dequeue().element.value;
};
const findKthSmallest = (matrix, k) => {
    let n = matrix.length;
    let L = matrix[0][0];
    let R = matrix[n - 1][n - 1] + 1;
    while (L < R) {
        let M = Math.floor(L + (R - L) / 2);
        let count = 0;
        for (let row = 0; row < n; row++) {
            for (let col = 0; col < n; col++) {
                let cell = matrix[row][col];
                if (cell <= M)
                    count++;
                else
                    break;
            }
        }
        if (count < k)
            L = M + 1;
        else
            R = M;
    }
    return L;
};
exports.default = () => {
    const matrix = [
        [1, 5, 9],
        [10, 11, 13],
        [12, 13, 15],
    ];
    const k = 8;
    console.log(findKthSmallest(matrix, k));
};
