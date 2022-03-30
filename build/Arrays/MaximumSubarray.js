"use strict";
/**
 * 53. Maximum Subarray
 *
 * Sliding Window approach
 *
 * [-2  1  -3  4  -1  2  1  -5  4]
 *  LR
 *
 * sum = -2
 * max = -2
 *
 * sum is negative, so we will iterate L as well
 *
 *************************************
 *
 * [-2  1  -3  4  -1  2  1  -5  4]
 *     LR
 *
 * sum = 1
 * max = 1
 *
 *************************************
 *
 * [-2  1  -3  4  -1  2  1  -5  4]
 *      L   R
 *
 * sum = -2
 * max = 1
 *
 * sum is negative, so iterate L as well
 *
 *************************************
 *
 * [-2  1  -3  4  -1  2  1  -5  4]
 *            LR
 *
 * sum = 4
 * max = 4
 *
 *************************************
 *
 * [-2  1  -3  4  -1  2  1  -5  4]
 *            L    R
 *
 * sum = 3
 * max = 4
 *
 *************************************
 *
 * [-2  1  -3  4  -1  2  1  -5  4]
 *            L       R
 *
 * sum = 5
 * max = 5
 *
 *************************************
 *
 * [-2  1  -3  4  -1  2  1  -5  4]
 *            L          R
 *
 * sum = 6
 * max = 6
 *
 *************************************
 *
 *
 * [-2  1  -3  4  -1  2  1  -5  4]
 *            L              R
 *
 * sum = 1
 * max = 6
 *
 *************************************
 *
 *
 * [-2  1  -3  4  -1  2  1  -5  4]
 *            L                 R
 *
 * sum = 5
 * max = 6
 *
 *************************************
 *
 * End
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
const maxSubarrayD = (nums) => {
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
const maxSubarray = (nums) => {
    let sum = 0;
    let max = -Infinity;
    let R = 0;
    let L = 0;
    while (R < nums.length) {
        sum += nums[R];
        max = Math.max(max, sum);
        R++;
        while (sum < 0 && L < R) {
            sum -= nums[L];
            L++;
        }
    }
    return max;
};
exports.default = () => {
    const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
    console.log(maxSubarray(nums));
};
