/**
 * Grokking the Coding Interview
*/

import { PrintArray } from "../utils/Utilities";

const mergeIntervalsA = (intervals: number[][]): number[][] => {
    intervals = intervals.sort((a, b) => a[0] - b[0])
    let result: number[][] = []
    let carry: number[] = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        let curr = intervals[i];
        console.log(carry);
        
        if (carry[1] >= curr[0]) {
            carry[1] = Math.max(carry[1], curr[1]);
        } else {
            result.push(carry);
            carry = curr;
        }
    }
    
    result.push(carry);
    return result;
}

const mergeIntervals = (intervals: number[][]): number[][] => {
    intervals = intervals.sort((a, b) => a[0] - b[0]);
    let prev = intervals[0]

    let result: number[][] = []
    for (let i = 1; i < intervals.length; i++) {
        let curr = intervals[i];

        if (curr[0] <= prev[1]) {
            prev[1] = Math.max(prev[1], curr[1]);
        } else {
            result.push(prev);
            prev = curr;
        }
    }
    result.push(prev);
    return result;
}

export default () => {
    let Intervals = [[1,4], [2,5], [7,9]]
    console.log(mergeIntervals(Intervals));
};