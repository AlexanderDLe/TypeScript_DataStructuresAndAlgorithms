/**
 * Grokking the Coding Interview
 * 1. Average Contiguous Subarrays of Size K
 * 
 * Time Complexity = O(n);
 * 
 * Solution: Use sliding window with two pointers (L & R).
 * Calculate the average of the content within the window and push into result array.
 * As the window iterates through the array, subtract arr[L] and add arr[R] from window sum
 * to find average of the current window content and push the avg into the result array.
 */

import { PrintArray } from "../utils/Utilities";

const findAverageOfSubarraysA = (K: number, arr: number[]): number[] => {
    if (K > arr.length) return [];

    let result: number[] = [];
    let currSum = 0;

    let L = 0;
    let R = 0;

    for (R = 0; R < K; R++) {
        currSum += arr[R];
    }
    result.push(currSum/K);

    while (R < arr.length) {
        currSum -= arr[L];
        currSum += arr[R];
        result.push(currSum/K);
        L++, R++;
    } 

    return result;
}
const findAverageOfSubarrays = (K: number, arr: number[]): number[] => {
    if (K > arr.length) return [];

    let result: number[] = [];
    let currSum = 0;

    let L = 0;
    let R = 0;

    for (R = 0; R < arr.length; R++) {
        currSum += arr[R];

        if (R >= K - 1) {
            result.push(currSum/K);
            currSum -= arr[L];
            L++;
        }
    }

    return result;
}

export default () => {
    let K = 5;
    let arr = [1, 3, 2, 6, -1, 4, 1, 8, 2];
    let result = findAverageOfSubarrays(K, arr);
    PrintArray(result);
};
