/**
 * 
 * 
 */

import { PrintArray, PrintMatrix, PrintObject } from "../utils/Utilities";

const numberOfWaysToTraverseGraph = (width:number, height:number): number => {
  let DP = new Array(height).fill(0);
  DP = DP.map(item => new Array(width).fill(0));

  for (let col = 0; col < width; col++) {
    DP[0][col] = 1;
  }
  for (let row = 0; row < height; row++) {
    DP[row][0] = 1;
  }

  for (let row = 1; row < height; row++) {
    for (let col = 1; col < width; col++) {
      DP[row][col] = DP[row - 1][col] + DP[row][col - 1];
    }
  }
  
  return DP[height - 1][width - 1];
}

export default () => {
  console.log(numberOfWaysToTraverseGraph(4, 3));
};
