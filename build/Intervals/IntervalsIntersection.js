"use strict";
/**
 * Grokking the Coding Interview
*/
Object.defineProperty(exports, "__esModule", { value: true });
const intervalsIntersection = (intervals_a, intervals_b) => {
    // Interval is overlapping if one's start time is between the others's start & end time
    const isOverlapping = (curr1, curr2) => {
        if (curr1[0] >= curr2[0] && curr1[0] <= curr2[1])
            return true;
        if (curr2[0] >= curr1[0] && curr2[0] <= curr1[1])
            return true;
        return false;
    };
    let result = [];
    // Create pointer for each array
    let i = 0;
    let j = 0;
    // Iterate both pointers through both arrays
    while (i < intervals_a.length && j < intervals_b.length) {
        let curr1 = intervals_a[i];
        let curr2 = intervals_b[j];
        // If overlapping, then push overlapped area
        if (isOverlapping(curr1, curr2)) {
            let overlap = [];
            overlap[0] = Math.max(curr1[0], curr2[0]);
            overlap[1] = Math.min(curr1[1], curr2[1]);
            result.push(overlap);
        }
        // Iterate earlier interval forward
        if (curr1[1] <= curr2[1])
            i++;
        else
            j++;
    }
    return result;
};
exports.default = () => {
    let arr1A = [[1, 3], [5, 6], [7, 9]], arr2A = [[2, 3], [5, 7]];
    let arr1B = [[1, 3], [5, 7], [9, 12]], arr2B = [[5, 10]];
    console.log(intervalsIntersection(arr1A, arr2A));
    console.log(intervalsIntersection(arr1B, arr2B));
};
