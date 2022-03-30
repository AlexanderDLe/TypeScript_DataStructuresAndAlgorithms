"use strict";
/**
 *  670. Maximum Swap
 *
 *
 * 2 7 3 6
 * ^
 *
 * Heap:
 *      7, 1
 *      6, 3
 *      3, 2
 *      2, 0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const maxSwap = (num) => {
    const negative = num < 0;
};
exports.default = () => {
    console.log(maxSwap(2736));
    console.log(maxSwap(546423));
    console.log(maxSwap(-2108));
    console.log(maxSwap(-9973));
};
