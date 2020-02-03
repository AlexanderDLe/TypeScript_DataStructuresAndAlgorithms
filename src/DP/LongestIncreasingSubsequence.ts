/**
 * 300. Longest Increasing Subsequence
 */

import { PrintArray } from '../utils/Utilities';

const lengthOfLIS = (nums: number[]): number => {
    if (nums.length === 1) return 1;
    let max = 0;
    let len = nums.length;
    let arr = new Array(len).fill(1);

    for (let i = 1; i < len; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) arr[i] = Math.max(arr[i], arr[j] + 1);
            max = Math.max(max, arr[i]);
        }
    }
    return max;
};

export default () => {
    const nums = [2];
    console.log(lengthOfLIS(nums));
};
