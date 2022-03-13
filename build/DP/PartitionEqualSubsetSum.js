"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 416. Partition Equal Subset Sum
 *
 * Goal is to find if an array can be split into 2 equal subsets.
 *
 * To solve, we need to create a DP array stretching from 0 to SUM(nums) / 2
 * We want determine if DP[target] is reachable - to do so, we solve subproblems that
 * determines if DP[i] is reachable starting from DP[0] (base case).
 */
const Utilities_1 = require("../utils/Utilities");
const canPartitionA = (nums) => {
    if (nums.length < 2)
        return false;
    let sum = nums.reduce((acc, val) => acc + val);
    if (sum % 2 === 1)
        return false;
    const target = sum / 2;
    nums.sort((a, b) => a - b);
    let arr = [nums[0]];
    let i = 1;
    while (nums[i] <= target && i < nums.length) {
        if (nums[i] === target)
            return true;
        let arrLen = arr.length;
        for (let j = 0; j < arrLen; j++) {
            let n = arr[j] + nums[i];
            if (n === target)
                return true;
            if (!arr.includes(n))
                arr.push(n);
        }
        i++;
    }
    return false;
};
const canPartitionB = (nums) => {
    let sum = nums.reduce((acc, val) => acc + val);
    if (nums.length < 2 || sum % 2 === 1)
        return false;
    const target = sum / 2;
    const DP = new Array(target + 1).fill(false);
    DP[0] = true;
    for (let num of nums) {
        for (let i = target; i >= num; i--) {
            if (DP[i - num] === true)
                DP[i] = true;
        }
    }
    (0, Utilities_1.PrintArray)(DP);
    return DP[target];
};
const canPartition = (nums) => {
    const sum = nums.reduce((acc, curr) => acc + curr);
    if (sum % 2 === 1)
        return false;
    const DP = new Map();
    const target = sum / 2;
    const DFS = (index, sum) => {
        if (sum === target)
            return true;
        if (sum > target || index >= nums.length)
            return false;
        if (DP.has(`${index}-${sum}`))
            return DP.get(`${index}-${sum}`);
        let res = DFS(index + 1, sum + nums[index]) || DFS(index + 1, sum);
        DP.set(`${index}-${sum}`, res);
        return res;
    };
    return DFS(0, 0);
};
exports.default = () => {
    const nums = [1, 5, 11, 5];
    console.log(canPartition(nums));
};
