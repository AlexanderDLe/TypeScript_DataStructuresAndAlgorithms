"use strict";
/**
 * 283. Move Zeroes
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Utilities_1 = require("../utils/Utilities");
const moveZeroesA = (nums) => {
    let searchLength = nums.length;
    for (let i = 0; i < searchLength; i++) {
        if (nums[i] === 0) {
            nums.push(0);
            nums.splice(i, 1);
            searchLength--;
            i--;
        }
    }
};
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
const moveZeroesBubbleRight = (nums) => {
    let len = nums.length;
    const bubbleRight = (curr) => {
        let swap = curr + 1;
        while (swap < len) {
            if (nums[swap] !== 0) {
                [nums[curr], nums[swap]] = [nums[swap], nums[curr]];
                curr = swap;
            }
            swap++;
        }
    };
    for (let i = 0; i < len; i++) {
        if (nums[i] === 0) {
            bubbleRight(i);
            len--;
        }
    }
};
const moveZeroes = (nums) => {
    let pos = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[pos] = nums[i];
            pos++;
        }
    }
    while (pos < nums.length) {
        nums[pos] = 0;
        pos++;
    }
};
exports.default = () => {
    const nums = [0, 1, 0, 3, 12];
    moveZeroes(nums);
    (0, Utilities_1.PrintArray)(nums);
};
