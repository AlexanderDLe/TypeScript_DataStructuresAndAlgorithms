"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 1. Two Sum 1
 */
const Utilities_1 = require("../utils/Utilities");
let twoSum = (nums, target) => {
    let answer = [0, 0];
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
exports.default = () => {
    let nums = [2, 7, 11, 15];
    Utilities_1.PrintArray(twoSum(nums, 9));
};
