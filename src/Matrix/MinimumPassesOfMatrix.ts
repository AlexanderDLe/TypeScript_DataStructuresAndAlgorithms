/**
 AlgoExpert
*/


import { PrintMatrix } from '../utils/Utilities';

const minimumPassesOfMatrix = (matrix: number[][]): number => {
  let rows = matrix.length;
  let cols = matrix[0].length;

  let negatives = 0;
  const processCell = (row: number, col: number, queue: any): void => {
    if (row > 0 && matrix[row - 1][col] < 0) {
      matrix[row - 1][col] *= -1;
      queue.push([row - 1, col]);
      negatives--;
    }
    if (col > 0 && matrix[row][col - 1] < 0) {
      matrix[row][col - 1] *= -1;
      queue.push([row, col - 1]);
      negatives--;
    }
    if (row < rows - 1 && matrix[row + 1][col] < 0) {
      matrix[row + 1][col] *= -1;
      queue.push([row + 1, col]);
      negatives--;
    }
    if (col < cols - 1 && matrix[row][col + 1] < 0) {
      matrix[row][col + 1] *= -1;
      queue.push([row, col + 1]);
      negatives--;
    }
  }
  
  const queue: any = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      let curr = matrix[row][col];
      if (curr < 0) negatives++;
      if (curr > 0) queue.push([row, col]);
    }
  }

  let passes = 0;
  let count = queue.length;
  while (queue.length) {
    while (count) {
      let [row, col] = queue.shift();
      processCell(row, col, queue);
      count--;
    }
    count = queue.length;
    passes++;
  }

  if (negatives > 0) return -1;
  return passes - 1;
}

export default () => {
    const grid1 = [
      [0, -1, -3,  2,  0],
      [1, -2, -5, -1, -3],
      [3,  0,  0, -4, -1],
    ]
    const grid2 = [
      [1, 2],
    ]
    console.log(minimumPassesOfMatrix(grid2));
    PrintMatrix(grid2);
};
