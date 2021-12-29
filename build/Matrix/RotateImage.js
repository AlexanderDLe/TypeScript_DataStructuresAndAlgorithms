"use strict";
/**
 * 48. Rotate Image
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Utilities_1 = require("../utils/Utilities");
const rotateA = (matrix) => {
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
const rotate = (matrix) => {
    let len = matrix.length;
    let totalLayers = Math.floor(matrix.length / 2);
    for (let currLayer = 0; currLayer < totalLayers; currLayer++) {
        for (let currPos = currLayer; currPos < len - currLayer - 1; currPos++) {
            let topLeft = matrix[currLayer][currPos];
            let topRight = matrix[currPos][len - currLayer - 1];
            let botRight = matrix[len - currLayer - 1][len - 1 - currPos];
            let botLeft = matrix[len - 1 - currPos][currLayer];
            matrix[currLayer][currPos] = botLeft;
            matrix[currPos][len - currLayer - 1] = topLeft;
            matrix[len - currLayer - 1][len - 1 - currPos] = topRight;
            matrix[len - 1 - currPos][currLayer] = botRight;
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
    (0, Utilities_1.PrintMatrix)(matrix);
};
