"use strict";
/**
 * Grokking the Coding Interview
*/
Object.defineProperty(exports, "__esModule", { value: true });
let Heap = require('collections/heap');
const KthSmallestInASortedMatrix = (matrix, K) => {
    const minSortPattern = (a, b) => {
        return b.value - a.value;
    };
    const addAdjacentCells = (cell) => {
        if (cell.row < matrix.length - 1) {
            minHeap.push({
                value: matrix[cell.row + 1][cell.col],
                row: cell.row + 1,
                col: cell.col
            });
        }
        if (cell.col < matrix[0].length - 1) {
            minHeap.push({
                value: matrix[cell.row][cell.col + 1],
                row: cell.row,
                col: cell.col + 1
            });
        }
    };
    let minHeap = new Heap([], null, minSortPattern);
    minHeap.push({ value: matrix[0][0], row: 0, col: 0 });
    let result = 0;
    while (K) {
        let curr = minHeap.pop();
        result = curr.value;
        addAdjacentCells(curr);
        K--;
    }
    return result;
};
exports.default = () => {
    let Matrix = [
        [2, 6, 8],
        [3, 7, 10],
        [5, 8, 11]
    ];
    let K = 5;
    console.log(KthSmallestInASortedMatrix(Matrix, K));
};
