/**
 * Grokking the Coding Interview
*/

import { PrintArray } from "../utils/Utilities";

const subarraysWithProductLessThanTarget = (arr: number[], target: number): number[][] => {
  let result: number[][] = []

  for (let L = 0; L < arr.length; L++) {
    let subarr: number[] = [];
    let product = 1;

    for (let R = L; R < arr.length; R++) {
      product *= arr[R];
      if (product < target) {
        subarr.push(arr[R]);
        result.push(subarr.slice(0));
      } else {
        break;
      }
    }
  }

  return result;
}

export default () => {
  let arr1 = [2, 5, 3, 10], target1 = 30;
  let arr2 = [8, 2, 6, 5], target2 = 50;

  console.log(subarraysWithProductLessThanTarget(arr1, target1));
  console.log(subarraysWithProductLessThanTarget(arr2, target2));
};
