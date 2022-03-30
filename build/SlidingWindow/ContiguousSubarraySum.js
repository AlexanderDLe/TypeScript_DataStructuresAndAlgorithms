"use strict";
/**
 * 523. Contiguous Subarray Sum
 *
 * 23  2  6  4  7
 *
 *
 * set
 */
Object.defineProperty(exports, "__esModule", { value: true });
const checkSubarraySums = (nums, k) => {
    const map = {};
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (k !== 0)
            sum %= sum;
        let prev = map[sum];
        if (prev !== null) {
            if (i - prev > 1)
                return true;
        }
        else
            map[sum] = i;
    }
    return false;
};
exports.default = () => {
    let K = 5;
    let arr = [1, 3, 2, 6, -1, 4, 1, 8, 2];
    console.log(checkSubarraySums(arr, K));
};
