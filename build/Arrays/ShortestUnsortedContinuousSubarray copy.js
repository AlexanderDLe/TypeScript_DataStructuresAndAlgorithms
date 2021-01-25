"use strict";
/**
 * 581. Shortest Unsorted Continuous Subarray
 */
Object.defineProperty(exports, "__esModule", { value: true });
const findUnsortedSubarray = (nums) => {
    let n = nums.length;
    let start = -1;
    let end = -2;
    let min = nums[n - 1];
    let max = nums[0];
    for (let i = 1; i < n; i++) {
        let j = n - i - 1;
        max = Math.max(max, nums[i]);
        if (nums[i] < max)
            end = i;
        min = Math.min(min, nums[j]);
        if (nums[j] > min)
            start = j;
    }
    return end - start + 1;
};
exports.default = () => {
    const nums = [2, 6, 4, 8, 10, 9, 15];
    console.log(findUnsortedSubarray(nums));
};
