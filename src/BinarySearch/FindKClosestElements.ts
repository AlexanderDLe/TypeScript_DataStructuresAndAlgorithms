/**
 * 658. Find K Closest Elements
 * 
 * [1,2,3,4,5] x = -1
 * 
 *  1 | 2 | 3 | 4 | 5
 *  L       M       R
 * 
 *  1 | 2 | 3 | 4 | 5
 *  L       R       
 * 
 *  1 | 2 | 3 | 4 | 5
 *  LR              
 * 
*/
import { MaxPriorityQueue } from "@datastructures-js/priority-queue";
import { PrintArray } from "../utils/Utilities";

const findKClosestElements = (nums:number[], k:number, x:number): number[] => {
  if (!k) return [];
  let result: number[] = [];
  let L = 0;
  let R = nums.length - 1;
  let M;

  while (L < R) {
    M = Math.floor(L + (R - L)/2);
    let curr = nums[M];
    
    if (x > curr) L = M + 1;
    else R = M;
    
  }
  
  // nums[L - 1] could be a closer value than [L] so L = L - 1 will address that.
  R = L;
  L = L - 1;
  console.log(nums[R], nums[L])

  while (k) {
    let leftVal = nums[L] !== undefined ? nums[L] : Infinity;
    let rightVal = nums[R] !== undefined ? nums[R] : Infinity;

    let leftDiff = Math.abs(x - leftVal);
    let rightDiff = Math.abs(x - rightVal);
    
    if (leftDiff < rightDiff || leftDiff === rightDiff) {
      result.push(nums[L]);
      L--;
    } else {
      result.push(nums[R]);
      R++;
    }

    k--;
  }

  return result.sort((a, b) => a - b);
};

export default () => {
  let nums = [1,2,3,4,5], k = 4, x = 3;
  let nums2 = [0,1,1,1,2,3,6,7,8,9];
  // PrintArray(findKClosestElements(nums, k, x));
  // PrintArray(findKClosestElements(nums, 4, -1));
  // PrintArray(findKClosestElements(nums, 3, 6));
  PrintArray(findKClosestElements(nums2, 9, 4));
};
