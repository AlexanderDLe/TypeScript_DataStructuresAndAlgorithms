"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 46. Permutations
 */
const Utilities_1 = require("../utils/Utilities");
const permute = (nums) => {
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
exports.default = () => {
    let nums = [1, 2, 3];
    Utilities_1.PrintMatrix(permute(nums));
};
