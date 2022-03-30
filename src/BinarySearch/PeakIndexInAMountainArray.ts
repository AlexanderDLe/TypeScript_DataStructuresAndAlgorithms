/**
 * Peak Index In A Mountain Array
*/

import { PrintArray } from "../utils/Utilities";

const peakIndexInAMountainArray = (arr: number[]): number => {
  let L = 0;
  let R = arr.length - 1;

  while (L <= R) {
    let M = Math.floor(L + (R - L) / 2);
    let curr = arr[M];

    let Lval = arr[M - 1] || -Infinity;
    let Rval = arr[M + 1] || -Infinity;

    if (curr > Lval && curr > Rval) return M;

    if (curr > Lval) L = M + 1;
    else R = M - 1;
  }

  return -1;
}

export default () => {
  let arr = [5, 4, 3, 2, 1];

  let ar1 = [0, 0, 1, 2, 3, 0];

  console.log(peakIndexInAMountainArray(arr));
};
