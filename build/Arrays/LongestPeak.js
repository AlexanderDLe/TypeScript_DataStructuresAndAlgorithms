"use strict";
/**
 *  3. Longest Substring Without Repeating Characters
 */
Object.defineProperty(exports, "__esModule", { value: true });
const longestPeak = (array) => {
    let result = 0;
    for (let i = 1; i < array.length - 1; i++) {
        let curr = array[i];
        let isPeak = array[i - 1] < curr && array[i + 1] < curr;
        if (!isPeak)
            continue;
        let currLen = 1;
        let L = i - 1;
        let R = i + 1;
        while (array[L] < array[L + 1]) {
            currLen++;
            L--;
        }
        while (array[R] < array[R - 1]) {
            currLen++;
            R++;
        }
        result = Math.max(result, currLen);
    }
    return result;
};
exports.default = () => {
    const array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3];
    console.log(longestPeak(array));
};
