/**
 * 53. Maximum Subarray
 */

import { PrintArray } from '../utils/Utilities';

const maxSubArray = (nums: number[]): number => {
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

export default () => {
    const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
    console.log(maxSubArray(nums));
};
