"use strict";
/**
 * 39. Combination Sum
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Utilities_1 = require("../utils/Utilities");
const combinationSum = (candidates, target) => {
    let result = [];
    const recurse = (i, subarr, sum) => {
        if (i >= candidates.length)
            return;
        recurse(i + 1, subarr, sum);
        sum += candidates[i];
        if (sum > target)
            return;
        if (sum === target) {
            result.push([...subarr, candidates[i]]);
            return;
        }
        if (sum < target) {
            recurse(i, [...subarr, candidates[i]], sum);
        }
    };
    recurse(0, [], 0);
    return result;
};
const combinationSumB = (candidates, target) => {
    let result = [];
    const recurse = (i, res, sum) => {
        if (i === candidates.length || sum < 0)
            return;
        if (sum === 0)
            return result.push(res.slice(0));
        recurse(i + 1, res.concat(), sum);
        if (candidates[i] <= sum)
            recurse(i, res.concat(candidates[i]), sum - candidates[i]);
    };
    recurse(0, [], target);
    return result;
};
exports.default = () => {
    const candidates = [2, 3, 6, 7];
    const target = 7;
    Utilities_1.PrintMatrix(combinationSum(candidates, target));
};
