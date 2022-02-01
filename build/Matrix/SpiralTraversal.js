"use strict";
/**
 * 62. Unique Paths
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Utilities_1 = require("../utils/Utilities");
/*  Matrix Analysis

*/
const spiralTraversalMySolution = (array) => {
    let result = [];
    let rows = array.length;
    let cols = array[0].length;
    let rowLayers = Math.ceil(rows / 2);
    let colLayers = Math.ceil(cols / 2);
    let minLayer = Math.min(rowLayers, colLayers);
    let fullCycleLastLayer = !(rows % 2) && !(cols % 2);
    for (let layer = 0; layer < minLayer; layer++) {
        // Process first row
        for (let col = layer; col < cols - layer; col++) {
            result.push(array[layer][col]);
        }
        // Process right column
        for (let row = layer + 1; row < rows - layer; row++) {
            result.push(array[row][cols - layer - 1]);
        }
        // If matrix is not square, then don't repush items on last layer
        if (!fullCycleLastLayer && layer === minLayer - 1)
            break;
        // Process bottom row
        for (let col = cols - layer - 2; col >= layer; col--) {
            result.push(array[rows - layer - 1][col]);
        }
        // Process left column
        for (let row = rows - layer - 2; row >= layer + 1; row--) {
            result.push(array[row][layer]);
        }
    }
    return result;
};
const spiralTraversal = (array) => {
    const result = [];
    let startRow = 0;
    let endRow = array.length - 1;
    let startCol = 0;
    let endCol = array[0].length - 1;
    while (startRow <= endRow && startCol <= endCol) {
        for (let col = startCol; col <= endCol; col++) {
            result.push(array[startRow][col]);
        }
        for (let row = startRow + 1; row <= endRow; row++) {
            result.push(array[row][endCol]);
        }
        for (let col = endCol - 1; col >= startCol; col--) {
            if (startRow === endRow)
                break;
            result.push(array[endRow][col]);
        }
        for (let row = endRow - 1; row > startRow; row--) {
            if (startCol === endCol)
                break;
            result.push(array[row][startCol]);
        }
        startRow++;
        endRow--;
        startCol++;
        endCol--;
    }
    return result;
};
exports.default = () => {
    const matrix1 = [
        [1, 2, 3, 4],
        [12, 13, 14, 5],
        [11, 16, 15, 6],
        [10, 9, 8, 7],
    ];
    const matrix2 = [
        [1, 2, 3],
        [12, 13, 4],
        [11, 14, 5],
        [10, 15, 6],
        [9, 8, 7],
    ];
    const matrix3 = [
        [1, 2, 3],
        [12, 13, 4],
        [11, 14, 5],
        [10, 15, 6],
        [9, 8, 7]
    ];
    (0, Utilities_1.PrintArray)(spiralTraversal(matrix3));
};
