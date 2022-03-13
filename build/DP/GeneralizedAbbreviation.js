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
    if (!word.length)
        return [];
    const lastCharIsNum = (res) => {
        if (res.length === 0)
            return false;
        if (isNaN(Number(res[res.length - 1])))
            return false;
        return true;
    };
    const mergeNums = (res) => {
        let num = Number(res[res.length - 1]) + 1;
        return res.substring(0, res.length - 1) + num;
    };
    let result = [''];
    for (let char of word) {
        let newResult = [];
        for (let res of result) {
            newResult.push(res + char);
            if (lastCharIsNum(res)) {
                newResult.push(mergeNums(res));
            }
            else {
                newResult.push(res + '1');
            }
        }
        result = newResult;
    }
    return result;
};
exports.default = () => {
    let word = 'asdf';
    console.log(generateAbbreviations(word));
};
