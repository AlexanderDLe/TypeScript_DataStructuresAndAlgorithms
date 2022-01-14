/**
 * Grokking the Coding Interview
 * 
 * [3, 2, 5, 1]
 * 
 * [5, 2, 3, 1]
 * 
 * [1, 2, 3, 5]
*/
import { PrintArray } from "../utils/Utilities";

const findAllDuplicateNumbers = (nums: number[]): number => {
    for (let i = 0; i < nums.length; i++) {
        let currVal = nums[i];

        while (currVal !== i + 1) {
            if (currVal <= 0 || currVal > nums.length) break;
            [nums[i], nums[currVal - 1]] = [nums[currVal - 1], nums[i]];
            currVal = nums[i];
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) return i + 1;
    }

    return 0;
}


export default () => {
    let arr1 = [-3, 1, 5, 4, 2];
    let arr2 = [3, -2, 0, 1, 2];
    let arr3 = [3, 2, 5, 1];

    console.log(findAllDuplicateNumbers(arr1));
    console.log(findAllDuplicateNumbers(arr2));
    console.log(findAllDuplicateNumbers(arr3));
};