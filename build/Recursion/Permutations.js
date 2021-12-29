"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 46. Permutations
 */
const Utilities_1 = require("../utils/Utilities");
const permuteA = (nums) => {
    let res = [];
    res.push(nums);
    const recurse = (index) => {
        for (let i = index; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
                res.push([...nums]);
                recurse(i + 1);
                [nums[i], nums[j]] = [nums[j], nums[i]];
            }
        }
    };
    recurse(0);
    return res;
};
const permuteB = (nums) => {
    let result = [];
    const recursion = (index) => {
        if (index === nums.length) {
            result.push(nums.slice(0));
        }
        for (let i = index; i < nums.length; i++) {
            [nums[index], nums[i]] = [nums[i], nums[index]];
            recursion(index + 1);
            [nums[index], nums[i]] = [nums[i], nums[index]];
        }
    };
    recursion(0);
    return result;
};
const permute = (nums) => {
    let result = [];
    const recurse = (index) => {
        if (index === nums.length) {
            result.push(nums.slice(0));
            return;
        }
        for (let i = index; i < nums.length; i++) {
            [nums[index], nums[i]] = [nums[i], nums[index]];
            recurse(index + 1);
            [nums[index], nums[i]] = [nums[i], nums[index]];
        }
    };
    recurse(0);
    return result;
};
exports.default = () => {
    let nums = [1, 2, 3, 4];
    (0, Utilities_1.PrintMatrix)(permute(nums));
};
