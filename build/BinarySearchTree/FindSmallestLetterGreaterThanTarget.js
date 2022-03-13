"use strict";
/**
 * 744. Find Smallest Letter Greater Than Target
*/
Object.defineProperty(exports, "__esModule", { value: true });
const findSmallestLetter = (letters, target) => {
    // Edge case: last character comes before target, then first char is the smallest char > target
    if (target >= letters[letters.length - 1])
        return letters[0];
    let L = 0;
    let R = letters.length - 1;
    let res = '';
    while (L <= R) {
        let M = Math.floor(L + (R - L) / 2);
        let curr = letters[M];
        if (target < curr) {
            res = curr;
            R = M - 1;
        }
        else
            L = M + 1;
    }
    return res;
};
exports.default = () => {
    let letters = ["c", "f"];
    let target = 'a';
    console.log(findSmallestLetter(letters, target));
};
