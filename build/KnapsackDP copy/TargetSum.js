"use strict";
/**
 * Grokking the Coding Interview
*/
Object.defineProperty(exports, "__esModule", { value: true });
let Heap = require('collections/heap');
const targetSum = (nums, target) => {
    const DP = {};
    const recurse = (index, currSum) => {
        DP[index] = DP[index] || {};
        if (index === nums.length) {
            if (currSum === target)
                return 1;
            return 0;
        }
        let addSum = currSum + nums[index];
        let subSum = currSum - nums[index];
        let addRecursed = recurse(index + 1, addSum);
        let subRecursed = recurse(index + 1, subSum);
        let currStr = currSum.toString();
        DP[index][currStr] = addRecursed + subRecursed;
        return DP[index][currStr];
    };
    let result = recurse(0, 0);
    return result;
};
exports.default = () => {
    console.log(targetSum([1, 1, 2, 3], 1));
    console.log(targetSum([1, 2, 7, 1], 9));
};
