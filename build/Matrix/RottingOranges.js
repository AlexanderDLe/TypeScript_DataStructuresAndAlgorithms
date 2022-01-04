"use strict";
/**
 * 200. Number of Islands
 */
Object.defineProperty(exports, "__esModule", { value: true });
const orangesRotting = (grid) => {
    let count = 0;
    let rotting = false;
    let rows = grid.length;
    let cols = grid[0].length;
    const convertRot = () => {
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                if (grid[row][col] === 3) {
                    grid[row][col] = 2;
                }
            }
        }
    };
    const checkFresh = () => {
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                if (grid[row][col] === 1) {
                    return true;
                }
            }
        }
    };
    do {
        rotting = false;
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                if (grid[row][col] === 2) {
                    if (row + 1 < rows && grid[row + 1][col] === 1) {
                        grid[row + 1][col] = 3;
                        rotting = true;
                    }
                    if (row - 1 >= 0 && grid[row - 1][col] === 1) {
                        grid[row - 1][col] = 3;
                        rotting = true;
                    }
                    if (col + 1 < cols && grid[row][col + 1] === 1) {
                        grid[row][col + 1] = 3;
                        rotting = true;
                    }
                    if (col - 1 >= 0 && grid[row][col - 1] === 1) {
                        grid[row][col - 1] = 3;
                        rotting = true;
                    }
                }
            }
        }
        count = rotting ? count + 1 : count;
        convertRot();
    } while (rotting);
    const freshLeft = checkFresh();
    return freshLeft ? -1 : count;
};
exports.default = () => {
    const grid = [
        [2, 1, 1],
        [1, 1, 0],
        [0, 1, 1]
    ];
    console.log(orangesRotting(grid));
};
