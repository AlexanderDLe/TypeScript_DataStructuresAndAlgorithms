"use strict";
/**
 * Grokking the Coding Interview
 *
 * The time complexity of the algorithm will be O(N)O(N).
 * The outer for loop runs for all elements, and the inner while loop processes
 * each element only once; therefore, the time complexity of the algorithm
 * will be O(N+N)O(N+N), which is asymptotically equivalent to O(N).
*/
Object.defineProperty(exports, "__esModule", { value: true });
const SmallestSubarrayWithGreaterSum = (s, arr) => {
    let L = 0;
    let minLen = Infinity;
    let currSum = 0;
    for (let R = 0; R < arr.length; R++) {
        currSum += arr[R];
        while (L <= R && currSum >= s) {
            minLen = Math.min(minLen, R - L + 1);
            currSum -= arr[L];
            L++;
        }
    }
    return minLen;
};
exports.default = () => {
    let s = 8;
    let arr = [3, 4, 1, 1, 6];
    console.log(SmallestSubarrayWithGreaterSum(s, arr));
};
