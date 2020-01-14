"use strict";
/**
 * 338. Counting Bits
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Utilities_1 = require("../utils/Utilities");
const countBits = (num) => {
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
    Utilities_1.PrintArray(countBits(5));
};
