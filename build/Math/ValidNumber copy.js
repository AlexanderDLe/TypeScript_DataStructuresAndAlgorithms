"use strict";
/**
 *  65. Valid Number
 *
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
const isValid = (s) => {
    let exponent = false;
    let sign = false;
    let numFound = false;
    let decimal = false;
    for (let char of s) {
        if (char >= '0' && char <= '9')
            numFound = true;
        else if (char === 'e' || char === 'E') {
            if (exponent || !numFound)
                return false;
            exponent = true;
            sign = false;
            numFound = false;
            decimal = false;
        }
        else if (char === '+' || char === '-') {
            if (numFound || sign || decimal)
                return false;
            sign = true;
        }
        else if (char === '.') {
            if (exponent || decimal)
                return false;
            decimal = true;
        }
        else {
            return false;
        }
    }
    return numFound;
};
exports.default = () => {
    console.log(isValid('0'));
    console.log(isValid('53.5e93'));
    console.log(isValid('-123.456e789'));
    console.log(isValid('99e2.5'));
};
