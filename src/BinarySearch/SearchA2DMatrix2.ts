/**
 * 240. Search a 2D Matrix 2
 * 
*/

import { PrintArray } from "../utils/Utilities";

const searchA2DMatrix = (matrix: number[][], target: number): boolean => {
  let row = matrix.length - 1;
  let col = 0;

  while (row >= 0 && col < matrix[0].length) {
    let curr = matrix[row][col];
    if (curr === target) return true;

    if (target < curr) row--;
    else col++;
  }

  return false;
}

export default () => {
  let matrix = [
    [ 1,  4,  7, 11, 15],
    [ 2,  5,  8, 12, 19],
    [ 3,  6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
  ]

  console.log(searchA2DMatrix(matrix, 5));
  console.log(searchA2DMatrix(matrix, 20));
};
