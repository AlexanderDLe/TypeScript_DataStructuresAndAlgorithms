"use strict";
/**
 * 64. Minimum Path Sum
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Utilities_1 = require("../utils/Utilities");
const minPathSum = (grid) => {
    let rows = grid.length;
    let cols = grid[0].length;
    for (let c = cols - 1; c >= 0; c--) {
        for (let r = rows - 1; r >= 0; r--) {
            if (r === rows - 1 && c === cols - 1)
                continue;
            if (c === cols - 1)
                grid[r][c] += grid[r + 1][c];
            else if (r === rows - 1)
                grid[r][c] += grid[r][c + 1];
            else
                grid[r][c] += Math.min(grid[r + 1][c], grid[r][c + 1]);
        }
    }
    Utilities_1.PrintMatrix(grid);
    return grid[0][0];
};
exports.default = () => {
    const grid = [
        [1, 3, 1],
        [1, 5, 1],
        [4, 2, 1]
    ];
    console.log(minPathSum(grid));
};
