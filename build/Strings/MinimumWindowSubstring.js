"use strict";
/**
 * 76. Minimum Window Substring
 */
Object.defineProperty(exports, "__esModule", { value: true });
const minWindow = (s, t) => {
    let result = '';
    let L = 0;
    let R = -1;
    let table = {};
    for (const c of t)
        table[c] = (table[c] || 0) + 1;
    let count = Object.keys(table).length;
    while (R < s.length) {
        if (count > 0) {
            R++;
            if (table.hasOwnProperty(s[R]))
                table[s[R]]--;
            if (table[s[R]] === 0)
                count--;
        }
        else {
            let len = R - L + 1;
            if (!result || len < result.length) {
                result = s.slice(L, R + 1);
            }
            do {
                if (table.hasOwnProperty(s[L]))
                    table[s[L]]++;
                if (table[s[L]] > 0)
                    count++;
                L++;
            } while (L < R && !table.hasOwnProperty(s[L]));
        }
    }
    return result;
};
exports.default = () => {
    const S = 'ADOBECODEBANC';
    const T = 'ABC';
    console.log(minWindow(S, T));
};
