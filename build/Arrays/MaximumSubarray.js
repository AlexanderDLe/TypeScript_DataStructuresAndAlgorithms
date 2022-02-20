"use strict";
/**
 * 53. Maximum Subarray
 *
 * Hold a max and sum value. If the current sum is negative, then reset the current num.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const maxSubarrayB = (nums) => {
    let sum = nums[0];
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (sum < 0)
            sum = nums[i];
        else
            sum += nums[i];
        max = Math.max(max, sum);
    }
    return max;
};
const maxSubarrayOld = (nums) => {
    let sum = nums[0];
    let prev;
    for (let i = 0; i < nums.length; i++) {
        if (prev > 0)
            prev += nums[i];
        else
            prev = nums[i];
        sum = Math.max(sum, prev);
    }
    return sum;
};
const maxSubarrayC = (nums) => {
    let max = nums[0];
    let sum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (sum < 0)
            sum = nums[i];
        else
            sum += nums[i];
        max = Math.max(max, sum);
    }
    return max;
};
const maxSubarray = (nums) => {
    let maxSum = -Infinity;
    let sum = 0;
    let L = 0;
    let R = 0;
    while (R < nums.length) {
        sum += nums[R];
        maxSum = Math.max(maxSum, sum);
        R++;
        while (L < R && sum < 0) {
            sum -= nums[L];
            L++;
        }
    }
    return maxSum;
};
exports.default = () => {
    const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
    console.log(maxSubarray(nums));
};
