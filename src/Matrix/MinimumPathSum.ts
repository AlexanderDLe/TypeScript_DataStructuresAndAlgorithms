/**
 * 64. Minimum Path Sum
 */


import { PrintMatrix } from '../utils/Utilities';

/*  Summing Analysis

    Time Complexity: O(n) where n is the number of elements in matrix.
    We traverse through all elements of the matrix.

    Space Complexity: O(1). No material data structures utilized.

    Strategy: The strategy is based on the idea that from the starting point,
    you can only move right or down. By iterating backwards from the end point,
    we can take the minimum sum of either:
    
    1. Current value + bottom
    2. Current value + right

    We assign that value to the current element in the matrix.
    Eventually, you will reach the starting position with the minimum sum.

    Edge Cases:

    If the current position is in the last row or the last col, there will not 
    be either a bottom or right element. In which case, you can simply add the
    current element to the available value.
*/

const minPathSum = (grid: number[][]): number => {
    let rowEnd = grid.length - 1;
    let colEnd = grid[0].length - 1;

    for (let row = rowEnd; row >= 0; row--) {
        for (let col = colEnd; col >= 0; col--) {
            if (row === rowEnd && col === colEnd) continue;
            let bottom = row === rowEnd ? Infinity : grid[row + 1][col];
            let right = col === colEnd ? Infinity : grid[row][col + 1];

            grid[row][col] += Math.min(bottom, right);
        }
    }
    
    PrintMatrix(grid);
    return grid[0][0];  
}

export default () => {
    const grid = [
        [1, 3, 1],
        [1, 5, 1],
        [4, 2, 1]
    ];
    const grid2 = [[1, 2, 3], [4, 5, 6]];
    PrintMatrix(grid2);
    console.log(minPathSum(grid2));
};
