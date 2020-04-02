"use strict";
/**
 *  171. Excel Sheet Column Number
 */
Object.defineProperty(exports, "__esModule", { value: true });
const titleToNumber = (s) => {
    let number = 0;
    let exponent = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        let val = s.charCodeAt(i) - 64;
        number += val * Math.pow(26, exponent);
        exponent++;
    }
    return number;
};
exports.default = () => {
    const str = 'AAA';
    console.log(titleToNumber(str));
};
