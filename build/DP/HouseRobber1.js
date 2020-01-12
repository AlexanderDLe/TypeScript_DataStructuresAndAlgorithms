"use strict";
/**
 * 198. House Robber
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Utilities_1 = require("../utils/Utilities");
const rob = (nums) => {
    if (!nums.length)
        return 0;
    if (nums.length === 1)
        return nums[0];
    if (nums.length === 2)
        return Math.max(nums[0], nums[1]);
    for (let i = 2; i < nums.length; i++) {
        nums[i] = Math.max(nums[i] + nums[i - 2], nums[i] + (nums[i - 3] || 0));
    }
    Utilities_1.PrintArray(nums);
    return Math.max(nums[nums.length - 1], nums[nums.length - 2]);
};
exports.default = () => {
    const nums = [2, 7, 9, 3, 1];
    console.log(rob(nums));
};
