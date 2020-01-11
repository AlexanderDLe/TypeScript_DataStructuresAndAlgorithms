"use strict";
/**
 * 53. Maximum Subarray
 */
Object.defineProperty(exports, "__esModule", { value: true });
const maxSubArray = (nums) => {
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
exports.default = () => {
    const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
    console.log(maxSubArray(nums));
};
