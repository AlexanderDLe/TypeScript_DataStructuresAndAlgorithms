/**
 *  152. Maximum Product Subarray
 *
 *  
 *                        2   3  -2   4
 *                2           -2          4
 *               2 * 3      -2 * 4          4
 */

import { PrintArray, PrintMatrix } from '../utils/Utilities';

const maxProductRef = (nums: number[]): number => {
  let maximum = Math.max(...nums);
  let min = 1;
  let max = 1;

  console.log(`         min: ${min} | max: ${max} | maximum: ${maximum}`)
  for (let num of nums) {
    let temp = max;
    max = Math.max(num, max * num, min * num);
    min = Math.min(num, min * num, temp * num);
    maximum = Math.max(maximum, max);

    console.log(`----------------------------------------`)
    console.log(`num: ${num} | min: ${min} | max: ${max} | maximum: ${maximum}`)
  }

  return maximum;
}

const maxProduct = (nums: number[]): number => {
  let maximum = Math.max(...nums);
  let max = 1;
  let min = 1;

  for (let num of nums) {
    let temp = max;
    max = Math.max(num, num*max, num*min);
    min = Math.max(num, num*temp, num*min);
    maximum = Math.max(maximum, max);
  }

  return maximum;
}

export default () => {
  const nums1 = [2, 3, -2, 4];
  const nums2 = [-2,0,-1];

  console.log(maxProductRef(nums1));
  // console.log(maxProduct(nums2));
};
