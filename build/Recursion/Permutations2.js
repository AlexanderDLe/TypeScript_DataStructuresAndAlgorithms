"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 47. Permutations 2
 *
 * [1, 1, 2, 2]
 *
 * {1: 2, 2: 2}
 *
 * []
 *
 * [1]  [2]
 *
 * [11][12] [21][22]
 *
 * [112][121] [211][221]
 *
 */
const Utilities_1 = require("../utils/Utilities");
const permuteRef = (nums) => {
    let map = {};
    for (let num of nums) {
        map[num] = (map[num] || 0) + 1;
    }
    let len = nums.length;
    let result = [];
    const recurse = (i, res) => {
        if (i === len) {
            result = [...result, res];
            return;
        }
        for (let key in map) {
            if (!map[key])
                continue;
            map[key]--;
            recurse(i + 1, [...res, Number(key)]);
            map[key]++;
        }
    };
    recurse(0, []);
    return result;
};
const permute = (nums) => {
    const result = [];
    const map = {};
    for (let num of nums)
        map[num] = (map[num] || 0) + 1;
    const backtrack = (obj, subarr) => {
        if (subarr.length === nums.length) {
            result.push([...subarr]);
            return;
        }
        for (let key in obj) {
            let val = obj[key];
            if (!val)
                continue;
            obj[key]--;
            subarr.push(Number(key));
            backtrack(obj, subarr);
            obj[key]++;
            subarr.pop();
        }
    };
    backtrack(map, []);
    return result;
};
exports.default = () => {
    let nums = [1, 1, 2];
    (0, Utilities_1.PrintMatrix)(permute(nums));
};
