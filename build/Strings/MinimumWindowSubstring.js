"use strict";
/**
 * 76. Minimum Window Substring
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Utilities_1 = require("../utils/Utilities");
const minWindow = (s, t) => {
    let result = '';
    let L = 0;
    let R = -1;
    // Initialize Hash Map
    let map = {};
    for (const c of t)
        map[c] = (map[c] || 0) + 1;
    let count = Object.keys(map).length;
    while (R < s.length) {
        if (count > 0) {
            R++;
            if (map.hasOwnProperty(s[R]))
                map[s[R]]--;
            if (map[s[R]] === 0)
                count--;
        }
        else {
            let len = R - L + 1;
            if (!result || len < result.length) {
                result = s.slice(L, R + 1);
            }
            if (map.hasOwnProperty(s[L]))
                map[s[L]]++;
            if (map[s[L]] > 0)
                count++;
            L++;
        }
    }
    Utilities_1.PrintObject(map);
    return result;
};
exports.default = () => {
    const S = 'aa';
    const T = 'aa';
    console.log(minWindow(S, T));
};
