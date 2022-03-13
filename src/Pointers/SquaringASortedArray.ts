/**
 * Grokking the Coding Interview
*/

import { PrintArray } from "../utils/Utilities";

const squaringASortedArray = (arr: number[]): number[] => {
    let result = new Array(arr.length).fill(0);
    let I = arr.length - 1;
    let L = 0;
    let R = arr.length - 1;

    while (L <= R) {
        let Lsquare = arr[L] * arr[L];
        let Rsquare = arr[R] * arr[R];

        if (Rsquare >= Lsquare) {
            result[I] = Rsquare;
            R--;
        } else {
            result[I] = Lsquare;
            L++;
        }
        I--;
    }

    return result;
}

export default () => {
    let arr1 = [-2, -1, 0, 2, 3];
    let arr2 = [-3, -1, 0, 1, 2];

    PrintArray(squaringASortedArray(arr1));
    PrintArray(squaringASortedArray(arr2));
};
