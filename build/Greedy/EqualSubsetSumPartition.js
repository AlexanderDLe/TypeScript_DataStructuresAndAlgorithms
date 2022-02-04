"use strict";
/**
 * Grokking the Coding Interview
*/
Object.defineProperty(exports, "__esModule", { value: true });
const Utilities_1 = require("../utils/Utilities");
let Heap = require('collections/heap');
const equalSubsetSumPartitionTopDown1 = (nums) => {
    let totalSum = nums.reduce((acc, curr) => acc + curr);
    let DP = {};
    const recurse = (index, currSum, outsideSum) => {
        DP[index] = DP[index] || [];
        if (DP[index][currSum])
            return DP[index][currSum];
        if (currSum === outsideSum)
            return true;
        if (index === nums.length)
            return false;
        let val = nums[index];
        let withoutAdd = recurse(index + 1, currSum, outsideSum);
        let withAdd = recurse(index + 1, currSum + val, outsideSum - val);
        DP[index][currSum + val] = withAdd || withoutAdd;
        return DP[index][currSum + val];
    };
    let result = recurse(0, 0, totalSum);
    return result;
};
const equalSubsetSumPartition = (nums) => {
    let totalSum = nums.reduce((acc, curr) => acc + curr);
    if (totalSum % 2 > 0)
        return false;
    let target = totalSum;
    let DP = {};
    const recurse = (index, currSum) => {
        DP[index] = DP[index] || [];
        if (DP[index][currSum])
            return DP[index][currSum];
        if (currSum === target)
            return true;
        if (index === nums.length)
            return false;
        let newSum = currSum + nums[index];
        let withoutTake = recurse(index + 1, currSum);
        let withTake = recurse(index + 1, newSum);
        DP[index][newSum] = withTake || withoutTake;
        return DP[index][newSum];
    };
    let result = recurse(0, 0);
    (0, Utilities_1.PrintObject)(DP);
    return result;
};
const equalSubsetSumPartitionBotUp = (nums) => {
    const len = nums.length;
    const sum = nums.reduce((acc, curr) => acc + curr);
    const halfSum = sum / 2;
    // If sum is half a number, then there can be no equal partitions
    if (sum % 2 > 0)
        return false;
    // Initialize the DP matrix
    const DP = new Array(len)
        .fill(0)
        .map(() => new Array(halfSum + 1).fill(0));
    // Populate the 0 column with true, as empty set sum is always 0
    for (let i = 0; i < len; i++)
        DP[i][0] = 1;
    // With only 1 number, we can only form a subset only when the required
    // sum is equal to its value
    for (let s = 1; s <= halfSum; s++) {
        DP[0][s] = nums[0] === s ? 1 : 0;
    }
    // Process all subsets for all sums
    for (let i = 1; i < len; i++) {
        let currVal = nums[i];
        for (let currSum = 1; currSum <= halfSum; currSum++) {
            // If we can get sum 's' without the number at index 'i'
            if (DP[i - 1][currSum]) {
                DP[i][currSum] = DP[i - 1][currSum];
            }
            else if (currSum >= currVal) {
                DP[i][currSum] = DP[i - 1][currSum - currVal];
            }
        }
    }
    (0, Utilities_1.PrintMatrix)(DP); //
    return !!DP[len - 1][halfSum];
};
exports.default = () => {
    console.log(equalSubsetSumPartition([1, 2, 3, 4]));
    // console.log(equalSubsetSumPartition([1, 1, 3, 4, 7]))
    // console.log(equalSubsetSumPartition([2, 3, 4, 6]))
};
