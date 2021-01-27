"use strict";
/**
 * 191. Number of 1 Bits
 */
Object.defineProperty(exports, "__esModule", { value: true });
const reverseBits = (n) => {
    let result = 0;
    let count = 32;
    while (count--) {
        result *= 2;
        result += n & 1;
        n >>= 1;
    }
    return result;
};
exports.default = () => {
    console.log(reverseBits(43261596));
};
