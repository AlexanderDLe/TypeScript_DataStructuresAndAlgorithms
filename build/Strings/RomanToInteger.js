'use strict';
/**
 *  13. Roman To isInteger
 * 
    If the current integer is smaller than the integer to its right,
    then simply subtract the smaller integer - otherwise, add.
 */
Object.defineProperty(exports, '__esModule', { value: true });
const romanToInt = s => {
    const T = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    let total = T[s[s.length - 1]];
    for (let i = s.length - 2; i >= 0; i--) {
        if (T[s[i]] < T[s[i + 1]]) total -= T[s[i]];
        else total += T[s[i]];
    }
    return total;
};
exports.default = () => {
    const input = 'XXIV';
    console.log(romanToInt(input));
};
