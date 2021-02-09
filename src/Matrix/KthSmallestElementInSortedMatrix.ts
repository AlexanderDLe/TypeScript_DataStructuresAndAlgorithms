/**
 *  378. Kth Smallest Element in a Sorted Matrix
 */

import { PrintMatrix } from '../utils/Utilities';

const kthSmallest = (matrix: number[][], k: number): number => {
    let len = matrix.length;
    
    for (let row = 0; row < len; row++) {
        for (let col = 0; col < len; col++) { 
            k--;
            if (k === 0) return matrix[row][col];
        }
    }
};

export default () => {
    const board = [[1, 5, 9], [10, 11, 13], [12, 13, 15]];
    const k = 8;

    PrintMatrix(board);
    console.log(kthSmallest(board, 8))
};
