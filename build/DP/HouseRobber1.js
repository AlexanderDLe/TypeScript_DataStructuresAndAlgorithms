"use strict";
/**
 * 198. House Robber
 *
 *
 *  0 | 2 | 1 | 1 | 2
 *  0 | 2 | 2 | 3 | 0
 *          p   c
 *
 *  p = 0
 *  c = 2
 */
Object.defineProperty(exports, "__esModule", { value: true });
/*  Iterative Analysis

    Time Complexity: O(n) - Iterate through nums.

    Space Complexity: O(1) - No data structures used.

    Strategy: The strategy is based upon the fact that you may want to skip either
    1 or 2. There's no reason to skip 3, because you may add the value between the first and 3rd skip, etc.

    Iterate through the array, and for each element, equate it to the maximum of either
    
    1. Itself + the value 2 places behind
    2. Itself + the value 3 places behind

    Return the maximum of the last or second last values
*/
const robA = (nums) => {
    if (nums.length === 0)
        return 0;
    if (nums.length === 1)
        return nums[0];
    if (nums.length === 2)
        return Math.max(nums[0], nums[1]);
    nums[2] += nums[0];
    for (let i = 3; i < nums.length; i++) {
        nums[i] = Math.max(nums[i] + nums[i - 2], nums[i] + nums[i - 3]);
    }
    return Math.max(nums[nums.length - 1], nums[nums.length - 2]);
};
const robB = (nums) => {
    if (nums.length === 1)
        return nums[0];
    if (nums.length === 2)
        return Math.max(nums[0], nums[1]);
    nums[2] += nums[0];
    for (let i = 3; i < nums.length; i++) {
        nums[i] = Math.max(nums[i] + nums[i - 2], nums[i] + nums[i - 3]);
    }
    return Math.max(nums[nums.length - 1], nums[nums.length - 2]);
};
const robArrayLookBehind = (nums) => {
    if (nums.length < 3)
        return Math.max(nums[0], nums[1] || -Infinity);
    const DP = [...nums];
    DP[2] = DP[2] + DP[0];
    for (let i = 3; i < nums.length; i++) {
        DP[i] = DP[i] + Math.max(DP[i - 2], DP[i - 3]);
    }
    return Math.max(DP[DP.length - 1], DP[DP.length - 2]);
};
const robArrayLookAround = (nums) => {
    if (nums.length < 3)
        return Math.max(nums[0], nums[1] || -Infinity);
    const DP = new Array(nums.length + 1).fill(0);
    DP[1] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        let num = nums[i];
        DP[i + 1] = Math.max(DP[i], DP[i - 1] + num);
    }
    return DP[nums.length];
};
const rob = (nums) => {
    if (nums.length < 3)
        return Math.max(nums[0], nums[1] || -Infinity);
    let curr = nums[0];
    let prev = 0;
    for (let i = 1; i < nums.length; i++) {
        let temp = curr;
        curr = Math.max(curr, nums[i] + prev);
        prev = temp;
    }
    return curr;
};
exports.default = () => {
    const nums = [2, 1, 1, 2];
    console.log(rob(nums));
};
