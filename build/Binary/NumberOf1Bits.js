"use strict";
/**
 * 191. Number of 1 Bits
 */
Object.defineProperty(exports, "__esModule", { value: true });
const hammingWeight = (n) => {
    let sum = 0;
    while (n != 0) {
        sum += n & 1;
        n = n >>> 1;
    }
    return sum;
};
exports.default = () => {
    console.log(hammingWeight(10));
};
