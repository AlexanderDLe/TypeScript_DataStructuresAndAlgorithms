"use strict";
/**
 *  371. Sum of Two Integers
 */
Object.defineProperty(exports, "__esModule", { value: true });
const getSum = (a, b) => {
    let carry;
    while (b) {
        carry = a & b;
        console.log('carry:' + carry);
        a ^= b;
        console.log('a:' + a);
        b = carry << 1;
    }
    return a;
};
exports.default = () => {
    console.log(getSum(15, 20));
};
