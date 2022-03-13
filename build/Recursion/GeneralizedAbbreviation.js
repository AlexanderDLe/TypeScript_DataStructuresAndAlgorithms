"use strict";
/**
 * 320. Generalized Abbreviations
 *
 * word
 *
 * ''
 *
 * w | 1    <--- For each char, add both the char and a 1
 *
 * wo | w1 | 11 -> 2 | 1o
 *            ^----------- If two numbers are adjacent, then combine them
 *
 * wor | wo1 | w1r | w11 -> w2 | 2r | 21 -> 3 | 1or | 1o1
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
const generateAbbreviations = (word) => {
    let result = [];
    return result;
};
exports.default = () => {
    let word = 'word';
    console.log(generateAbbreviations(word));
};
