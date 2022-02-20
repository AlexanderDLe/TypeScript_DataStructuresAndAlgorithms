"use strict";
/**
 *  977. Squares Of A Sorted Array
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Utilities_1 = require("../utils/Utilities");
const sortedSquaresA = (A) => {
    for (let i = 0; i < A.length; i++) {
        A[i] = A[i] * A[i];
    }
    A.sort((a, b) => a - b);
    return A;
};
const sortedSquares = (nums) => {
    let result = new Array(nums.length).fill(0);
    let L = 0;
    let R = nums.length - 1;
    let I = nums.length - 1;
    while (L <= R) {
        let Lval = nums[L] * nums[L];
        let Rval = nums[R] * nums[R];
        if (Rval > Lval) {
            result[I] = Rval;
            R--;
        }
        else {
            result[I] = Lval;
            L++;
        }
        I--;
    }
    return result;
};
exports.default = () => {
    const B = [-4, -3, -2, -1, 0];
    const A = [-4, -3, -2, -1, 0, 3, 10];
    const C = [-7, -3, 2, 3, 11];
    (0, Utilities_1.PrintArray)(sortedSquares(C));
};
