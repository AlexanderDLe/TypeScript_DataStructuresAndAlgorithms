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
 */

import { PrintMatrix } from '../utils/Utilities';

const combinationSum2 = (candidates: number[], target: number): number[][] => {
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

export default () => {
    // const candidates = [10,1,2,7,6,1,5];
    // const target = 8;
    const candidates = [1,1];
    const target = 1;
    PrintMatrix(combinationSum2(candidates, target));
};
