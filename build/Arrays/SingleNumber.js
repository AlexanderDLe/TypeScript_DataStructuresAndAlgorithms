"use strict";
/**
 * 136. Single Number
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Utilities_1 = require("../utils/Utilities");
const singleNumber = (nums) => {
    let set = new Set([]);
    let result;
    for (let i of nums) {
        if (set.has(i))
            set.delete(i);
        else
            set.add(i);
    }
    // for-of loop works only when compiling to es6
    for (let i of set.values()) {
        result = i;
    }
    // forEach loop works with either es5/es6
    set.forEach((val) => {
        result = val;
    });
    return result;
};
exports.default = () => {
    const nums = [4, 1, 2, 1, 2];
    Utilities_1.PrintArray(nums);
    console.log(singleNumber(nums));
};
