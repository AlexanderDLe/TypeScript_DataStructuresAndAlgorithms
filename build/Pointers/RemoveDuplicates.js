"use strict";
/**
 * Grokking the Coding Interview
*/
Object.defineProperty(exports, "__esModule", { value: true });
const removeDuplicates = (arr) => {
    for (let L = 0; L < arr.length; L++) {
        let R = L + 1;
        while (R < arr.length && arr[L] === arr[R]) {
            arr.splice(R, 1);
        }
    }
    return arr.length;
};
exports.default = () => {
    let arr1 = [2, 3, 3, 3, 6, 9, 9];
    let arr2 = [2, 2, 2, 11];
    console.log(removeDuplicates(arr1));
    console.log(removeDuplicates(arr2));
};
