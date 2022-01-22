"use strict";
/**
 * Grokking the Coding Interview
 *
*/
Object.defineProperty(exports, "__esModule", { value: true });
const orderAgnosticBinarySearch = (arr, key) => {
    let start = 0;
    let end = arr.length - 1;
    let lowestDiff = Infinity;
    let result = 0;
    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);
        let val = arr[mid];
        let diff = Math.abs(key - val);
        if (diff < lowestDiff) {
            lowestDiff = diff;
            result = val;
        }
        if (key >= val)
            start = mid + 1;
        else
            end = mid - 1;
    }
    return result;
};
exports.default = () => {
    let arr1 = [4, 6, 10], key1 = 7;
    let arr2 = [4, 6, 10], key2 = 4;
    let arr3 = [1, 3, 8, 10, 15], key3 = 12;
    let arr4 = [4, 6, 10], key4 = 17;
    console.log(orderAgnosticBinarySearch(arr1, key1));
    console.log(orderAgnosticBinarySearch(arr2, key2));
    console.log(orderAgnosticBinarySearch(arr3, key3));
    console.log(orderAgnosticBinarySearch(arr4, key4));
};
