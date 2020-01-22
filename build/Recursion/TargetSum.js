'use strict';
/**
 * 494. Target Sum
 */
Object.defineProperty(exports, '__esModule', { value: true });
const findTargetSumWays = (nums, S) => {
    nums.sort();
    let start = 0;
    let total = 0;
    let zeros = 0;
    let multi = 1;
    for (let i = 0; i < nums.length; i++) {
        if (!nums[i]) zeros++;
        if (!nums[start]) start = i;
        total += nums[i];
    }
    multi = Math.pow(2, zeros);
    let result = 0;
    const recurse = (index, sum) => {
        if (sum === S) result++;
        if (sum < S || sum === S || index === nums.length) return;
        recurse(index + 1, sum);
        recurse(index + 1, sum - nums[index] * 2);
    };
    recurse(start, total);
    return result * multi;
};
exports.default = () => {
    const nums = [0, 1, 1, 1, 1, 1];
    const S = 3;
    console.log(findTargetSumWays(nums, S));
};
