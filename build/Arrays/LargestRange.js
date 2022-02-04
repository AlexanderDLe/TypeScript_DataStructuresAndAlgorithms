"use strict";
/**
 *
 * [1, 2, 3]
 */
Object.defineProperty(exports, "__esModule", { value: true });
const largestRangeONLogN = (array) => {
    const rangeLen = (arr) => {
        return arr[1] - arr[0] + 1;
    };
    array = array.sort((a, b) => a - b);
    let prev = [array[0], array[0]];
    let result = prev;
    for (let i = 1; i < array.length; i++) {
        let curr = array[i];
        if (curr - prev[1] < 2) {
            prev[1] = curr;
        }
        else {
            if (rangeLen(prev) > rangeLen(result))
                result = prev;
            prev = [curr, curr];
        }
    }
    if (rangeLen(prev) > rangeLen(result))
        result = prev;
    return result;
};
const largestRange = (array) => {
    const map = {};
    for (let num of array)
        map[num] = true;
    let result = [array[0], array[0]];
    for (let num of array) {
        if (!map[num])
            continue;
        map[num] = false;
        let curr = [num, num];
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
        if (currLen > resLen)
            result = curr;
    }
    return result;
};
exports.default = () => {
    const array = [1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6];
    console.log(largestRange(array));
};
