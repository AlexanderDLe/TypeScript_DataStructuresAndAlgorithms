/**
 * 209. Minimum Size Subarray Sum
 */

import { PrintArray } from "../utils/Utilities";


const minSubarraySum = (k: number, nums: number[]): number => {
  let minLen = Infinity;
  let currSum = 0;
  let currLen = 0;
  let L = 0;
  let R = 0;
  
  while (R < nums.length) {
    currSum += nums[R];
    currLen++;
    
    while (currSum >= k) {
      minLen = Math.min(minLen, currLen);
      currSum -= nums[L];
      currLen--;
      L++;
    }
    R++;
  }

  return minLen === Infinity ? 0 : minLen;
}

export default () => {
  console.log(minSubarraySum(7, [2,3,1,2,4,3]));
  console.log(minSubarraySum(8, [2,3,1,2,4,3]));
  console.log(minSubarraySum(109, [2,3,1,2,4,3]));
};
