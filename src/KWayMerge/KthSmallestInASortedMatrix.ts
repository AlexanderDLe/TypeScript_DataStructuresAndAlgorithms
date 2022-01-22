/**
 * Grokking the Coding Interview
*/

import { PrintArray } from "../utils/Utilities";
let Heap = require('collections/heap');

const KthSmallestInASortedMatrix = (matrix: number[][], K: number): number => {
    const minSortPattern = (a:any,b:any) => {
        return b.value - a.value;
    }

    const addAdjacentCells = (cell: any):void => {
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
    }

    let minHeap = new Heap([], null, minSortPattern);
    minHeap.push({value:matrix[0][0], row: 0, col: 0})

    let result = 0;
    while(K) {
        let curr = minHeap.pop();
        result = curr.value;
        addAdjacentCells(curr);
        K--;
    }

    return result;
}

export default () => {
    let Matrix = [
        [2, 6, 8], 
        [3, 7, 10],
        [5, 8, 11]
    ]
    let K = 5;
    
    console.log(KthSmallestInASortedMatrix(Matrix, K));
};
