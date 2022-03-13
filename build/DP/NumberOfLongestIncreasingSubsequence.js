"use strict";
/**
 *  673. Number of Longest Increasing Subsequence
 *
 *
 * nums:        [1, 3, 5, 4, 7]
 * lengths:     [4, 3, 2, 2, 1]
 * counts:      [2, 2, 2, 1, 1]
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Utilities_1 = require("../utils/Utilities");
const findNumberOfLISRef = (nums) => {
    if (nums.length === 1)
        return 1;
    const DP = {};
    let lenLIS = 0;
    let res = 0;
    for (let i = nums.length - 1; i >= 0; i--) {
        let maxLen = 1;
        let maxCount = 1;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] > nums[i]) {
                let [length, count] = DP[j];
                if (length + 1 > maxLen) {
                    maxLen = length + 1;
                    maxCount = count;
                }
                else if (length + 1 === maxLen) {
                    maxCount++;
                }
            }
        }
        if (maxLen > lenLIS) {
            lenLIS = maxLen;
            res = maxCount;
        }
        else if (lenLIS === maxLen) {
            res++;
        }
        DP[i] = [maxLen, maxCount];
    }
    (0, Utilities_1.PrintObject)(DP);
    return res;
};
const findNumberOfLIS = (nums) => {
    if (nums.length === 1)
        return 1;
    const DP = {};
    let lenLIS = 0;
    let res = 0;
    for (let i = nums.length - 1; i >= 0; i--) {
        let maxLen = 1;
        let maxCount = 1;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] < nums[j]) {
                let [length, count] = DP[j];
                if (maxLen < length + 1) {
                    maxLen = length + 1;
                    maxCount = count;
                }
                else if (maxLen === length + 1) {
                    maxCount++;
                }
            }
        }
        if (lenLIS < maxLen) {
            lenLIS = maxLen;
            res = maxCount;
        }
        else if (lenLIS === maxLen) {
            res++;
        }
        DP[i] = [maxLen, maxCount, nums[i]];
    }
    console.log(DP);
    return res;
};
exports.default = () => {
    let nums1 = [1, 3, 5, 4, 7];
    let nums2 = [2, 2, 2, 2, 2];
    console.log(findNumberOfLIS(nums1));
};
