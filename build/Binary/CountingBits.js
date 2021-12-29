"use strict";
/**
 * 338. Counting Bits
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Utilities_1 = require("../utils/Utilities");
const countBits = (num) => {
    let result = [];
    result.push(0);
    for (let i = 0; i <= num; i++) {
        result[i] = result[i >> 1] + (i & 1);
        console.log(i.toString(2) + ' r[i >> 1]: ' + result[i >> 1] + ' and (i & 1): ' + (i & 1) + ' total: ' + result[i]);
    }
    return result;
};
const countBitsOld = (num) => {
    let result = [];
    for (let i = 0; i <= num; i++) {
        let count = 0;
        let copy = i;
        while (copy) {
            count += copy & 1;
            copy = copy >> 1;
        }
        result.push(count);
    }
    return result;
};
exports.default = () => {
    (0, Utilities_1.PrintArray)(countBits(10));
};
