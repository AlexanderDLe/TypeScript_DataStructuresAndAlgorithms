/**
 * Grokking the Coding Interview
*/

import { PrintArray } from "../utils/Utilities";

const insertIntervalsWhack = (intervals: number[][], new_interval: number[]): number[][] => {
    let result: number[][] = [];
    intervals = intervals.sort((a, b) => a[0] - b[0]);
    let carry: number[] = [];

    const checkOverlap = (iA: number[], iB: number[]): boolean => {
        if (iA[0] >= iB[0] && iA[0] <= iB[1]) return true;
        if (iB[0] >= iA[0] && iB[0] <= iA[1]) return true;
        return false;
    }

    for (let i = 0; i < intervals.length; i++) {
        let curr = intervals[i];
        
        if (!carry.length) {
            let isOverlapping = checkOverlap(curr, new_interval);
            if (isOverlapping) {
                carry[0] = Math.min(curr[0], new_interval[0]);
                carry[1] = Math.max(curr[1], new_interval[1]);
            } else {
                result.push(curr);
            }
        } else {
            let isOverlapping = checkOverlap(carry, curr);
            if (isOverlapping) {
                carry[0] = Math.min(curr[0], carry[0]);
                carry[1] = Math.max(curr[1], carry[1]);
            } else {
                result.push(carry);
                carry = [];
            }
        }
    }

    if (!carry.length) result.push(intervals[intervals.length - 1])
    else result.push(carry)

    return result;
}

const insertIntervals = (intervals: number[][], new_interval: number[]): number[][] => {
    let result: number[][] = [];
    let i = 0;

    // Skip & add all intervals that come before new interval
    while (i < intervals.length && intervals[i][1] < new_interval[0]) {
        result.push(intervals[i]);
        i++;
    }

    // Merge all overlapping intervals
    let carry: number[] = [];
    while (i < intervals.length && intervals[i][0] <= new_interval[1]) {
        if (!carry.length) carry = new_interval;
        carry[0] = Math.min(carry[0], intervals[i][0]);
        carry[1] = Math.max(carry[1], intervals[i][1]);
        i++;
    }
    result.push(carry);

    // Add remaining intervals
    while (i < intervals.length) {
        result.push(intervals[i]);
        i++
    }

    return result;
}

export default () => {
    let intervals1 = [[1,3], [5,7], [8,12]], newInterval1 = [4,6];
    let intervals2 = [[1,3], [5,7], [8,12]], newInterval2 = [4,10];
    let intervals3 = [[2,3],[5,7]], newInterval3 = [1,4];

    console.log(insertIntervals(intervals1, newInterval1));
    console.log(insertIntervals(intervals2, newInterval2));
    console.log(insertIntervals(intervals3, newInterval3));
};