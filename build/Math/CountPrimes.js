"use strict";
/**
 *  204. Count Primes
 */
Object.defineProperty(exports, "__esModule", { value: true });
const plusOne = (n) => {
    let count = 0;
    let arr = new Array(n).fill(0);
    for (let i = 2; i < n; i++) {
        if (arr[i])
            continue;
        else
            count++;
        for (let j = i + i; j < n; j += i) {
            arr[j] = 1;
        }
    }
    return count;
};
exports.default = () => {
    let n = 2;
    console.log(plusOne(n));
};
