'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
/**
 * 416. Partition Equal Subset Sum
 */
const Utilities_1 = require('../utils/Utilities');
const canPartition = nums => {
    if (nums.length < 2) return false;
    let sum = nums.reduce((acc, val) => acc + val);
    if (sum % 2 === 1) return false;
    const target = sum / 2;
    nums.sort((a, b) => a - b);
    let arr = [nums[0]];
    let i = 1;
    while (nums[i] <= target && i < nums.length) {
        if (nums[i] === target) return true;
        let arrLen = arr.length;
        for (let j = 0; j < arrLen; j++) {
            let n = arr[j] + nums[i];
            if (n === target) return true;
            if (!arr.includes(n)) arr.push(n);
        }
        i++;
    }
    return false;
};
const canPartitionKnapsack = nums => {
    let sum = nums.reduce((acc, val) => acc + val);
    if (nums.length < 2 || sum % 2 === 1) return false;
    const target = sum / 2;
    const DP = new Array(target + 1).fill(false);
    DP[0] = true;
    for (let num of nums) {
        for (let i = target; i >= num; i--) {
            if (DP[i - num] === true) DP[i] = true;
        }
    }
    Utilities_1.PrintArray(DP);
    return DP[target];
};
exports.default = () => {
    const nums = [3, 5, 6, 2];
    console.log(canPartitionKnapsack(nums));
};
