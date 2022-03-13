/**
 * 15. 3Sum
*/

import { PrintArray } from "../utils/Utilities";

const threeSum = (nums: number[]): number[][] => {
  nums = nums.sort((a, b) => a - b);
  const result: number[][] = []

  for (let L = 0; L < nums.length - 2; L++) {
    let M = L + 1;
    let R = nums.length - 1;
    
    while (M < R) {
      let sum = nums[L] + nums[M] + nums[R];
      if (sum === 0) {
        result.push([nums[L], nums[M], nums[R]]);
        while (M < R && nums[M] === nums[M + 1]) M++;
        while (R > M && nums[R] === nums[R - 1]) R--;
        M++, R--;
      } else if (sum < 0) {
        M++;
      } else if (sum > 0) {
        R--;
      }
    }
    while (nums[L] === nums[L + 1]) L++;
  }

  return result;
}

export default () => {
  let arr1 = [-3, 0, 1, 2, -1, 1, -2];
  let arr2 = [-5, 2, -1, -2, 3];

  PrintArray(threeSum(arr1));
  PrintArray(threeSum(arr2));
  PrintArray(threeSum([-1,0,1,2,-1,-4]));
};
