/**
 * Grokking the Coding Interview
*/

import { PrintArray } from "../utils/Utilities";

const MinimumWindowSort = (arr: number[]): number => {
    let ASCIndex = 0;
    let ASCMax = arr[0];
    
    for (let L = 1; L < arr.length; L++) {
        if (arr[L] < ASCMax) ASCIndex = L;
        ASCMax = Math.max(ASCMax, arr[L]);
    }
    
    let DSCIndex = arr.length - 1;
    let DSCMin = arr[arr.length - 1];

    for (let R = arr.length - 2; R >= 0; R--) {
        if (arr[R] > DSCMin)  DSCIndex = R;
        DSCMin = Math.min(DSCMin, arr[R]);
    }

    let length = ASCIndex - DSCIndex + 1;
    return length > 0 ? length : 0
}

export default () => {
    let arr1 = [1, 2, 5, 3, 7, 10, 9, 12];
    let arr2 = [1, 3, 2, 0, -1, 7, 10];
    let arr3 = [1, 2, 3];
    let arr4 = [3, 2, 1];

    console.log(MinimumWindowSort(arr1));
    console.log(MinimumWindowSort(arr2));
    console.log(MinimumWindowSort(arr3));
    console.log(MinimumWindowSort(arr4));
};

