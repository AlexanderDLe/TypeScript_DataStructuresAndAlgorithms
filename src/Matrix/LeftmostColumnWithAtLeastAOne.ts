/**
 1428. Leftmost Column with at least a One
*/


import { PrintArray, PrintMatrix, PrintObject } from '../utils/Utilities';

class BinaryMatrix {
  matrix:number[][];

  constructor(matrix:number[][]) {
    this.matrix = matrix;
  }

  get(row:number,col:number):number {
    return this.matrix[row][col];
  }

  dimensions() {
    return [this.matrix.length, this.matrix[0].length];
  }
}

const leftmostColumn = (binaryMatrix: BinaryMatrix): number => {
  const [rows, cols] = binaryMatrix.dimensions();
  let column = -1;
  let row = 0;
  let col = cols - 1;

  while (row < rows && col >= 0) {
    let val = binaryMatrix.get(row, col);

    if (val === 0) row++;
    if (val === 1) {
      column = col;
      col--;
    }
  }

  return column;
}

export default () => {
  console.log(leftmostColumn(new BinaryMatrix([[0,0],[1,1]])))
  console.log(leftmostColumn(new BinaryMatrix([[0,0],[0,1]])))
  console.log(leftmostColumn(new BinaryMatrix([[0,0],[0,0]])))
};
