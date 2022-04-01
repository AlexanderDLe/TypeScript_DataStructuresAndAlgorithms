/**
 * 523. Contiguous Subarray Sum
 * 
 * 23  2  4  7       k = 6
 *  ^
 * 
 * mod set
 * prefix = 0;
 * sum = 0;
 * 
 * sum = 23
 * 23 % 6 = 5
 * 
 * 
 * mod Set = { 0 } 
 * 
 * set saves the previous prefix.
 * sets prefix to sum for next iteration
 * 
 ************************************** 
 * 
 * 23  2  4  7       k = 6
 *     ^
 * 
 * mod set
 * prefix = 5;
 * sum = 5 + 2 = 7;
 * 
 * 7 % 6 = 1
 * 
 * mod Set = { 0, 5 }
 * prefix = 1
 * 
 * set saves the previous prefix.
 * sets prefix to sum for next iteration
 * 
 ************************************** 
 *  
 * 23  2  4  7       k = 6
 *        ^
 * 
 * mod set
 * prefix = 1;
 * sum = 1 + 4 = 5;
 * 
 * 5 % 6 = 5
 * 
 * mod Set = { 0, 5 } <---- mod Set already contains 5.
 * 
 * Since mod set already contains 5, that means that the sum
 * has reached a certain mod value twice, (5 and 5), the means
 * that it was able to fully cycle through a mod.
 * 
 * ex. 0 -> 5%6 -> 6%6 -> 0
 * A full cycle reflects the fact that it is a multiple
 * 
 ************************************** 
 * 
 */

import { PrintArray } from "../utils/Utilities";

const checkSubarraySumsRef = (nums: number[], k:number): boolean => {
  let sum = 0;
  let prefix = 0;
  const hash = new Set();

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    console.log('----');
    console.log('sum', sum);
    if (k !== 0) sum %= k;
    console.log('sum%k', sum);

    if (hash.has(sum)) return true;
    hash.add(prefix);
    prefix = sum;
    console.log(hash);
  }
  return false;
}

/*
    k = 6
    23   2   4   6   7
S:0  5   1   5 <--- 5 exists in the set, which means there was a complete mod cycle.
P:0  0   5
Set: [0, 5]
*/
const checkSubarraySums = (nums: number[], k:number): boolean => {
  const set = new Set();
  let sum = 0;
  let pre = 0;
  
  for (let num of nums) {
    sum += num;
    if (k) sum %= k;

    if (set.has(sum)) return true;
    set.add(pre);
    pre = sum;
  }

  return false;
}

export default () => {
  console.log(checkSubarraySums([23,2,4,6,7], 6));
  // console.log(checkSubarraySums([23,2,6,4,7], 13));
};
