"use strict";
/**
 * 41. First Missing Positive
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
const firstMissingPositive = (nums) => {
    if (!nums.length)
        return 1;
    // Set all negatives to zero
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0)
            nums[i] = 0;
    }
    // Use flip method.
    // 1. All numbers > length can be ignored.
    // 2. All numbers < length should have their indexes be negative
    //    to indicate their existence in sorted order.
    // 3. All zeroes should be set to -Infinity to indicate existence despite being 0
    for (let i = 0; i < nums.length; i++) {
        let num = Math.abs(nums[i]);
        let target = nums[num - 1];
        if (num > nums.length)
            continue;
        if (target < 0)
            continue;
        if (target === 0)
            nums[num - 1] = -Infinity;
        else
            nums[num - 1] *= -1;
    }
    // The first index + 1 that is not negative is the first missing positive
    // If loop exits, then array doesn't have any gaps and the first missing is
    // number immediately after largest num.
    for (let i = 1; i <= nums.length; i++) {
        let target = nums[i - 1];
        if (target < 0)
            continue;
        else
            return i;
    }
    return nums.length + 1;
};
exports.default = () => {
    // console.log(firstMissingPositive([1,2,0]));
    // console.log(firstMissingPositive([3,4,-1,1]));
    // console.log(firstMissingPositive([7,8,9,11,12]));
    console.log(firstMissingPositive([0, 1, 2]));
};
