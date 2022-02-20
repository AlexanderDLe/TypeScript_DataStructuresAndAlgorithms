"use strict";
/**
 * 169. Majority Element
 */
Object.defineProperty(exports, "__esModule", { value: true });
const majorityElementA = (nums) => {
    let result;
    let map = {};
    let max = 0;
    for (let num of nums) {
        map[num] = (map[num] || 0) + 1;
        if (map[num] > max) {
            max = map[num];
            result = num;
        }
    }
    return result;
};
const majorityElementB = (nums) => {
    let majority = Math.floor(nums.length / 2);
    let map = {};
    for (const i of nums) {
        if (map[i])
            map[i]++;
        else
            map[i] = 1;
        if (map[i] > majority)
            return i;
    }
    return 0;
};
const majorityElementC = (nums) => {
    let map = {};
    for (let num of nums) {
        map[num] = (map[num] || 0) + 1;
    }
    let majorityElement = 0;
    let majorityValue = 0;
    for (let key in map) {
        if (map[key] > majorityValue) {
            majorityValue = map[key];
            majorityElement = Number(key);
        }
    }
    return majorityElement;
};
const majorityElement = (nums) => {
    let majority = nums[0];
    let count = 1;
    for (let i = 1; i < nums.length; i++) {
        if (count === 0) {
            count++;
            majority = nums[i];
        }
        else if (majority === nums[i]) {
            count++;
        }
        else {
            count--;
        }
    }
    return majority;
};
exports.default = () => {
    const nums = [2, 2, 1, 1, 1, 2, 2];
    console.log(majorityElement(nums));
};
