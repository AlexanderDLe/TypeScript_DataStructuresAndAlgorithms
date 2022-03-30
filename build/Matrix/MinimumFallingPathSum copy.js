"use strict";
/**
  931. Minimum Falling Path Sum
*/
Object.defineProperty(exports, "__esModule", { value: true });
const minSum = (matrix) => {
    const getLowestPrevVal = (row, col) => {
        let topLeft = matrix[row - 1][col - 1] || Infinity;
        let top = matrix[row - 1][col] || Infinity;
        let topRight = matrix[row - 1][col + 1] || Infinity;
        return Math.min(topLeft, top, topRight);
    };
    const rows = matrix.length;
    const cols = matrix[0].length;
    for (let row = 1; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            let lowestPrevVal = getLowestPrevVal(row, col);
            matrix[row][col] = matrix[row][col] + lowestPrevVal;
        }
    }
    return Math.min(...matrix[rows - 1]);
};
exports.default = () => {
    console.log(minSum([[2, 1, 3], [6, 5, 4], [7, 8, 9]]));
    console.log(minSum([[-19, 57], [-40, -5]]));
};
