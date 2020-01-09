"use strict";
/**
 * 1295. Find Numbers with Even Number of Digits
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Solution = (nums) => {
    let count = 0;
    for (let num of nums) {
        if (num.toString().length % 2 == 0) {
            count++;
        }
    }
    return count;
};
exports.default = () => {
    const nums = [12, 345, 2, 6, 7896];
    console.log(Solution(nums));
};
