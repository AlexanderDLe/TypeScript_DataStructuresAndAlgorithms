"use strict";
/**
 * Grokking the Coding Interview
*/
Object.defineProperty(exports, "__esModule", { value: true });
const Utilities_1 = require("../utils/Utilities");
const squaringASortedArray = (arr) => {
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
        }
        else {
            result[I] = Lsquare;
            L++;
        }
        I--;
    }
    return result;
};
exports.default = () => {
    let arr1 = [-2, -1, 0, 2, 3];
    let arr2 = [-3, -1, 0, 1, 2];
    (0, Utilities_1.PrintArray)(squaringASortedArray(arr1));
    (0, Utilities_1.PrintArray)(squaringASortedArray(arr2));
};
