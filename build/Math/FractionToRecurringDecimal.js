"use strict";
/**
 *  166. Fraction to Recurring Decimal
 *
 * https://leetcode.com/problems/fraction-to-recurring-decimal/discuss/180004/Python-4-lines-(32ms-beats-100)-with-explanation
 */
Object.defineProperty(exports, "__esModule", { value: true });
const fractionToDecimal = (numerator, denominator) => {
    if (!numerator)
        return '0';
    let str = '';
    // Check for negatives
    if (Math.sign(numerator) !== Math.sign(denominator))
        str += '-';
    const numer = Math.abs(numerator);
    const denom = Math.abs(denominator);
    str += Math.floor(numer / denom);
    let rem = numer % denom;
    if (!rem)
        return str;
    str += '.';
    const map = new Map();
    console.log('str: ', str, ' rem: ', rem, ' map: ', map);
    while (rem !== 0) {
        map.set(rem, str.length);
        rem *= 10;
        console.log('rem *= 10:', rem);
        str += Math.floor(rem / denom);
        console.log('str += Math.floor(rem/denom):', str);
        console.log('denom:', denom);
        rem %= denom;
        console.log('rem %= demom:', rem);
        if (map.has(rem)) {
            console.log('str: ', str, ' rem: ', rem, ' map: ', map);
            const index = map.get(rem);
            return str.slice(0, index) + `(${str.slice(index)})`;
        }
        console.log('str: ', str, ' rem: ', rem, ' map: ', map);
    }
    return str;
};
exports.default = () => {
    // console.log(fractionToDecimal(1, 2));
    // console.log(fractionToDecimal(4, 333));
    console.log(fractionToDecimal(611, 4950));
};
