/**
 * Grokking the Coding Interview
*/

import { PrintArray } from "../utils/Utilities";

const pairWithTargetSum = (arr: number[], target_sum: number): number[] => {
  let result: number[] = [];
  let L = 0;
  let R = arr.length - 1;

  while (L < R) {
    let currSum = arr[L] + arr[R];
    if (currSum === target_sum) return [L, R];
    if (currSum < target_sum) L++;
    else R--;
  }

  return result;
}

export default () => {
  let arr1 = [1, 2, 3, 4, 6], target1 = 6;
  let arr2 = [2, 5, 9, 11], target2 = 11;

  PrintArray(pairWithTargetSum(arr1, target1));
  PrintArray(pairWithTargetSum(arr2, target2));
};
