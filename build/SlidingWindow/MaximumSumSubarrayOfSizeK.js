"use strict";
/**
 * Grokking the Coding Interview
 * Given an array of positive numbers and a positive number ‘k,’
 * find the maximum sum of any contiguous subarray of size ‘k’.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const MaxSumArrayOfSizeK = (k, arr) => {
    if (k > arr.length)
        return 0;
    let L = 0;
    let currSum = 0;
    let maxSum = 0;
    for (let R = 0; R < arr.length; R++) {
        currSum += arr[R];
        if (R >= k - 1) {
            maxSum = Math.max(maxSum, currSum);
            currSum -= arr[L];
            L++;
        }
    }
    return maxSum;
};
exports.default = () => {
    let k = 2;
    let arr = [2, 3, 4, 1, 5];
    let result = MaxSumArrayOfSizeK(k, arr);
    console.log(result);
};
