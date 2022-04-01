"use strict";
/**
 * Grokking the Coding Interview
*/
Object.defineProperty(exports, "__esModule", { value: true });
const Utilities_1 = require("../utils/Utilities");
const pairWithTargetSum = (arr, target_sum) => {
    let result = [];
    let L = 0;
    let R = arr.length - 1;
    while (L < R) {
        let currSum = arr[L] + arr[R];
        if (currSum === target_sum)
            return [L, R];
        if (currSum < target_sum)
            L++;
        else
            R--;
    }
    return result;
};
exports.default = () => {
    let arr1 = [1, 2, 3, 4, 6], target1 = 6;
    let arr2 = [2, 5, 9, 11], target2 = 11;
    (0, Utilities_1.PrintArray)(pairWithTargetSum(arr1, target1));
    (0, Utilities_1.PrintArray)(pairWithTargetSum(arr2, target2));
};
