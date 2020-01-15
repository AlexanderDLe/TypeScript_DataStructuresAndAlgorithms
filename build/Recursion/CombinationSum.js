"use strict";
/**
 * 39. Combination Sum
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Utilities_1 = require("../utils/Utilities");
const combinationSum = (nums, target) => {
    let result = [];
    const recurse = (i, res, sum) => {
        if (i === nums.length || sum < 0)
            return;
        if (sum === 0)
            return result.push(res.slice(0));
        recurse(i + 1, res.concat(), sum);
        if (nums[i] <= sum)
            recurse(i, res.concat(nums[i]), sum - nums[i]);
    };
    recurse(0, [], target);
    return result;
};
exports.default = () => {
    const nums = [2, 3, 6, 7];
    const target = 7;
    Utilities_1.PrintMatrix(combinationSum(nums, target));
};
