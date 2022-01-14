/**
 * Grokking the Coding Interview
 * 
*******************************************
 * [5, 4, 7, 2, 3, 5, 3]
 *  ^           ^           Swap
*******************************************
 * [3, 4, 7, 2, 5, 5, 3]
 *  ^     ^                 Swap
*******************************************
 * [7, 4, 3, 2, 5, 5, 3]
 *  ^                 ^     Swap
*******************************************
 * [3, 4, 3, 2, 5, 5, 7]
 *  ^     ^                 Duplicate. Skip         
*******************************************
 * [3, 4, 3, 2, 5, 5, 7]
 *     ^     ^              Swap
*******************************************
 * [3, 2, 3, 4, 5, 5, 7]
 *     ^                    Correct
*******************************************
 * [3, 2, 3, 4, 5, 5, 7]
 *        ^                 Correct
*******************************************
 * [3, 2, 3, 4, 5, 5, 7]
 *           ^              Correct
*******************************************
 * [3, 2, 3, 4, 5, 5, 7]
 *              ^           Correct
*******************************************
 * [3, 2, 3, 4, 5, 5, 7]
 *              ^  ^        Duplicate. Skip.
 *  
*/
import { PrintArray } from "../utils/Utilities";

const findAllDuplicateNumbers = (nums: number[]): number[] => {
    let result: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        let currVal = nums[i];

        while (currVal !== i + 1) {
            if (currVal === nums[currVal - 1]) break;
            [nums[i], nums[currVal - 1]] = [nums[currVal - 1], nums[i]]
            currVal = nums[i];
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) result.push(nums[i])
    }

    return result;
}


export default () => {
    let arr1 = [3, 4, 4, 5, 5];
    let arr2 = [5, 4, 7, 2, 3, 5, 3];

    console.log(findAllDuplicateNumbers(arr1));
    console.log(findAllDuplicateNumbers(arr2));
};