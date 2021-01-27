"use strict";
/**
 *  171. Excel Sheet Column Number
 */
Object.defineProperty(exports, "__esModule", { value: true });
const plusOne = (digits) => {
    let carry = 1;
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] === 9) {
            digits[i] = 0;
        }
        else {
            digits[i] += 1;
            carry = 0;
            break;
        }
    }
    if (carry) {
        digits.unshift(1);
    }
    return digits;
};
exports.default = () => {
    let digits = [9, 9, 9];
    console.log(plusOne(digits));
};
