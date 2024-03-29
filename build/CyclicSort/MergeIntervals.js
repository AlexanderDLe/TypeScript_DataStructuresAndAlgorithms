"use strict";
/**
 * Grokking the Coding Interview
*/
Object.defineProperty(exports, "__esModule", { value: true });
const mergeIntervals = (intervals) => {
    intervals = intervals.sort((a, b) => a[0] - b[0]);
    let result = [];
    let carry = intervals[0];
    for (let i = 1; i < intervals.length; i++) {
        let curr = intervals[i];
        console.log(carry);
        if (carry[1] >= curr[0]) {
            carry[1] = Math.max(carry[1], curr[1]);
        }
        else {
            result.push(carry);
            carry = curr;
        }
    }
    result.push(carry);
    return result;
};
exports.default = () => {
    let Intervals = [[1, 4], [2, 5], [7, 9]];
    console.log(mergeIntervals(Intervals));
};
