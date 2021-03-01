"use strict";
/**
 *  371. Sum of Two Integers
 */
Object.defineProperty(exports, "__esModule", { value: true });
const getSumB = (a, b) => {
    let carry;
    while (b) {
        carry = a & b;
        a ^= b;
        b = carry << 1;
    }
    return a;
};
const getSum = (a, b) => {
    let carry;
    while (b) {
        console.log(`a: ${a.toString(2)} - b: ${b.toString(2)}`);
        carry = a & b;
        console.log('carry:' + carry.toString(2));
        a ^= b;
        console.log('a:' + a.toString(2));
        b = carry << 1;
        console.log('b:' + b.toString(2) + '\n');
    }
    return a;
};
exports.default = () => {
    console.log(getSum(15, 20));
};
