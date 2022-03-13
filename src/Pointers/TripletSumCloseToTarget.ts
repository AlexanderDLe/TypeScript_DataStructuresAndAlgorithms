/**
 * Grokking the Coding Interview
*/

import { PrintArray } from "../utils/Utilities";

const tripletSumToTarget = (arr: number[], target_sum: number): number => {
    let result = 0;
    let lowestDiff = Infinity;
    arr = arr.sort((a, b) => a - b);

    for (let L = 0; L < arr.length - 2; L++) {
        let M = L + 1;
        let R = arr.length - 1;

        while (M < R) {
            let sum = arr[L] + arr[M] + arr[R];
            let diff = Math.abs(target_sum - sum);

            if (diff < lowestDiff) {
                lowestDiff = diff;
                result = sum;
                M++;
            } else if (diff > lowestDiff) {
                R--;
            } else {
                result = Math.min(result, sum);
                while (arr[M] === arr[M + 1]) M++;
                while (arr[R] === arr[R - 1]) R--;
                M++;
                R--;
            }
        }
        while (arr[L] === arr[L + 1]) L++;
    }

    return result;
}

export default () => {
    let arr1 = [-2, 0, 1, 2], target1 = 2;
    let arr2 = [-3, -1, 1, 2], target2 = 1;
    let arr3 = [1, 0, 1, 1], target3 = 3;

    console.log(tripletSumToTarget(arr1, target1));
    console.log(tripletSumToTarget(arr2, target2));
    console.log(tripletSumToTarget(arr3, target3));
};
