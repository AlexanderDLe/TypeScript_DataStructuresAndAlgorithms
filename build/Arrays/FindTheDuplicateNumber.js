"use strict";
/**
 * 287. Find the Duplicate Number
 */
Object.defineProperty(exports, "__esModule", { value: true });
const findDuplicate = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        let num = nums[Math.abs(nums[i]) - 1];
        if (num < 0)
            return Math.abs(nums[i]);
        else
            nums[Math.abs(nums[i]) - 1] *= -1;
    }
    return 0;
};
exports.default = () => {
    const nums = [2, 1, 1];
    console.log(findDuplicate(nums));
};
