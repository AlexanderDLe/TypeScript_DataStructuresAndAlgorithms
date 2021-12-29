"use strict";
/**
 * 56. Merge Intervals
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Utilities_1 = require("../utils/Utilities");
const merge = (intervals) => {
    if (intervals.length < 2)
        return intervals;
    let result = [];
    intervals.sort((a, b) => a[0] - b[0]);
    let start = intervals[0][0];
    let end = intervals[0][1];
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] >= start && intervals[i][0] <= end) {
            end = Math.max(end, intervals[i][1]);
        }
        else {
            result.push([start, end]);
            start = intervals[i][0];
            end = intervals[i][1];
        }
    }
    result.push([start, end]);
    return result;
};
exports.default = () => {
    const intervals = [
        [1, 3],
        [2, 6],
        [8, 15],
        [15, 18]
    ];
    (0, Utilities_1.PrintMatrix)(merge(intervals));
};
