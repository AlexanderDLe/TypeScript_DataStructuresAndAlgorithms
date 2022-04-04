"use strict";
/**
 * 438. Find All Anagrams in a String
 *
*/
Object.defineProperty(exports, "__esModule", { value: true });
const minWindow = (s, p) => {
    const result = [];
    const map = {};
    for (let char of p)
        map[char] = (map[char] || 0) + 1;
    let count = Object.keys(map).length;
    let L = 0;
    let R = 0;
    while (R < s.length) {
        let Rval = s[R++];
        if (Rval in map) {
            map[Rval]--;
            if (map[Rval] === 0)
                count--;
        }
        if (!count)
            result.push(L);
        // Mistake: R is already incremented earlier for the next iteration.
        // No need to subtract by 1 (R - 1) for this condition.
        // L
        // cbae
        //    R <---  Once Rval is assigned, if already R increments forward
        //            and already meets the condition R === p.length.
        if (R >= p.length) {
            let Lval = s[L++];
            if (Lval in map) {
                map[Lval]++;
                if (map[Lval] === 1)
                    count++;
            }
        }
    }
    return result;
};
exports.default = () => {
    console.log(minWindow("cbaebabacd", "abc"));
    console.log(minWindow("abab", "ab"));
    // console.log(minWindow("a", 'aa'));
};
