"use strict";
/**
 * 48. Rotate Image
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Utilities_1 = require("../utils/Utilities");
const rotate = (matrix) => {
    let levels = Math.floor(matrix.length / 2);
    for (let lvl = 0; lvl < levels; lvl++) {
        let end = matrix.length - 1 - lvl;
        let i = lvl;
        let j = end;
        while (i < end) {
            let topLeft = matrix[lvl][i];
            let topRight = matrix[i][end];
            let bottomRight = matrix[end][j];
            let bottomLeft = matrix[j][lvl];
            matrix[i][end] = topLeft;
            matrix[end][j] = topRight;
            matrix[j][lvl] = bottomRight;
            matrix[lvl][i] = bottomLeft;
            i++, j--;
        }
    }
};
const rotateB = (matrix) => {
    let rotations = Math.floor(matrix.length / 2);
    for (let i = 0; i < rotations; i++) {
        let j = matrix.length - 1 - i;
        let k = i;
        let m = j;
        while (k < j) {
            let topLeft = matrix[i][k];
            let topRight = matrix[k][j];
            let botRight = matrix[j][m];
            let botLeft = matrix[m][i];
            matrix[i][k] = botLeft;
            matrix[k][j] = topLeft;
            matrix[j][m] = topRight;
            matrix[m][i] = botRight;
            k++;
            m--;
        }
    }
};
exports.default = () => {
    const matrix = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]
    ];
    rotate(matrix);
    Utilities_1.PrintMatrix(matrix);
};
