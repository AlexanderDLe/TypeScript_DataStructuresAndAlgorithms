"use strict";
/**
 *  217. Contains Duplicate
 */
Object.defineProperty(exports, "__esModule", { value: true });
const containsDuplicate = (nums) => {
    let set = new Set([]);
    for (let i of nums) {
        if (set.has(i))
            return true;
        set.add(i);
    }
    return false;
};
const containsDuplicateOld = (nums) => {
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
