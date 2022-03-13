/**
 * 153. Find Minimum In Rotated Sorted Array
  
  [4,5,6,7,0,1,2]

  Binary search to find min.

  Min when the num immediately to left is greater or index is 0.
  
*/

import { PrintArray } from "../utils/Utilities";
    
const searchRotatedArray = (nums:number[]): number => {
  if (nums.length === 1) return nums[0];
  let L = 0;
  let R = nums.length - 1;
  let lastNum = nums[nums.length - 1];

  while (L <= R) {
    let M = Math.floor(L + (R - L)/2);
    console.log(M);
    
    let curr = nums[M];
    if (M === 0 && curr < lastNum) return curr;

    let prev = nums[M - 1];
    if (prev > curr) return curr;
    
    let rightIsSorted = curr < nums[R];
    if (rightIsSorted) R = M - 1;
    else L = M + 1;
  }
  return -1;
}

export default () => {
  let arr1 = [3,4,5,1,2];
  let arr2 = [4,5,6,7,0,1,2];
  let arr3 = [1];

  // console.log(searchRotatedArray(arr1));
  // console.log(searchRotatedArray(arr2));
  console.log(searchRotatedArray(arr3));
};
