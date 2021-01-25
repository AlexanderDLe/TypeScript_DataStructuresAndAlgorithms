"use strict";
/**
 * 26. Remve Duplicates From Sorted Array
 */
Object.defineProperty(exports, "__esModule", { value: true });
const removeDuplicates = (nums) => {
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length;
};
exports.default = () => {
    const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    console.log(removeDuplicates(nums));
};
