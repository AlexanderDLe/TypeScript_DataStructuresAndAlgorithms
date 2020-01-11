/**
 * 53. Maximum Subarray
 */

import { PrintArray } from '../utils/Utilities';

const maxSubArray = (nums: number[]): number => {
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
