/**
 * Grokking the Coding Interview
*/

import { PrintArray } from "../utils/Utilities";

const tripletWithSmallerSum = (arr: number[], target: number): number => {
    let count = 0;
    arr = arr.sort((a, b) => a - b);

    for (let L = 0; L < arr.length - 2; L++) {
        let M = L + 1;
        let R = arr.length - 1;

        while (M < R) {
            let sum = arr[L] + arr[M] + arr[R];

            if (sum < target) {
                count += R - M;
                M++;
            }  else {
                R--;
            }
        }
    }

    return count;
}

export default () => {
    let arr1 = [-1, 0, 2, 3], target1 = 3;
    let arr2 = [-1, 4, 2, 1, 3], target2 = 5;

    console.log(tripletWithSmallerSum(arr1, target1));
    console.log(tripletWithSmallerSum(arr2, target2));
};
