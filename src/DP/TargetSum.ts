/**
 * 494. Target Sum
 * 
 * [1,1,1,1,1]
 * 
 *                 []                         V
 *                1  -1                      [1,1,1,1,1]
 *                                              V
 *            2   0   0   -2                 [1,1,1,1,1]
 *                                                V
 *     3   1   1 -1   1 -1  1  -1            [1,1,1,1,1]
 * 
*/

import { PrintObject } from "../utils/Utilities";


const targetSumA = (nums:number[], target:number): number => {
    const DP: any = {};

    const recurse = (index:number, currSum:number): number => {
        DP[index] = DP[index] || {};

        if (index === nums.length) {
            if (currSum === target) return 1;
            return 0;
        }

        let addSum = currSum + nums[index];
        let subSum = currSum - nums[index];

        let addRecursed = recurse(index + 1, addSum);
        let subRecursed = recurse(index + 1, subSum);

        let currStr = currSum.toString();

        DP[index][currStr] = addRecursed + subRecursed;
        return DP[index][currStr];
    }

    let result = recurse(0,0);
    return result;
}

const targetSumB = (nums:number[], target:number): number => {
  const DP: any = {};

  const backtrack = (index:number, sum:number):number => {
    DP[index] = DP[index] || {};

    if (DP[index][sum]) return DP[index][sum];
    if (index >= nums.length) {
      if (sum === target) return 1;
      return 0;
    }

    let add = backtrack(index + 1, sum + nums[index]);
    let sub = backtrack(index + 1, sum - nums[index]);

    DP[index][sum] = add + sub;
    return DP[index][sum];
  }

  backtrack(0, 0);
  return backtrack(0, 0);
}

const targetSum = (nums:number[], target:number): number => {
  const DP: any = {};
  const recurse = (index:number, sum:number):number => {
    DP[index] = DP[index] || {};
    if (index >= nums.length) {
      if (sum === target) return 1;
      return 0;
    }
    if (DP[index] && DP[index][sum]) return DP[index][sum];
    console.log(sum);
    DP[index][sum] = recurse(index + 1, sum + nums[index])
                   + recurse(index + 1, sum - nums[index]);

    return DP[index][sum];
  }
  let res = recurse(0,0);
  console.log(DP);
  return res;
}

export default () => {
    console.log(targetSum([1, 1, 2, 3], 1))
    console.log(targetSum([1, 2, 7, 1], 9))
};
