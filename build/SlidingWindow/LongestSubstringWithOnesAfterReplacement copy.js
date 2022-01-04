"use strict";
/**
 * Grokking the Coding Interview
*/
Object.defineProperty(exports, "__esModule", { value: true });
const LongestSubstrWithOnesAfterReplacement = (arr, k) => {
    let longestSubstr = 0;
    let numOfOnes = 0;
    let L = 0;
    for (let R = 0; R < arr.length; R++) {
        numOfOnes += arr[R] === 1 ? 1 : 0;
        let currLen = R - L + 1;
        let replacementsUsed = currLen - numOfOnes;
        if (replacementsUsed > k) {
            numOfOnes -= arr[L] === 1 ? 1 : 0;
            L++;
        }
        longestSubstr = Math.max(longestSubstr, R - L + 1);
    }
    return longestSubstr;
};
exports.default = () => {
    let arr1 = [0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1];
    let arr2 = [0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1];
    console.log(LongestSubstrWithOnesAfterReplacement(arr1, 2));
    console.log(LongestSubstrWithOnesAfterReplacement(arr2, 3));
};
