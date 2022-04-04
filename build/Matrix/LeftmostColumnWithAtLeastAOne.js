"use strict";
/**
 1428. Leftmost Column with at least a One
*/
Object.defineProperty(exports, "__esModule", { value: true });
class BinaryMatrix {
    constructor(matrix) {
        this.matrix = matrix;
    }
    get(row, col) {
        return this.matrix[row][col];
    }
    dimensions() {
        return [this.matrix.length, this.matrix[0].length];
    }
}
const leftmostColumn = (binaryMatrix) => {
    const [rows, cols] = binaryMatrix.dimensions();
    let column = -1;
    let row = 0;
    let col = cols - 1;
    while (row < rows && col >= 0) {
        let val = binaryMatrix.get(row, col);
        if (val === 0)
            row++;
        if (val === 1) {
            column = col;
            col--;
        }
    }
    return column;
};
exports.default = () => {
    console.log(leftmostColumn(new BinaryMatrix([[0, 0], [1, 1]])));
    console.log(leftmostColumn(new BinaryMatrix([[0, 0], [0, 1]])));
    console.log(leftmostColumn(new BinaryMatrix([[0, 0], [0, 0]])));
};
