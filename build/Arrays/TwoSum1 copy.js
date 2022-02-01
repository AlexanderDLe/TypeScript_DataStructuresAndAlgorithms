"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 1. Two Sum 1
 */
const Utilities_1 = require("../utils/Utilities");
const twoSumMap = (nums, target) => {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in obj) {
            return [i, obj[nums[i]]];
        }
        obj[target - nums[i]] = i;
    }
};
const twoSumSet = (array, targetSum) => {
    let set = new Set();
    for (let num of array) {
        if (set.has(targetSum - num))
            return [num, targetSum - num];
        else
            set.add(num);
    }
    return [];
};
const twoSum2Pointers = (array, targetSum) => {
    array = array.sort((a, b) => a - b);
    let L = 0;
    let R = array.length - 1;
    while (L < R) {
        let sum = array[L] + array[R];
        if (sum === targetSum)
            return [array[L], array[R]];
        if (sum < targetSum)
            L++;
        else
            R--;
    }
    return [];
};
exports.default = () => {
    let nums = [2, 7, 11, 15];
    let nums2 = [-3, 5, -4, 8, 11, 1, -1, 6];
    // PrintArray(twoSumOld1(nums, 9));
    (0, Utilities_1.PrintArray)(twoSum2Pointers(nums2, 10));
};
