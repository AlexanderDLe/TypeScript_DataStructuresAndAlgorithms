/**
 * AlgoExpert
 * 
 * [3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3]
 * 
 * [ 0 | 1 | 1 | 1 | 2 | 2 | 3 | 3 | 3 | 4 | 4]
 * [ 0 | 1 | 1 | 1 | 2 | 2 | 3 | 3 | 3 | 4 | 0 ]
 */

import { PrintArray, PrintMatrix } from "../utils/Utilities";

const minNumberOfJumps = (array: number[]): number => {
  const DP = new Array(array.length).fill(0);
  let jumpsLeft = 0;
  let jumps = 0;

  for (let i = 1; i < array.length; i++) {
    if (jumpsLeft > 0) {
      DP[i] = jumps;
      jumpsLeft--;
      continue;
    }

    jumps++;
    for (let j = i - 1; j >= 0; j--) {
      jumpsLeft = Math.max(jumpsLeft, array[j] - (i - j));
    }
    DP[i] = jumps;
  }

  return DP[DP.length - 1];
}

export default () => {
    const array = [3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3]
    console.log(minNumberOfJumps(array));
};
