"use strict";
/**
 * 370. Range Addition
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Utilities_1 = require("../utils/Utilities");
const getArraySlower = (length, nums) => {
    const result = new Array(length).fill(0);
    for (let [start, end, value] of nums) {
        for (let i = start; i <= end; i++) {
            result[i] += value;
        }
    }
    return result;
};
const getArray = (length, nums) => {
    let result = new Array(length).fill(0);
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        let [start, end, value] = nums[i];
        result[start] += value;
        if (end + 1 <= length - 1)
            result[end + 1] -= value;
    }
    (0, Utilities_1.PrintArray)(result);
    for (let i = 0; i < length; i++) {
        sum += result[i];
        result[i] = sum;
    }
    return result;
};
exports.default = () => {
    (0, Utilities_1.PrintArray)(getArray(5, [[1, 3, 2], [2, 4, 3], [0, 2, -2]]));
    (0, Utilities_1.PrintArray)(getArray(10, [[2, 4, 6], [5, 6, 8], [1, 9, -4]]));
};
