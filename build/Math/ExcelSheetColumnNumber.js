"use strict";
/**
 *  171. Excel Sheet Column Number
 */
Object.defineProperty(exports, "__esModule", { value: true });
const titleToNumber = (s) => {
    let total = 0;
    let exp = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        let val = s.charCodeAt(i) - 64;
        total += Math.pow(26, exp) * val;
        exp++;
    }
    return total;
};
exports.default = () => {
    const str = 'AB';
    console.log(titleToNumber(str));
};
