/**
 * Grokking the Coding Interview
 * 
*/

import { PrintArray } from "../utils/Utilities";

const countSumsNaive = (nums:number[], lower:number, upper:number): number => {
  let result = 0;
  let n = nums.length;
  let sums = new Array(n + 1).fill(0);
  
  for  (let i = 0; i < n; i++) {
    sums[i + 1] = sums[i] + nums[i];
  }
  console.log(nums);
  console.log(sums);
  for (let i = 0; i < n; ++i) {
    for (let j = i + 1; j <= n; j++) {
      let rangeSum = sums[j] - sums[i];
      let withinBounds = rangeSum >= lower && rangeSum <= upper;
      if (withinBounds) result++;
      console.log(`sums[${j}]: ${sums[j]} | sums[${i}]: ${sums[i]} | rangeSum: ${rangeSum} | withinBounds: ${withinBounds}`)
    }
  }

  return result;
}
    


export default () => {
  console.log(countSumsNaive([-2,5,-1], -2, 2));
};
