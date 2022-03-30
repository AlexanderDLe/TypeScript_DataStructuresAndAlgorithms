/**
 * 40. Combination Sum 2
 * 
 * [1, 1, 1, 2, 3] target = 2
 * 
 * [1]
 *                      []
 *   Take 1s only ->  1    [] <---- Skip ALL 1s
 *                 1 []    []  2
 *              
 *********************************************** 
 * recurse here and try all combinations of 1s
 *  v
 * [ 1 | 1 | 2 | 5 | 6 | 7 | 10 ]
 *           ^
 *          recurse here and skip 1 altogether
 */

import { PrintArray, PrintMatrix } from '../utils/Utilities';

const combinationSum2Ref = (candidates: number[], target: number): number[][] => {
  let result: number[][] = []
  candidates = candidates.sort((a, b) => a - b);

  const recurse = (index:number, sum:number, subarr:number[]) => {
    if (sum === target) result.push([...subarr]);
    if (sum >= target || index >= candidates.length) return;

    // Take num && dupes route (if applicable)
    let nextIndex = index + 1;
    let val = candidates[index];
    while (nextIndex < candidates.length && candidates[nextIndex] === val) {
      nextIndex++;
    }
    subarr.push(val);
    recurse(index + 1, sum + val, subarr);
    subarr.pop();

    // Skip duplicates (if applicable)
    recurse(nextIndex, sum, subarr);
  }
  
  recurse(0, 0, []);
  return result;
}

const combinationSum2 = (candidates: number[], target: number): number[][] => {
  const result:number[][] = []
  candidates.sort((a, b) => a - b);

  const backtrack = (index:number, sum:number, subarr:number[]) => {
    if (sum === target) result.push([...subarr]);
    if (sum >= target || index >= candidates.length) return;

    let currNum = candidates[index];

    // Recurse and take current number (regardless if next num is duplicate)
    subarr.push(currNum);
    backtrack(index + 1, sum + currNum, subarr);
    subarr.pop();

    // Recurse the next number, but since we don't want duplicates, we have to take
    // the next number after any duplicates
    let nextIndex = index + 1;
    while (nextIndex < candidates.length && candidates[nextIndex] === currNum) {
      nextIndex++;
    }
    backtrack(nextIndex, sum, subarr);
  }

  backtrack(0, 0, []);
  return result;
}

export default () => {
    const candidates = [1,1];
    const target = 1;
    PrintMatrix(combinationSum2(candidates, target));
    PrintMatrix(combinationSum2([10,1,2,7,6,1,5], 8));
};
