/**
 * 53. Maximum Subarray
 * 
 * Hold a max and sum value. If the current sum is negative, then reset the current num.
 */

import { PrintArray } from '../utils/Utilities';

const maxSubArrayB = (nums: number[]): number => {
    let sum = nums[0];
    let max = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (sum < 0) sum = nums[i];
        else sum += nums[i];
        max = Math.max(max, sum);
    }

    return max;
}

const maxSubArrayOld = (nums: number[]): number => {
    let sum = nums[0];
    let prev: number;

    for (let i = 0; i < nums.length; i++) {
        if (prev > 0) prev += nums[i];
        else prev = nums[i];

        sum = Math.max(sum, prev);
    }

    return sum;
};

const maxSubArray = (nums: number[]): number => {
    let max = nums[0];
    let sum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (sum < 0) sum = nums[i];
        else sum += nums[i];
        max = Math.max(max, sum);
    }

    return max;
}


export default () => {
    const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
    console.log(maxSubArray(nums));
};
