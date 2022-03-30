/**
 * 39. Combination Sum
 */

import { PrintMatrix } from '../utils/Utilities';

/*  Recursion Analysis

    Time Complexity Rough: O(#candidates ^ target). The height of the tree
    would be the target and degree of each node would be # of candidates.

    Time Complexity Accurate: O(#candidates ^ target/min candidate value).
    The height of the tree would actually be determined by the target divided
    by the smallest value. If target = 10 and min value is 2, the recursive tree
    may call itself 5 times (10/2 = 5).

    Space Complexity: O(k). The space used is for storing the path itself,
    which could be k length at most. The path branches multiple times,
    but returning from recursive calls will keep the path to k length.

    Strategy: The strategy is to recurse through the elements of the array
    and make two decisions.

    A. include the current element in the subarray and recurse.
    B. do not include the current element in the subarray and recurse.

    A sum value is maintained to determine whether the target can be reached
    with a variety of combinations.
*/
const combinationSumA = (candidates: number[], target: number): number[][] => {
    let result: number[][] = [];

    const recurse = (i: number, subarr: number[], sum: number) => {
        if (i >= candidates.length || sum < 0) return;
        if (sum === 0) return result.push([...subarr]);

        recurse(i + 1, [...subarr], sum);
        if (candidates[i] <= sum)
            recurse(i, [...subarr, candidates[i]], sum - candidates[i]);
    }
    recurse(0, [], target);
    return result;
}

const combinationSumB = (candidates: number[], target: number): number[][] => {
    let result: number[][] = []

    const recurse = (index: number, sum: number, subarr: number[]): void => {
        if (sum === target) result.push([...subarr]);
        if (sum >= target || index >= candidates.length) return;
        
        recurse(index, sum + candidates[index], [...subarr, candidates[index]])
        recurse(index + 1, sum, subarr)
    }

    recurse(0, 0, []);
    return result;
}

const combinationSumC = (candidates: number[], target: number): number[][] => {
  let result: number[][] = []

  const recurse = (index:number, sum:number, subarr:number[]) => {
    if (sum === target) result.push([...subarr]);
    if (sum >= target || index >= candidates.length) return;

    // Skip current
    recurse(index + 1, sum, subarr);

    // Take current
    let val = candidates[index];
    subarr.push(val);
    recurse(index, sum + val, subarr);
    subarr.pop();
  }

  recurse(0, 0, []);
  return result;
}

const combinationSum = (candidates: number[], target: number): number[][] => {
  const result:number[][] = []

  const backtrack = (index: number, sum:number, subarr:number[]) => {
    if (sum === target) result.push([...subarr]);
    if (sum >= target || index >= candidates.length) return;

    backtrack(index + 1, sum, subarr);

    const val = candidates[index];
    subarr.push(val);
    backtrack(index, sum + val, subarr);
    subarr.pop();
  } 

  backtrack(0, 0, []);
  return result;
}

export default () => {
    const candidates = [2, 3, 6, 7];
    const target = 7;
    PrintMatrix(combinationSum(candidates, target));
};
