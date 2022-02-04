"use strict";
/**
 * Grokking the Coding Interview
*/
Object.defineProperty(exports, "__esModule", { value: true });
const Utilities_1 = require("../utils/Utilities");
let Heap = require('collections/heap');
const countOfSubsetSum = (nums, S) => {
    const DP = {};
    const recurse = (index, currSum) => {
        DP[index] = DP[index] || [];
        if (DP[index][currSum])
            return DP[index][currSum];
        if (currSum === S)
            return 1;
        if (index === nums.length)
            return 0;
        let newSum = currSum + nums[index];
        let withoutTake = recurse(index + 1, currSum);
        let withTake = recurse(index + 1, newSum);
        DP[index][currSum] = withTake + withoutTake;
        return DP[index][currSum];
    };
    let result = recurse(0, 0);
    (0, Utilities_1.PrintObject)(DP);
    return result;
};
exports.default = () => {
    console.log(countOfSubsetSum([1, 1, 2, 3], 4));
    console.log(countOfSubsetSum([1, 2, 7, 1, 5], 9));
};
