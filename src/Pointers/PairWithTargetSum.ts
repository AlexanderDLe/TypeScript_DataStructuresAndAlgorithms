/**
 * Grokking the Coding Interview
 * 1. Average Contiguous Subarrays of Size K
*/

import { PrintArray } from "../utils/Utilities";

const findAverageOfSubarrays = (arr: number[], target_sum: number): number[] => {
    let result: number[] = [];
    let L = 0;
    let R = arr.length - 1;

    while (L < R) {
        let currSum = arr[L] + arr[R];
        if (currSum === target_sum) return [L, R];
        if (currSum < target_sum) L++;
        else R--;
    }

    return result;
}

export default () => {
    let arr1 = [1, 2, 3, 4, 6], target1 = 6;
    let arr2 = [2, 5, 9, 11], target2 = 11;

    PrintArray(findAverageOfSubarrays(arr1, target1));
    PrintArray(findAverageOfSubarrays(arr2, target2));
};
