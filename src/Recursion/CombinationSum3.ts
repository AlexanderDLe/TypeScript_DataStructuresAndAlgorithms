/**
 * . Combination Sum 3
 * 
 * 
 */

import { PrintMatrix } from '../utils/Utilities';

const combinationSum3 = (k:number, n:number): number[][] => {
  let result: number[][] = []

  const recurse = (num:number, sum: number, subarr:number[]) => {
    if (sum === n && subarr.length === k) result.push([...subarr])
    if (sum >= n || num >= n || subarr.length >= k) return;

    for (let i = num + 1; i < n; i++) {
      if (i > 9) break;
      subarr.push(i);
      recurse(i, sum + i, subarr);
      subarr.pop();
    }
  }

  recurse(0, 0, []);
  return result;
}

export default () => {
    PrintMatrix(combinationSum3(2, 17));
};
