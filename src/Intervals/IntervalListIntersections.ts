/**
 * Grokking the Coding Interview
 * 
 * 
 * 1. ========
 *      ====
 * 
 * 2. ======
 *       =======
 * 
 * 3.    ======
 *    =======
 * 
 * 4. ========
 *      ====
 * 
*/

import { PrintArray } from "../utils/Utilities";
const intervalListIntersections = (firstList: number[][], secondList:number[][]): number[][] => {
  const result: number[][] = [];

  let p = 0;
  let q = 0;

  const processOverlap = (interA: number[], interB: number[]): void => {
    let [startA, endA] = interA;
    let [startB, endB] = interB;

    if (startA > endB || startB > endA) return;
    
    let startOverlap = Math.max(startA, startB);
    let endOverlap = Math.min(endA, endB);
    result.push([startOverlap, endOverlap]);
  }
  
  while (p < firstList.length && q < secondList.length) {
    let interA = firstList[p];
    let interB = secondList[q];

    processOverlap(interA, interB);

    if (interA[1] < interB[1]) p++;
    else q++;
  }

  return result;
}

export default () => {
  let Intervals1 = [[0,2],[5,10],[13,23],[24,25]];
  let Intervals2 = [[1,5],[8,12],[15,24],[25,26]];
  console.log(intervalListIntersections(Intervals1, Intervals2));
};