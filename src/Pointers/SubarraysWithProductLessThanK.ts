/**
 * 713. Subarray Product Less Than K
*/

import { PrintArray } from "../utils/Utilities";

const subarraysWithProductLessThanTarget = (nums: number[], k: number): number => {
  if (k <= 1) return 0;
  let count = 0;
  let L = 0;
  let R = 0;
  let product = 1;

  while (R < nums.length) {
    product *= nums[R];
    while (product >= k) {
      product /= nums[L];
      L++;
    }
    count += R - L + 1;
    console.log(L, R, R - L + 1);
    R++;
  }
  return count;
}

export default () => {
  console.log(subarraysWithProductLessThanTarget([10,5,2,6], 100));
  console.log(subarraysWithProductLessThanTarget([1,2,3], 0));
  // console.log(subarraysWithProductLessThanTarget([10,5,2,6], 50));
  // console.log(subarraysWithProductLessThanTarget([10,5,2,6], 10));
};
