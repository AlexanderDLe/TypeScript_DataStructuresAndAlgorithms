"use strict";
/**
 * 1295. Find Numbers with Even Number of Digits
 *
 * [4, 3, 2, 7, 8, 2, 3, 1]
 * [7, 3, 2, 4, 8, 2, 3, 1]
 * [3, 3, 2, 4, 8, 2, 7, 1]
 * [3, 2,-3, 4, 8, 2, 7, 1]
 * [3, 2,-3, 4, 8, 2, 7, 1]
 * [3, 2,-3, 4, 8, 2, 7, 1]
 * [3, 2,-3, 4, 1, 2, 7, 8]
 * [1, 2,-3, 4, 3, 2, 7, 8]
 *
 * result = [3]
 */
Object.defineProperty(exports, "__esModule", { value: true });
const findAllDuplicates = (nums) => {
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        while (nums[i] !== i + 1) {
            let val = nums[i];
            if (val < 0 || nums[val - 1] < 0)
                break;
            if (val === nums[val - 1]) {
                result.push(val);
                nums[val - 1] *= -1;
                break;
            }
            [nums[i], nums[val - 1]] = [nums[val - 1], nums[i]];
        }
    }
    return result;
};
exports.default = () => {
    const nums = [4, 3, 2, 7, 8, 2, 3, 1];
    console.log(findAllDuplicates(nums));
};
