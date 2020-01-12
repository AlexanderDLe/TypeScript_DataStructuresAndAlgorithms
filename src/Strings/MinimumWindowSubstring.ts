/**
 * 76. Minimum Window Substring
 */

import { PrintObject } from '../utils/Utilities';

type Tracker = {
    [key: string]: number;
};
const minWindow = (s: string, t: string): string => {
    let result = '';
    let L = 0;
    let R = -1;
    let map: Tracker = {};
    for (const c of t) map[c] = (map[c] || 0) + 1;
    let count = Object.keys(map).length;
    while (R < s.length) {
        if (count > 0) {
            R++;
            if (map.hasOwnProperty(s[R])) map[s[R]]--;
            if (map[s[R]] === 0) count--;
        } else {
            let len = R - L + 1;
            if (!result || len < result.length) {
                result = s.slice(L, R + 1);
            }
            let c = 0;
            do {
                if (map.hasOwnProperty(s[L])) map[s[L]]++;
                if (map[s[L]] > 0) count++;
                L++;
            } while ((L < R && !map.hasOwnProperty(s[L])) || map[s[L]] < 1);
        }
    }
    return result;
};

export default () => {
    const S = 'aaflslflsldkalskaaa';
    const T = 'aaa';
    console.log(minWindow(S, T));
};
