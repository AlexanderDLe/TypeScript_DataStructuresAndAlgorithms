"use strict";
/**
 * Grokking the Coding Interview
*/
Object.defineProperty(exports, "__esModule", { value: true });
const binarySearch = (array, target) => {
    let L = 0;
    let R = array.length - 1;
    while (L <= R) {
        let M = Math.floor(L + (R - L) / 2);
        let val = array[M];
        if (val === target)
            return M;
        if (val < target)
            L = M + 1;
        else
            R = M - 1;
    }
    return -1;
};
exports.default = () => {
    let array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73];
    let target = 33;
    console.log(binarySearch(array, target));
};
