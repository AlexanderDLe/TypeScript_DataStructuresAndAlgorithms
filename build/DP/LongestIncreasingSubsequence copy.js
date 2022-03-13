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
const lengthOfLISRef = (nums) => {
    if (nums.length < 2)
        return nums.length;
    let max = 0;
    let DP = new Array(nums.length).fill(1);
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i])
                DP[i] = Math.max(DP[i], DP[j] + 1);
            max = Math.max(max, DP[i]);
        }
    }
    return max;
};
/*
  10 | 9 | 2 | 5 | 3 | 7 | 101 | 1 | 6 | 11 | 18
   1 | 1 | 1 | 2 | 2 | 3 |  4  | 1 | 3 |  4 | 5
  
*/
const lengthOfLIS = (nums) => {
    if (nums.length === 1)
        return 1;
    const DP = new Array(nums.length).fill(1);
    let max = -Infinity;
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i])
                DP[i] = Math.max(DP[i], DP[j] + 1);
            max = Math.max(max, DP[i]);
        }
    }
    return max;
};
exports.default = () => {
    const nums1 = [10, 9, 2, 5, 3, 7, 101, 18];
    const nums2 = [7, 7, 7, 7];
    console.log(lengthOfLIS(nums2));
};
