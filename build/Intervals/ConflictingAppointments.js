"use strict";
/**
 * Grokking the Coding Interview
*/
Object.defineProperty(exports, "__esModule", { value: true });
const conflictingAppointments = (intervals) => {
    intervals = intervals.sort((a, b) => a[0] - b[0]);
    for (let i = 1; i < intervals.length; i++) {
        let curr = intervals[i];
        let prev = intervals[i - 1];
        if (curr[0] < prev[1])
            return false;
    }
    return true;
};
exports.default = () => {
    let arr1 = [[1, 4], [2, 5], [7, 9]];
    let arr2 = [[6, 7], [2, 4], [8, 12]];
    let arr3 = [[4, 5], [2, 3], [3, 6]];
    console.log(conflictingAppointments(arr1));
    console.log(conflictingAppointments(arr2));
    console.log(conflictingAppointments(arr3));
};
