"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 238. Product Of Array Except Self
 *
 *         [5, 1, 4, 2]
 *          1  5  5  20
 *          8  8  2  1
 */
const Utilities_1 = require("../utils/Utilities");
const productExceptSelfA = (nums) => {
    let result = new Array(nums.length).fill(1);
    let leftProduct = 1;
    let rightProduct = 1;
    for (let i = 1; i < nums.length; i++) {
        leftProduct *= nums[i - 1];
        result[i] = leftProduct;
    }
    for (let i = nums.length - 2; i >= 0; i--) {
        rightProduct *= nums[i + 1];
        result[i] *= rightProduct;
    }
    return result;
};
const productExceptSelfB = (nums) => {
    let result = new Array(nums.length).fill(1);
    let leftProduct = 1;
    let rightProduct = 1;
    for (let i = 1; i < nums.length; i++) {
        leftProduct *= nums[i - 1];
        result[i] *= leftProduct;
    }
    for (let i = nums.length - 2; i >= 0; i--) {
        rightProduct *= nums[i + 1];
        result[i] *= rightProduct;
    }
    return result;
};
const productExceptSelfC = (nums) => {
    let result = new Array(nums.length).fill(1);
    let leftProduct = 1;
    let rightProduct = 1;
    for (let i = 1; i < nums.length; i++) {
        leftProduct *= nums[i - 1];
        result[i] *= leftProduct;
    }
    for (let i = nums.length - 2; i >= 0; i--) {
        rightProduct *= nums[i + 1];
        result[i] *= rightProduct;
    }
    return result;
};
const productExceptSelfD = (nums) => {
    let fromLeft = new Array(nums.length).fill(1);
    let fromRight = new Array(nums.length).fill(1);
    for (let i = 1; i < nums.length; i++) {
        fromLeft[i] = fromLeft[i - 1] * nums[i - 1];
    }
    for (let i = nums.length - 2; i >= 0; i--) {
        fromRight[i] = fromRight[i + 1] * nums[i + 1];
    }
    for (let i = 0; i < nums.length; i++) {
        nums[i] = fromLeft[i] * fromRight[i];
    }
    return nums;
};
const productExceptSelf = (nums) => {
    const fromLeft = new Array(nums.length).fill(1);
    const fromRight = new Array(nums.length).fill(1);
    for (let i = 1; i < nums.length; i++) {
        fromLeft[i] = fromLeft[i - 1] * nums[i - 1];
    }
    for (let i = nums.length - 2; i >= 0; i--) {
        fromRight[i] = fromRight[i + 1] * nums[i + 1];
    }
    for (let i = 0; i < nums.length; i++) {
        nums[i] = fromLeft[i] * fromRight[i];
    }
    return nums;
};
exports.default = () => {
    const nums = [1, 2, 3, 4];
    (0, Utilities_1.PrintArray)(productExceptSelf(nums));
};
