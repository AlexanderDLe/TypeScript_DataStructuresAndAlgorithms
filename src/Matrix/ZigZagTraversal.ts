/**
 * 

  Rows = 4, Cols = 4

  [[0,0], [0, 1], [0, 2], [0, 3]],
  [[1,0], [1, 1], [1, 2], [1, 3]],
  [[2,0], [2, 1], [2, 2], [2, 3]],
  [[3,0], [3, 1], [3, 2], [3, 3]],
  
  *************************************************  
  
  Rows = 3, Cols = 4
  
  [[0,0], [0, 1], [0, 2], [0, 3]],
  [[1,0], [1, 1], [1, 2], [1, 3]],
  [[2,0], [2, 1], [2, 2], [2, 3]],

  1. [0, 0]
  2. [1, 0]
  3. [0, 1]
  4. [0, 2]
  5. [1, 1]
  6. [2, 0]
  
*************************************************

  Rows = 4, Cols = 2
  [[0,0], [0, 1]],
  [[1,0], [1, 1]],
  [[2,0], [2, 1]],
  [[3,0], [3, 1]],

  1. [0, 0]
  2. [1, 0]
  3. [0, 1]
  4. [1, 1]
  5. [2, 0]
*/

import { PrintArray } from "../utils/Utilities";


const zigzagTraversal = (board: number[][]): number[] => {
  const rows = board.length;
  const cols = board[0].length;

  const result: number[] = [];

  let traveler = [0, 0];
  let goingDown = true;

  while (traveler[0] !== rows - 1 || traveler[1] !== cols - 1) {
    let [row, col] = traveler;
    result.push(board[row][col]);

    if (goingDown && col === 0) {
      if (row === rows - 1) traveler = [row, col + 1];
      else traveler = [row + 1, col];
      goingDown = false;
      continue;
    }
    
    if (goingDown && row === rows - 1) {
      traveler = [row, col + 1];
      goingDown = false;
      continue;
    }

    if (!goingDown && row === 0) {
      if (col === cols - 1) traveler = [row + 1, col];
      else traveler = [row, col + 1];
      goingDown = true;
      continue;
    }
    
    if (!goingDown && col === cols - 1) {
      traveler = [row + 1, col];
      goingDown = true;
      continue;
    }

    if (goingDown) traveler = [row + 1, col - 1];
    else traveler = [row - 1, col + 1];
  }
  result.push(board[rows - 1][cols - 1])
  return result;
};

export default () => {
    const board = [
        [1,  3,  4, 10],
        [2,  5,  9, 11],
        [6,  8, 12, 15],
        [7, 13, 14, 16],
      ];
    PrintArray(zigzagTraversal(board));
};
