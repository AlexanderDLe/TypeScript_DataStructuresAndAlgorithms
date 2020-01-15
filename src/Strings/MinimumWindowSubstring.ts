/**
 * 76. Minimum Window Substring
 */

type Tracker = {
    [key: string]: number;
};
const minWindow = (s: string, t: string): string => {
    let result = '';
    let L = 0;
    let R = -1;
    let table: Tracker = {};
    for (const c of t) table[c] = (table[c] || 0) + 1;
    let count = Object.keys(table).length;
    while (R < s.length) {
        if (count > 0) {
            R++;
            if (table.hasOwnProperty(s[R])) table[s[R]]--;
            if (table[s[R]] === 0) count--;
        } else {
            let len = R - L + 1;
            if (!result || len < result.length) {
                result = s.slice(L, R + 1);
            }
            do {
                if (table.hasOwnProperty(s[L])) table[s[L]]++;
                if (table[s[L]] > 0) count++;
                L++;
            } while (L < R && !table.hasOwnProperty(s[L]));
        }
    }
    return result;
};

export default () => {
    const S = 'ADOBECODEBANC';
    const T = 'ABC';
    console.log(minWindow(S, T));
};
