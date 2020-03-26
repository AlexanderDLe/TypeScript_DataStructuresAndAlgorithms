"use strict";
/**
 *  217. Contains Duplicate
 */
Object.defineProperty(exports, "__esModule", { value: true });
const containsDuplicate = (nums) => {
    const table = {};
    for (let num of nums) {
        table[num] = (table[num] || 0) + 1;
        if (table[num] > 1)
            return true;
    }
    return false;
};
exports.default = () => {
    const nums = [1, 2, 3, 1];
    console.log(containsDuplicate(nums));
};
