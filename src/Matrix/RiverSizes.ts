import { PrintArray } from "../utils/Utilities";

/**
 * 207. Course Schedule
 */
const riverSizes = (matrix: number[][]): number[] => {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const getRiverLengthDFS = (row:number, col:number): number => {
    if (matrix[row][col] === 0) return 0;
    matrix[row][col] = 0;

    let top = row > 0 ? getRiverLengthDFS(row - 1, col) : 0;
    let right = col < cols - 1 ? getRiverLengthDFS(row, col + 1) : 0;
    let down = row < rows - 1 ? getRiverLengthDFS(row + 1, col) : 0;
    let left = col > 0 ? getRiverLengthDFS(row, col - 1) : 0;

    return top + right + down + left + 1;
  }

  let lengths: number[] = [];

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === 1) {
        lengths.push(getRiverLengthDFS(row, col));
      }
    }
  }
  
  return lengths;
}

export default () => {
  const matrix = [
    [1, 0, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 0],
  ]

  console.log(riverSizes(matrix));
};
