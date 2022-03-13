/**
 * Grokking the Coding Interview
 * 
 * 33. Search in Rotated Sorted Array
*/

import { PrintArray } from "../utils/Utilities";
    
const searchRotatedArrayA = (array:number[], target:number): number => {
    let L = 0;
    let R = array.length - 1;

    while (L <= R) {
        let M = Math.floor(L + (R - L)/2);
        let curr = array[M];
        
        if (curr === target) return M;

        let LVal = array[L];
        let RVal = array[R];

        if (curr < RVal) {
            if (target >= curr && target <= RVal) L = M + 1;
            else R = M - 1;
        } else {
            if (target <= curr && target >= LVal) R = M - 1;
            else L = M + 1;
        }
    }
    
    return -1;
}

const searchRotatedArray = (nums:number[], target:number): number => {
  let L = 0;
  let R = nums.length - 1;

  while (L <= R) {
    let M = Math.floor(L + (R - L)/2);
    let curr = nums[M];

    if (curr === target) return M;

    let rightSideSorted = curr < nums[R];
    if (rightSideSorted) {
      if (target > curr && target <= nums[R]) L = M + 1;
      else R = M - 1;
    } else {
      if (target < curr && target >= nums[L]) R = M - 1;
      else L = M + 1;
    }
  }

  return -1;
}

export default () => {
  let arr1 = [10, 15, 1, 3, 8], key1 = 15;
  let arr2 = [4, 5, 7, 9, 10, -1, 2], key2 = 10;
  let arr3 = [45, 61, 71, 72, 73, 0, 1, 21, 33, 37];
  let arr4 = [4,5,6,7,0,1,2];
  let arr5 = [4,5,6,7,0,1,2];

  console.log(searchRotatedArray(arr1, key1));
  console.log(searchRotatedArray(arr2, key2));
  console.log(searchRotatedArray(arr3, 1));
  console.log(searchRotatedArray(arr4, 0));
  console.log(searchRotatedArray(arr4, 3));
};
