"use strict";
/**
 * 78. Subsets
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Utilities_1 = require("../utils/Utilities");
const subsets = (nums) => {
    let result = [];
    const recurse = (index, res) => {
        if (index === nums.length) {
            result.push(res.slice(0));
            return;
        }
        recurse(index + 1, res);
        recurse(index + 1, res.concat(nums[index]));
    };
    recurse(0, []);
    return result;
};
exports.default = () => {
    const nums = [1, 2, 3];
    Utilities_1.PrintMatrix(subsets(nums));
};
