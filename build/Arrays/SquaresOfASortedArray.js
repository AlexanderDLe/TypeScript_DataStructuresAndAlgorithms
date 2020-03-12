"use strict";
/**
 *  977. Squares Of A Sorted Array
 */
Object.defineProperty(exports, "__esModule", { value: true });
const sortedSquares = (A) => {
    for (let i = 0; i < A.length; i++) {
        A[i] = A[i] * A[i];
    }
    A.sort((a, b) => a - b);
    return A;
};
exports.default = () => {
    const A = [-4, -1, 0, 3, 10];
    console.log(sortedSquares(A));
};
