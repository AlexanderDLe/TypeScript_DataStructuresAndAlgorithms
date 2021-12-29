"use strict";
/**
 * 78. Subsets
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Utilities_1 = require("../utils/Utilities");
const subsetsA = (nums) => {
    let result = [];
    const recurse = (i, subarr) => {
        if (i === nums.length)
            result.push(subarr);
        else {
            recurse(i + 1, [...subarr, nums[i]]);
            recurse(i + 1, [...subarr]);
        }
    };
    recurse(0, []);
    return result;
};
const subsets = (nums) => {
    const result = [];
    const recurse = (index, subarr) => {
        if (index === nums.length)
            result.push(subarr);
        else {
            recurse(index + 1, [...subarr]);
            recurse(index + 1, [...subarr, nums[index]]);
        }
    };
    recurse(0, []);
    return result;
};
exports.default = () => {
    const nums = [1, 2, 3];
    (0, Utilities_1.PrintMatrix)(subsets(nums));
};
