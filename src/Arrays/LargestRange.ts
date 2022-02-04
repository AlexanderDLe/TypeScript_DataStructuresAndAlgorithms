/**
 * 
 * [1, 2, 3]
 */

import { PrintObject } from "../utils/Utilities";

const largestRangeONLogN = (array: number[]): number[] => {
    const rangeLen = (arr: [number, number]) => {
        return arr[1] - arr[0] + 1;
    }
    
    array = array.sort((a, b) => a - b);
    
    let prev: [number, number] = [array[0], array[0]];
    let result: [number, number] = prev
    
    for (let i = 1; i < array.length; i++) {
        let curr = array[i];

        if (curr - prev[1] < 2) {
            prev[1] = curr;
        } else {
            if (rangeLen(prev) > rangeLen(result)) result = prev;
            prev = [curr, curr];
        }
    }
    if (rangeLen(prev) > rangeLen(result)) result = prev;

    return result;
};

const largestRange = (array: number[]): number[] => {
    const map: any = {};
    for (let num of array) map[num] = true;
    
    let result: [number, number] = [array[0], array[0]];

    for (let num of array) {
        if (!map[num]) continue;
        map[num] = false;
        
        let curr: [number, number] = [num, num];

        let L = num - 1;
        while (map[L]) {
            map[L] = false;
            curr[0] = L;
            L--;
        }

        let R = num + 1;
        while (map[R]) {
            map[R] = false;
            curr[1] = R;
            R++;
        }

        let resLen = result[1] - result[0] + 1;
        let currLen = curr[1] - curr[0] + 1;

        if (currLen > resLen) result = curr;
    }

    return result;
}

export default () => {
    const array = [1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6];
    console.log(largestRange(array));
};
