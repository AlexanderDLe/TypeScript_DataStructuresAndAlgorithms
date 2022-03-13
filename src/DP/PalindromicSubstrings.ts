/**
 * 647. Palindromic Substrings
 */
import { PrintMatrix } from '../utils/Utilities';

const countSubstringsA = (s: string): number => {
  let count = s.length;
  let matrix: number[][] = [];

  for (let i = 0; i < s.length; i++) {
    matrix.push(new Array(s.length).fill(0));
    matrix[i][i] = 1;
  }
  
  for (let col = 1; col < s.length; col++) {
    for (let row = 0; row < col; row++) {
      if (row === col - 1 || matrix[row + 1][col - 1]) {
        if (s[row] === s[col]) {
          count++;
          matrix[row][col] = 1;
        }
      }
    }
  }

  return count;
}

const countSubstringsMatrix = (s: string): number => {
  let count = s.length;
  let matrix: number[][] = [];

  for (let i = 0; i < s.length; i++) {
    matrix.push(new Array(s.length).fill(0))
    matrix[i][i] = 1;
  }

  for (let col = 1; col < matrix.length; col++) {
    for (let row = 0; row < col; row++) {
      if (matrix[row + 1][col - 1] === 1 || matrix[row + 1][col] === 1) {
        if (s[row] === s[col]) {
          count++;
          matrix[row][col] = 1;
        }
      }
    }
  }

  PrintMatrix(matrix);

  return count;
}

const countSubstrings = (s: string): number => {
  const DP: number[][] = []
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    DP.push(new Array(s.length).fill(0));
    DP[i][i] = 1;
    count++;
  }

  for (let col = 1; col < s.length; col++) {
    for (let row = 0; row < col; row++) {
      if (col - row === 1 || DP[row + 1][col - 1]) {
        if (s[row] === s[col]) {
          DP[row][col] = 1;
          count++;
        }
      }
    }
  }
  
  return count;
}

export default (): void => {
  let str = 'aabaa';
  console.log(countSubstrings(str));
};
