"use strict";
/**
 * 221. Maximal Square
 *
 * Iterate through matrix with boundaries determined by current max.
 * We don't need to iterate further if we leave valid bounds
 * i.e. if submatrix would extend outside actual matrix
 *
 * If a valid cell has an entry of 1, then we scan to see if all squares
 * in the corresponding sub-matrix consists of all 1s starting from top-left cell.
 * If submatrix consists of all 1s, we increment max and check again if applicable.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Utilities_1 = require("../utils/Utilities");
// If a valid cell has an entry of 1, then we scan to see if all squares
// in the corresponding sub-matrix consists of all 1s starting from top-left cell.
const scanCandidate = (matrix, row, col, max) => {
    let check = max + 1;
    for (let i = row; i < row + check; i++) {
        for (let j = col; j < col + check; j++) {
            if (matrix[i][j] === '0')
                return false;
        }
    }
    return true;
};
const maximalSquare = (matrix) => {
    if (!matrix.length || !matrix[0].length)
        return 0;
    let rows = matrix.length;
    let cols = matrix[0].length;
    let max = 0;
    for (let row = 0; row < rows; row++) {
        if (row === rows - max)
            break;
        for (let col = 0; col < cols; col++) {
            if (col === cols - max)
                break;
            if (matrix[row][col] === '1') {
                if (scanCandidate(matrix, row, col, max)) {
                    max++;
                    if (row === rows - max)
                        return max * max;
                    if (col === cols - max)
                        break;
                    col--;
                }
            }
        }
    }
    return max * max;
};
exports.default = () => {
    const matrix = [
        ['1', '1'],
        ['1', '1']
    ];
    Utilities_1.PrintMatrix(matrix);
    console.log(maximalSquare(matrix));
};
