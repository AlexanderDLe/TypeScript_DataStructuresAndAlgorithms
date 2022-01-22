"use strict";
/**
 * Grokking the Coding Interview
 *
*/
Object.defineProperty(exports, "__esModule", { value: true });
const bitonicArrayMaximum = (arr) => {
    const isMaximum = (mid) => {
        let prev = arr[mid - 1];
        let next = arr[mid + 1];
        let curr = arr[mid];
        if (prev && next)
            return curr > prev && curr > next;
        return true;
    };
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);
        let val = arr[mid];
        if (isMaximum(mid))
            return val;
        let onAscent = val < arr[mid + 1];
        if (onAscent)
            start = mid + 1;
        else
            end = mid - 1;
    }
    return -1;
};
exports.default = () => {
    let arr1 = [1, 3, 8, 12, 4, 2];
    let arr2 = [3, 8, 3, 1];
    let arr3 = [1, 3, 8, 12];
    let arr4 = [10, 9, 8];
    console.log(bitonicArrayMaximum(arr1));
    console.log(bitonicArrayMaximum(arr2));
    console.log(bitonicArrayMaximum(arr3));
    console.log(bitonicArrayMaximum(arr4));
};
