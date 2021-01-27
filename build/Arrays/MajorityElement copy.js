"use strict";
/**
 * 169. Majority Element
 */
Object.defineProperty(exports, "__esModule", { value: true });
const majorityElement = (nums) => {
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
exports.default = () => {
    const nums = [2, 2, 1, 1, 1, 2, 2];
    console.log(majorityElement(nums));
};
