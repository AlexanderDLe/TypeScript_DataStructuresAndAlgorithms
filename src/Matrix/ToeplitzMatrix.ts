/**
 766. Toeplitz Matrix
*/


import { PrintMatrix, PrintObject } from '../utils/Utilities';
import SearchA2DMatrix2 from './SearchA2DMatrix2';

const diagonalOrder = (matrix: number[][]): boolean => {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const checkDiagonal = (row:number, col:number) => {
    while (row + 1 < rows && col + 1 < cols) {
      if (matrix[row][col] !== matrix[row + 1][col + 1]) return false;
      row++, col++;
    }
    return true;
  }

  for (let row = 0; row < rows; row++) {
    if (!checkDiagonal(row, 0)) return false;
  }
  for (let col = 1; col < cols; col++) {
    if (!checkDiagonal(0, col)) return false;
  }

  return true;
}

export default () => {
  console.log(diagonalOrder([[1,2,3,4],[5,1,2,3],[9,5,1,2]]))
  console.log(diagonalOrder([[1,2],[2,2]]))
};
