"use strict";
/**
 *  326. Power Of Three
 */
Object.defineProperty(exports, "__esModule", { value: true });
const isPowerOfThree = (n) => {
    let i = 3;
    if (n < 1)
        return false;
    else if (n === 1)
        return true;
    while (i <= n) {
        if (i === n)
            return true;
        i *= 3;
    }
    return false;
};
exports.default = () => {
    let test = 0;
    console.log(isPowerOfThree(test));
};
