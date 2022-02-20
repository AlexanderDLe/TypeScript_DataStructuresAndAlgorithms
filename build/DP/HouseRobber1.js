"use strict";
/**
 * 198. House Robber
 *
 * [20,  7,  9, 10,  2]
 * [20, 20, 29, 30, 31]
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
const rob = (nums) => {
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
exports.default = () => {
    const nums = [2, 1, 1, 2];
    console.log(rob(nums));
};
