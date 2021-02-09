"use strict";
/**
 * 75. Sort Colors
 */
Object.defineProperty(exports, "__esModule", { value: true });
/* Single Iteration Solution. O(n) time. O(1) space. */
const sortColors = (nums) => {
    if (nums.length < 2)
        return;
    let L = 0;
    let R = nums.length - 1;
    let i = 0;
    while (i <= R) {
        if (nums[i] === 0) {
            [nums[i], nums[L]] = [nums[L], nums[i]];
            L++, i++;
        }
        else if (nums[i] === 2) {
            [nums[i], nums[R]] = [nums[R], nums[i]];
            R--;
        }
        else
            i++;
    }
};
/* Double Iterative Solution. O(2n) time. O(1) space. */
const sortColorsA = (nums) => {
    let L = 0;
    let R = nums.length - 1;
    while (L < R) {
        if (nums[R] === 2) {
            R--;
            continue;
        }
        else {
            if (nums[L] === 2) {
                [nums[L], nums[R]] = [nums[R], nums[L]];
                R--;
            }
        }
        L++;
    }
    L = 0;
    R = nums.length - 1;
    while (L < R) {
        if (nums[L] === 0) {
            L++;
            continue;
        }
        else {
            if (nums[R] === 0) {
                [nums[L], nums[R]] = [nums[R], nums[L]];
                L++;
            }
        }
        R--;
        console.log(nums);
    }
};
/* Map Solution. O(n) time. O(n) space. */
const sortColorsB = (nums) => {
    if (!nums.length)
        return;
    let map = {};
    for (let num of nums)
        map[num] = (map[num] || 0) + 1;
    let i = 0;
    for (let num in map) {
        while (map[num]) {
            nums[i] = Number(num);
            map[num]--;
            i++;
        }
    }
};
exports.default = () => {
    const nums = [2, 1, 0, 1, 2, 0, 2, 1, 1, 0, 0, 2];
    sortColors(nums);
    console.log(nums);
};
