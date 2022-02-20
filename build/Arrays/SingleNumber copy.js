"use strict";
/**
 * 136. Single Number
 */
Object.defineProperty(exports, "__esModule", { value: true });
const singleNumberA = (nums) => {
    let set = new Set([]);
    let res = 0;
    for (let i of nums) {
        if (set.has(i))
            set.delete(i);
        else
            set.add(i);
    }
    set.forEach((val) => {
        res = val;
    });
    return res;
};
const singleNumber = (nums) => {
    let map = {};
    for (let num of nums) {
        map[num] = (map[num] || 0) + 1;
    }
    for (let key in map) {
        if (map[key] === 1)
            return Number(key);
    }
};
exports.default = () => {
    const nums = [4, 1, 2, 1, 2];
    console.log(singleNumber(nums));
};
