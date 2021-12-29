"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 448. Find All Numbers Disappeared In An Array
 */
const Utilities_1 = require("../utils/Utilities");
const findDisappearedNumbersA = (nums) => {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        let numToFlip = Math.abs(nums[i]);
        nums[numToFlip - 1] = -Math.abs(nums[numToFlip - 1]);
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0)
            result.push(i + 1);
    }
    return result;
};
const findDisappearedNumbers = (nums) => {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        let val = Math.abs(nums[i]);
        nums[val - 1] = -Math.abs(nums[val - 1]);
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0)
            result.push(i + 1);
    }
    return result;
};
const findDisappearedNumbersSwapping = (nums) => {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === i + 1)
            continue;
        else {
            let temp = nums[i];
            nums[i] = 0;
            while (temp) {
                console.log(temp);
                if (nums[temp - 1] === temp)
                    temp = 0;
                else {
                    let swap = nums[temp - 1];
                    nums[temp - 1] = temp;
                    temp = swap;
                }
            }
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0)
            result.push(i + 1);
    }
    return result;
};
/**
 * Strategy: Iterate through the array, for numbers that have occured,
 * then flip their corresponding entry in the array as negative.
 *
 * By the end of the loop, indexes of the positive values are numbers are missing.
 */
const findDisappearedNumbersFlipping = (nums) => {
    let result = [];
    const abs = Math.abs;
    for (let i = 0; i < nums.length; i++) {
        let num = abs(nums[i]);
        nums[num - 1] = -abs(nums[num - 1]);
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0)
            result.push(i + 1);
    }
    return result;
};
exports.default = () => {
    const nums = [4, 3, 2, 7, 8, 2, 3, 1];
    (0, Utilities_1.PrintArray)(findDisappearedNumbers(nums));
};
