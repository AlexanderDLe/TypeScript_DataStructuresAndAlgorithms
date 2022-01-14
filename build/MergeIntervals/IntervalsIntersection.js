"use strict";
/**
 * Grokking the Coding Interview
*/
Object.defineProperty(exports, "__esModule", { value: true });
const intervalsIntersection = (arr1, arr2) => {
    let result = [];
    return result;
};
exports.default = () => {
    let intervals1 = [[1, 3], [5, 6], [7, 9]], newInterval1 = [[2, 3], [5, 7]];
    let intervals2 = [[1, 3], [5, 7], [9, 12]], newInterval2 = [[5, 10]];
    console.log(intervalsIntersection(intervals1, newInterval1));
    console.log(intervalsIntersection(intervals2, newInterval2));
};
