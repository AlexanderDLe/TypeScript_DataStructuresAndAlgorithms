/**
 * 74. Search a 2D Matrix
 * 

 Convering num to cell:
 rows = 3, cols = 4
 
 Ex1. num = 3
 
      row = Math.floor(num / 4) = 0
      col = 3 % 4 = 3.

 Converting cell to num:
 const convertCellToNum = (row:number, col:number):number => {
    let num = 0;
    num += (row * cols);
    num += col;
    return num;
  }
 Ex2. num = 6, row = 1, col = 2

      num += (1 * 4);
      num += 2
      num = 6
*/

import { PrintArray } from "../utils/Utilities";

const searchA2DMatrix = (matrix: number[][], target: number): boolean => {
  let rows = matrix.length;
  let cols = matrix[0].length;
  let L = 0;
  let R = (rows * cols) - 1;

  const convertNumToCell = (num: number): [number, number] => {
    let row = Math.floor(num / cols);
    let col = num % cols;
    return [row, col];
  }

  while (L <= R) {
    let M = Math.floor(L + (R - L) / 2);
    let [row, col] = convertNumToCell(M);
    let curr = matrix[row][col];
    
    if (curr === target) return true;

    if (target > curr) L = M + 1;
    else R = M - 1;
  }
  return false;
}

export default () => {
  let array = [
    [ 1,  3,  5,  7],
    [10, 11, 16, 20],
    [23, 30, 34, 60]]

  console.log(searchA2DMatrix(array, 3));
  console.log(searchA2DMatrix(array, 13));
};
