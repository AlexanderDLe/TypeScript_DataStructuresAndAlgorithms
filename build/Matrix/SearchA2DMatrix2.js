"use strict";
/**
 * 240. Search A 2D Matrix 2
 */
Object.defineProperty(exports, "__esModule", { value: true });
const searchMatrix = (matrix, target) => {
    if (!matrix.length || !matrix[0].length)
        return false;
    let col = matrix[0].length - 1;
    let row = 0;
    while (col >= 0 && row <= matrix.length - 1) {
        if (target == matrix[row][col])
            return true;
        else if (target < matrix[row][col])
            col--;
        else if (target > matrix[row][col])
            row++;
    }
    return false;
};
exports.default = () => {
    const matrix = [
        [1, 4, 7, 11, 15],
        [2, 5, 8, 12, 19],
        [3, 6, 9, 16, 22],
        [10, 13, 14, 17, 24],
        [18, 21, 23, 26, 30]
    ];
    const target = 18;
    console.log(searchMatrix(matrix, target));
};
