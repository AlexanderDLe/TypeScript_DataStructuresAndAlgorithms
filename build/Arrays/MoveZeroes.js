"use strict";
/**
 * 283. Move Zeroes
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Utilities_1 = require("../utils/Utilities");
const moveZeroesSwapping = (nums) => {
    if (nums.length < 2)
        return;
    let L = 0, R = 1;
    while (R < nums.length) {
        if (nums[L]) {
            L++;
            R = L + 1;
        }
        else if (!nums[L] && !nums[R]) {
            R++;
        }
        else if (!nums[L] && nums[R]) {
            [nums[L], nums[R]] = [nums[R], nums[L]];
            L++;
            R = L + 1;
        }
    }
};
const moveZeroesSplicing = (nums) => {
    if (!nums.length)
        return;
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
            i--;
            len--;
        }
    }
};
exports.default = () => {
    const nums = [0, 1, 0, 3, 12];
    moveZeroesSplicing(nums);
    Utilities_1.PrintArray(nums);
};
