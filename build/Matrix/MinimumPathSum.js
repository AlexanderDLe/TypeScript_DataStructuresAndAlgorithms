"use strict";
/**
 * 64. Minimum Path Sum
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Utilities_1 = require("../utils/Utilities");
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
const minPathSumB = (grid) => {
    const getCellValue = (row, col) => {
        if (row >= grid.length || col >= grid[0].length)
            return undefined;
        return grid[row][col];
    };
    for (let row = grid.length - 1; row >= 0; row--) {
        for (let col = grid[0].length - 1; col >= 0; col--) {
            let currentCell = getCellValue(row, col);
            let bottomCell = getCellValue(row + 1, col);
            let rightCell = getCellValue(row, col + 1);
            if (bottomCell === undefined && rightCell === undefined)
                continue;
            else if (bottomCell === undefined)
                grid[row][col] = currentCell + rightCell;
            else if (rightCell === undefined)
                grid[row][col] = currentCell + bottomCell;
            else
                grid[row][col] = Math.min(currentCell + bottomCell, currentCell + rightCell);
        }
    }
    return grid[0][0];
};
const minPathSum = (grid) => {
    let rowsEnd = grid.length - 1;
    let colsEnd = grid[0].length - 1;
    for (let row = rowsEnd; row >= 0; row--) {
        for (let col = colsEnd; col >= 0; col--) {
            if (row === rowsEnd && col === colsEnd)
                continue;
            let bottom = row === rowsEnd ? Infinity : grid[row + 1][col];
            let right = col === colsEnd ? Infinity : grid[row][col + 1];
            grid[row][col] += Math.min(bottom, right);
        }
    }
    return grid[0][0];
};
exports.default = () => {
    const grid = [
        [1, 3, 1],
        [1, 5, 1],
        [4, 2, 1]
    ];
    console.log(minPathSum(grid));
    (0, Utilities_1.PrintMatrix)(grid);
};
