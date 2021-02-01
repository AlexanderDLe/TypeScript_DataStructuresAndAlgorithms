"use strict";
/**
 * 213. House Robber 2
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
const rob = (nums) => {
    if (nums.length === 0)
        return 0;
    if (nums.length === 1)
        return nums[0];
    if (nums.length === 2)
        return Math.max(nums[0], nums[1]);
    let numz = [...nums];
    nums.pop();
    numz.shift();
    let len = nums.length;
    for (let i = 2; i < len; i++) {
        nums[i] = Math.max(nums[i] + nums[i - 2], nums[i] + (nums[i - 3] | 0));
    }
    for (let i = 2; i < numz.length; i++) {
        numz[i] = Math.max(numz[i] + numz[i - 2], numz[i] + (numz[i - 3] | 0));
    }
    let maxA = Math.max(nums[len - 1], nums[len - 2]);
    let maxB = Math.max(numz[len - 1], numz[len - 2]);
    return Math.max(maxA, maxB);
};
exports.default = () => {
    const nums = [2, 7, 9, 3, 1];
    console.log(rob(nums));
};
