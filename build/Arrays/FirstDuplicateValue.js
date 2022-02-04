"use strict";
/**
 *
 *  [-2, -1, 5, 2, -3, 3, 4]
 *              ^
 * curr = 2;
 * indexToFlip = nums[2 - 1] = nums[1]
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
const firstDuplicateValueSet = (nums) => {
    let set = new Set();
    for (let i = 0; i < nums.length; i++) {
        let val = nums[i];
        if (set.has(val))
            return val;
        set.add(val);
    }
    return -1;
};
const firstDuplicateValueFlip = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        let curr = Math.abs(nums[i]);
        if (nums[curr - 1] < 0)
            return curr;
        nums[curr - 1] = -nums[curr - 1];
    }
    return -1;
};
exports.default = () => {
    const nums = [2, 1, 5, 2, 3, 3, 4];
    console.log(firstDuplicateValueFlip(nums));
};
