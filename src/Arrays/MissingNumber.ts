/**
 * 268. Missing Number
 * 
 * Cyclic Sort Method: Sort items in place - missing item will not be placed.
 * 
 * [3, 0, 1]
 * 
 * [UNI, 0, 1, 3]
 * 
 * [0, UNI, 1, 3]
 * 
 * [0, 1, UNI, 3]
 */

import { PrintArray } from '../utils/Utilities';

const missingNumberBitMap = (nums: number[]): number => {
    let result = 0;

    let n = nums.length;
    let bitmap = new Array(n).fill(0);

    for (let num of nums) {
        bitmap[num] = 1;
    }

    for (let i = 0; i <= n; i++) {
        if (bitmap[i] == 0) return i;
    }

    return result;
};

const missingNumberAddition = (nums: number[]): number => {
    let predictedSum = nums.length;
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        predictedSum += i;
    }

    return predictedSum - sum;
};

const missingNumberCyclicSort = (nums: number[]): number => {
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] !== undefined && nums[i] !== i) {
      let val = nums[i];
      [nums[i], nums[val]] = [nums[val], nums[i]];
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === undefined) return i;
  }

  return nums.length;
}

const missingNumber = (nums: number[]): number => {
  const bitmap = new Array(nums.length + 1).fill(0);
  
  for (let num of nums) {
    bitmap[num] = 1;
  }
  
  for (let i = 0; i <= nums.length; i++) {
    if (!bitmap[i]) return i;
  }
}

export default () => {
    const nums = [9,6,4,2,3,5,7,0,1];
    console.log(missingNumber(nums));
};
