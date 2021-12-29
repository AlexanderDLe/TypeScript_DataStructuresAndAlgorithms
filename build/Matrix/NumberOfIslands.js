"use strict";
/**
 * 200. Number of Islands
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Utilities_1 = require("../utils/Utilities");
const numIslandsA = (grid) => {
    if (!grid.length)
        return 0;
    let rows = grid.length;
    let cols = grid[0].length;
    let count = 0;
    const sinkIsland = (row, col) => {
        if (row < 0 || row === rows)
            return;
        if (col < 0 || col === cols)
            return;
        if (grid[row][col] === '0')
            return;
        grid[row][col] = '0';
        sinkIsland(row + 1, col);
        sinkIsland(row - 1, col);
        sinkIsland(row, col + 1);
        sinkIsland(row, col - 1);
    };
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] === '1') {
                count++;
                sinkIsland(row, col);
            }
            (0, Utilities_1.PrintMatrix)(grid);
        }
    }
    return count;
};
const numIslands = (grid) => {
    let count = 0;
    const destroy = (row, col) => {
    };
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === '1') {
                destroy(row, col);
                count++;
            }
        }
    }
    return count;
};
exports.default = () => {
    const grid = [
        ['1', '1', '0', '0', '0'],
        ['1', '1', '0', '0', '0'],
        ['0', '0', '1', '0', '0'],
        ['0', '0', '0', '1', '1']
    ];
    console.log(numIslands(grid));
};
