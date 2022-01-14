/**
 * Grokking the Coding Interview
 * 
 * [2, 4, 1, 2]
 *  ^  ^        Swap
 * [4, 2, 1, 2]
 *  ^        ^  Swap
 * [2, 2, 1, 4]
 *  ^  ^        Encountered duplicate. Skip.
 * [2, 2, 1, 4]
 *     ^        Correct
 * [2, 2, 1, 4]
 *  ^     ^     Swap
 * [1, 2, 2, 4]
 *     ^  ^     Encountered duplicate. Skip.
 * [1, 2, 2, 4]
 *           ^  Correct
*/

import { PrintArray } from "../utils/Utilities";

const findAllMissingNumbers = (nums: number[]): number[] => {
    let len = nums.length;
    
    for (let i = 0; i < len; i++) {
        let currVal = nums[i];
        if (currVal === i + 1) continue;
        
        while (currVal !== i + 1) {
            if (currVal === nums[currVal - 1]) break;
            [nums[i], nums[currVal - 1]] = [nums[currVal - 1], nums[i]];
            currVal = nums[i];
        }
    }
    
    let result: number[] = [];
    for (let i = 0; i < len; i++) {
        if (nums[i] !== i + 1) result.push(i + 1)
    }
    return result;
}


export default () => {
    let arr1 = [2, 3, 1, 8, 2, 3, 5, 1];
    let arr2 = [2, 4, 1, 2];
    let arr3 = [2, 3, 2, 1];

    console.log(findAllMissingNumbers(arr1));
    console.log(findAllMissingNumbers(arr2));
    console.log(findAllMissingNumbers(arr3));
};