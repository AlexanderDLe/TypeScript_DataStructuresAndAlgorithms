"use strict";
/**
 *  172. Factorial Trailing Zeroes
 */
Object.defineProperty(exports, "__esModule", { value: true });
const trailingZeroes = (n) => {
    let zeroes = 0;
    for (let i = 5; i <= n; i *= 5) {
        zeroes += Math.floor(n / i);
        console.log('n: ' + n + ' || i: ' + i + ' || zeroes: ' + zeroes);
    }
    return zeroes;
};
exports.default = () => {
    console.log(trailingZeroes(125));
};
