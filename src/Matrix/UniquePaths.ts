/**
 * 62. Unique Paths
 */

import { PrintMatrix, PrintObject } from '../utils/Utilities';

/*  Matrix Analysis

    Time Complexity: O(m * n). We iterate over m * n elements because
    it is a matrix.

    Space Complexity: O(m * n). We build the matrix of m * n elements.

    Strategy: The strategy is based on the fact that you can only move down and
    to the right. That means, to get to a certain cell, you must either be
    coming from the left or the top. 
    
    To calculate the number of unique paths that you can take to a certain cell, 
    you add the unique paths to the cell above to the unique paths to cell to the left.

    [0 1]   [0 1 1]
    [1 2]   [1 2 3] <- Every cell is a sum of its neighboring top + left cells.
*/

const uniquePathsA = (m: number, n: number): number => {
    let matrix: number[][] = [];
    
    for (let row = 0; row < m; row++) {
        matrix.push(new Array(n).fill(1));
    }

    for (let row = 1; row < m; row++) {
        for (let col = 1; col < n; col++) {
            matrix[row][col] = matrix[row - 1][col] + matrix[row][col - 1];
        }
    }

    return matrix[m - 1][n - 1];
}

const uniquePaths = (m: number, n: number): number => {
  let DP: number[][] = [];

  DP.push(new Array(n).fill(1));
  for (let i = 1; i < m; i++) {
    DP.push(new Array(n).fill(0));
    DP[i][0] = 1;
  }

  for (let row = 1; row < m; row++) {
    for (let col = 1; col < n; col++) {
      DP[row][col] = DP[row - 1][col] + DP[row][col - 1];
    }
  }
  
  return DP[m - 1][n - 1];
}

export default () => {
    const m = 3;
    const n = 7;
    console.log(uniquePaths(m, n));
};
