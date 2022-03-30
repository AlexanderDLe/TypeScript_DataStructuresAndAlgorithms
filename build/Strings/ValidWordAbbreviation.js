"use strict";
/**
 * 408. Valid Word Abbreviation
 * p
 * abc
 * q
 * 2c
 *************
 *
 * num = 2
 *  q
 * 2c
 *
 * while num > 0
 *   p
 * abc
 *  q
 * 2c
 *
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
const isValid = (word, abbr) => {
    const isNum = (char) => {
        return !isNaN(Number(char));
    };
    let p = 0;
    let q = 0;
    while (p < word.length && q < abbr.length) {
        if (word[p] === abbr[q]) {
            p++, q++;
            continue;
        }
        if (abbr[q] === '0')
            return false;
        let num = 0;
        let numStr = '';
        while (isNum(abbr[q])) {
            numStr += abbr[q];
            q++;
        }
        if (numStr.length)
            num = Number(numStr);
        while (num > 0) {
            p++, num--;
        }
        if (word[p] !== abbr[q])
            return false;
    }
    return p === word.length && q === abbr.length;
};
exports.default = () => {
    console.log(isValid("internationalization", "i12iz4n"));
    console.log(isValid("apple", "a2e"));
    console.log(isValid("substitution", "s010n"));
};
