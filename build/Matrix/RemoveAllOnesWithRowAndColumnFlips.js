"use strict";
/**
  2128. Remove All Ones With Row And Column Flips

  1. Flip columns where the columns in the first row is a 1.
  2. The rows after should contain all 0 or 1. If not, then suggests that
     you have to flip the first column again. Which means it is impossible.
*/
Object.defineProperty(exports, "__esModule", { value: true });
const removeOnes = (grid) => {
    const flipColumn = (col) => {
        for (let row = 0; row < grid.length; row++) {
            let curr = grid[row][col];
            grid[row][col] = curr === 1 ? 0 : 1;
        }
    };
    const checkUniformity = (row) => {
        let firstCell = grid[row][0];
        for (let col = 1; col < grid[0].length; col++) {
            if (grid[row][col] !== firstCell)
                return false;
        }
        return true;
    };
    for (let col = 0; col < grid[0].length; col++) {
        if (grid[0][col] === 1)
            flipColumn(col);
    }
    for (let row = 1; row < grid.length; row++) {
        if (!checkUniformity(row))
            return false;
    }
    return true;
};
exports.default = () => {
    console.log(removeOnes([[0, 1, 0], [1, 0, 1], [0, 1, 0]]));
    console.log(removeOnes([[1, 1, 0], [0, 0, 0], [0, 0, 0]]));
};
