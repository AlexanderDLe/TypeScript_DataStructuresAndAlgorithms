"use strict";
/**
 * Grokking the Coding Interview
*/
Object.defineProperty(exports, "__esModule", { value: true });
const dutchNationalFlagTwoPass = (arr) => {
    let i = 0;
    for (let L = 0; L < arr.length; L++) {
        if (arr[L] === 0) {
            [arr[i], arr[L]] = [arr[L], arr[i]];
            i++;
        }
    }
    i = arr.length - 1;
    for (let R = arr.length - 1; R >= 0; R--) {
        if (arr[R] === 2) {
            [arr[i], arr[R]] = [arr[R], arr[i]];
            i--;
        }
    }
    return arr;
};
const dutchNationalFlag = (arr) => {
    let L = 0;
    let M = 0;
    let R = arr.length - 1;
    while (M <= R) {
        if (arr[M] === 0) {
            [arr[L], arr[M]] = [arr[M], arr[L]];
            L++, M++;
        }
        else if (arr[M] === 1) {
            M++;
        }
        else {
            [arr[M], arr[R]] = [arr[R], arr[M]];
            R--;
        }
    }
    return arr;
};
exports.default = () => {
    let arr1 = [1, 0, 2, 1, 0];
    let arr2 = [2, 2, 0, 1, 2, 0];
    console.log(dutchNationalFlag(arr1));
    console.log(dutchNationalFlag(arr2));
};
[0, 0, 1, 1, 2];
