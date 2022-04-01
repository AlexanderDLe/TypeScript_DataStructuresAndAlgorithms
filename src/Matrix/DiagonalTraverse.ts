/**
 498. Diagonal Traverse
*/


import { PrintArray, PrintMatrix, PrintObject } from '../utils/Utilities';
import SearchA2DMatrix2 from './SearchA2DMatrix2';

const diagonalOrderRef = (matrix: number[][]): number[] => {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result: any = new Array(rows + cols -1).fill(0).map(() => []);

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      // row + col is basically the distance of a cell from the top-left cell.
      // each diagonal must be going in opposite directions (hence the unshift vs push alternating)

      if ((row + col) % 2 === 0) result[row + col].unshift(matrix[row][col]);
      else result[row + col].push(matrix[row][col]);
    }
  }
  PrintMatrix(result);
  return result.flat();
}

const diagonalOrder = (matrix: number[][]): number[] => {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result:any = new Array(rows + cols - 1).fill(0).map(() => []);

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      let diagonal = row + col;
      let value = matrix[row][col];

      // When to unshift vs push?
      // Imagine the 3 on the top right cell, it has to occur last in the
      // diagonal going upwards - therefore we unshift that.
      if (diagonal % 2 === 0) result[row + col].unshift(value)
      else result[row + col].push(value);
    }
  }

  return result.flat();
}

export default () => {
  PrintArray(diagonalOrder([[1,2,3],[4,5,6],[7,8,9]]))
  PrintArray(diagonalOrder([[1,2],[3,4]]))
};
