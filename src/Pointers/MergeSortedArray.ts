/**
 * 88. Merge Sorted Array
 * 
 * [1,2,3,0,0,0], 3, [2,5,6], 3
 * 
 *        v
 * [1,2,2,0,0,0]
 * 
 *  v
 * [3,5,6]
 * 
 *v     v      
 * [0,0,3,3,5,6]  <---  3 pointer system. Start from the very end of arr1
 *                      Compare the end values of arr1 and arr2.
 * 
 *    v  
 * [1,2,0]
*/

import { PrintArray } from "../utils/Utilities";

const merge = (nums1: number[], m: number, nums2: number[], n: number): void => {
  const swap = (end:number, index:number, arr:number[]) => {
    [nums1[end], arr[index]] = [arr[index], nums1[end]];
  }

  let p = m - 1;
  let q = n - 1;
  let end = nums1.length - 1;

  while (end >= 0) {
    if (p >= 0 && q >= 0) {
      let pVal = nums1[p];
      let qVal = nums2[q];

      if (pVal > qVal) {
        swap(end, p, nums1);
        p--;
      } else {
        swap(end, q, nums2);
        q--;
      }
    } else if (p < 0) {
      swap(end, q, nums2);
      q--;
    } else if (q < 0) {
      swap(end, p, nums1);
      p--;
    }

    end--;
  }
}

export default () => {
  const arr1 = [1,2,3,0,0,0];
  merge(arr1, 3, [2,5,6], 3);
  PrintArray(arr1);

  const arr2 = [2, 5, 6,0,0,0];
  merge(arr2, 3, [1, 2, 3], 3);
  PrintArray(arr2);

  const arr3 = [1];
  merge(arr3, 1, [], 0);
  PrintArray(arr3);
};
