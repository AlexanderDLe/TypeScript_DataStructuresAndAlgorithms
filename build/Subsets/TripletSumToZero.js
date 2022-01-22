"use strict";
/**
 * Grokking the Coding Interview
*/
Object.defineProperty(exports, "__esModule", { value: true });
const Utilities_1 = require("../utils/Utilities");
const tripletSumToZero = (arr) => {
    let result = [];
    arr = arr.sort((a, b) => a - b);
    for (let L = 0; L < arr.length - 2; L++) {
        let M = L + 1;
        let R = arr.length - 1;
        while (M < R) {
            let sum = arr[L] + arr[M] + arr[R];
            if (sum === 0) {
                result.push([arr[L], arr[M], arr[R]]);
                while (arr[M] === arr[M + 1])
                    M++;
                while (arr[R] === arr[R - 1])
                    R--;
                M++;
                R--;
            }
            else if (sum > 0)
                R--;
            else
                M++;
        }
        while (arr[L] === arr[L + 1])
            L++;
    }
    return result;
};
const tripletSumToZeroSlow = (arr) => {
    let result = [];
    arr = arr.sort((a, b) => a - b);
    for (let L = 0; L < arr.length - 2; L++) {
        for (let M = L + 1; M < arr.length - 1; M++) {
            let LMSum = arr[L] + arr[M];
            for (let R = M + 1; R < arr.length; R++) {
                if (LMSum + arr[R] === 0) {
                    result.push([arr[L], arr[M], arr[R]]);
                }
                while (arr[R] === arr[R + 1])
                    R++;
            }
            while (arr[M] === arr[M + 1])
                M++;
        }
        while (arr[L] === arr[L + 1])
            L++;
    }
    return result;
};
exports.default = () => {
    let arr1 = [-3, 0, 1, 2, -1, 1, -2];
    let arr2 = [-5, 2, -1, -2, 3];
    (0, Utilities_1.PrintArray)(tripletSumToZero(arr1));
    // PrintArray(tripletSumToZero(arr2));
};
