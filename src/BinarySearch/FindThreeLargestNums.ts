/**
 * Grokking the Coding Interview
*/

import { PrintArray } from "../utils/Utilities";

const findThreeLargestNums = (array: number[]): number[] => {
    let result = [];
    let lowestVal = Infinity;

    for (let num of array) {
        if (result.length < 3) {
            result.push(num);
            lowestVal = Math.min(lowestVal, num);
            continue;
        }

        if (num > lowestVal) {
            for (let i = 0; i < result.length; i++) {
                if (result[i] === lowestVal) {
                    result[i] = num;
                    lowestVal = Math.min(...result);
                    break;
                }
            }
        }
    }

    return result;
}

export default () => {
    let array = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7];

    console.log(findThreeLargestNums(array));
};
