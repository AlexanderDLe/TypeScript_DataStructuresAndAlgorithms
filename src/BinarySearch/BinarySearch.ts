/**
 * Grokking the Coding Interview
*/

import { PrintArray } from "../utils/Utilities";

const binarySearchA = (array: number[], target: number): number => {
    let L = 0;
    let R = array.length - 1;

    while (L <= R) {
        let M = Math.floor(L + (R - L)/2);
        let val = array[M];

        if (val === target) return M;
        if (val < target) L = M + 1;
        else R = M - 1;
    }

    return -1;
}

const binarySearch = (nums: number[], target: number): number => {
  let L = 0;
  let R = nums.length - 1;

  while (L <= R) {
    let M = Math.floor(L + (R - L) / 2);
    let curr = nums[M];
    
    if (target === curr) return M;
    if (target < curr) R = M - 1;
    else L = M + 1;
  }

  return -1;
}

export default () => {
    let nums = [-1,0,3,5,9,12];
    let target = 12;

    console.log(binarySearch(nums, target));
};
