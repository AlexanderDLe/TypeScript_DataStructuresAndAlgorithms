"use strict";
/**
 * 300. Longest Increasing Subsequence
 *
 * DP Strategy - Bottom-Up Approach.
 * On each iteration i, starting from 1, to n
 * inner loop from 0 to i
 * set arr[i] to max or either itself or arr[j] + 1.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const lengthOfLIS = (nums) => {
    if (nums.length === 1)
        return 1;
    let max = 0;
    let len = nums.length;
    let arr = new Array(len).fill(1);
    for (let i = 1; i < len; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j])
                arr[i] = Math.max(arr[i], arr[j] + 1);
            max = Math.max(max, arr[i]);
        }
    }
    return max;
};
exports.default = () => {
    const nums = [2];
    console.log(lengthOfLIS(nums));
};
