"use strict";
/**
 * 207. Course Schedule
 *
 * We'll keep track of visited array to check if index has been visited
 *
 * We'll keep track of count to determine if all indexes were visited.
 * Count starts at 0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const singleCycleCheck = (array) => {
    const len = array.length;
    const getNextIndex = (curr) => {
        let jump = array[curr];
        let next = (curr + jump) % len;
        return next >= 0 ? next : next + len;
    };
    let count = 0;
    let index = 0;
    while (count < len) {
        if (count > 0 && index === 0)
            return false;
        count++;
        index = getNextIndex(index);
    }
    return index === 0;
};
exports.default = () => {
    let array = [2, -6, 1, 2];
    console.log(singleCycleCheck(array));
};
