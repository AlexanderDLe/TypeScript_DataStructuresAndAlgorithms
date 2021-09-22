"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 1. Two Sum 1
 */
const Utilities_1 = require("../utils/Utilities");
const twoSumOld2 = (nums, target) => {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in obj) {
            return [i, obj[nums[i]]];
        }
        obj[target - nums[i]] = i;
    }
};
let twoSumOld1 = (nums, target) => {
    let answer = [-1, -1];
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        let difference = target - nums[i];
        if (map[difference]) {
            answer[0] = map[difference] - 1;
            answer[1] = i;
            break;
        }
        else {
            map[nums[i]] = i + 1;
        }
    }
    Utilities_1.PrintObject(map);
    return answer;
};
const twoSum = (nums, target) => {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = i;
    }
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (map[diff]) {
            if (i === map[diff])
                continue;
            return [i, map[diff]];
        }
    }
    return [0];
};
exports.default = () => {
    let nums = [2, 7, 11, 15];
    let nums2 = [-1, -2, -3, -4, -5];
    let nums3 = [1, 3, 4, 2];
    Utilities_1.PrintArray(twoSumOld1(nums, 9));
};
