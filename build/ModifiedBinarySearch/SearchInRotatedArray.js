"use strict";
/**
 * Grokking the Coding Interview
 *
*/
Object.defineProperty(exports, "__esModule", { value: true });
const searchRotatedArray = (arr, key) => {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);
        let curr = arr[mid];
        if (curr === key)
            return mid;
        if (curr > arr[start]) {
            if (key < curr && key >= arr[start])
                end = mid - 1;
            else
                start = mid + 1;
        }
        else {
            if (key > curr && key <= arr[end])
                start = mid + 1;
            else
                end = mid - 1;
        }
    }
    return -1;
};
exports.default = () => {
    let arr1 = [10, 15, 1, 3, 8], key1 = 15;
    let arr2 = [4, 5, 7, 9, 10, -1, 2], key2 = 10;
    console.log(searchRotatedArray(arr1, key1));
    console.log(searchRotatedArray(arr2, key2));
};
