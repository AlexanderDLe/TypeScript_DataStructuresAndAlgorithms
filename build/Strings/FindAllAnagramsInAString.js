"use strict";
/**
 * 438. Find All Anagrams In A String
 *
 * Similar to palindromic substrings.
 *
 * We use a map to keep track of how many values are obtained/required for each
 * letter in p. We then create a sliding window of size p.length to keep track
 * of current values size.
 *
 * We use a count variable to keep track of how many more values are
 * required to have an anagram. If it reaches 0, we have an anagram.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Utilities_1 = require("../utils/Utilities");
const findAnagrams = (s, p) => {
    const result = [];
    const map = {};
    for (let c of p)
        map[c] = (map[c] || 0) + 1;
    let count = Object.keys(map).length;
    let L = 0;
    let R = 0;
    while (R < p.length) {
        if (s[R] in map) {
            map[s[R]]--;
            if (map[s[R]] === 0)
                count--;
        }
        R++;
    }
    while (R <= s.length) {
        if (count === 0)
            result.push(L);
        if (s[L] in map) {
            map[s[L]]++;
            if (map[s[L]] === 1)
                count++;
        }
        L++;
        if (s[R] in map) {
            map[s[R]]--;
            if (map[s[R]] === 0)
                count--;
        }
        R++;
        (0, Utilities_1.PrintObject)(map);
        console.log(count);
    }
    return result;
};
exports.default = () => {
    const s = 'baa';
    const p = 'aa';
    (0, Utilities_1.PrintArray)(findAnagrams(s, p));
};
