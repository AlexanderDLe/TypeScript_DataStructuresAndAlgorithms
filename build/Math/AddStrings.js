"use strict";
/**
 *  415. Add Strings
 *
 * 199
 * 123
 *
 * 12
 * c = 1
 * s = 2
 *
 * res = [2]
 -------------------------------------
 *  v
 * 199
 * 123
 *
 * c = 1
 * s = 12
 *   = 13
 *
 * c = 1
 * s = 3
 *
 * res = [3,2]
 *
 -------------------------------------

 * v
 * 199
 * 123
 *
 * c = 1
 * s = 2
 *   = 3
 *
 * c = 0
 * s = 3
 *
 * res = [3,3,2]
 *
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
const addStrings = (num1, num2) => {
    let p = num1.length - 1;
    let q = num2.length - 1;
    let carry = 0;
    let res = [];
    while (p >= 0 || q >= 0 || carry) {
        let pVal = Number(num1[p]) || 0;
        let qVal = Number(num2[q]) || 0;
        let sum = pVal + qVal + carry;
        carry = Math.floor(sum / 10);
        sum = sum % 10;
        p--, q--;
        res.unshift(sum.toString());
    }
    return res.join('');
};
exports.default = () => {
    console.log('hi');
    console.log(addStrings("11", "123"));
    console.log(addStrings("456", "77"));
    console.log(addStrings("0", "0"));
};
