"use strict";
/**
 * Grokking the Coding Interview
*/
Object.defineProperty(exports, "__esModule", { value: true });
let Heap = require('collections/heap');
const equalSubsetSumPartitionTopDown1 = (nums) => {
    let totalSum = nums.reduce((acc, curr) => acc + curr);
    let DP = {};
    const recurse = (index, currSum, outsideSum) => {
        if (DP[currSum])
            return DP[currSum];
        if (currSum === outsideSum)
            return true;
        if (index === nums.length)
            return false;
        let val = nums[index];
        let withoutAdd = recurse(index + 1, currSum, outsideSum);
        let withAdd = recurse(index + 1, currSum + val, outsideSum - val);
        DP[currSum + val] = withAdd || withoutAdd;
        return DP[currSum + val];
    };
    let result = recurse(0, 0, totalSum);
    return result;
};
const equalSubsetSumPartition = (nums) => {
    return true;
};
exports.default = () => {
    console.log(equalSubsetSumPartition([1, 2, 3, 4]));
    console.log(equalSubsetSumPartition([1, 1, 3, 4, 7]));
    console.log(equalSubsetSumPartition([2, 3, 4, 6]));
};
