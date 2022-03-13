"use strict";
/**
 * 3. Longest Repeating Substring Without Repeating Characters
 *
*/
Object.defineProperty(exports, "__esModule", { value: true });
const longestRepeat = (s) => {
    let map = {};
    let maxSubstr = 0;
    let L = 0;
    for (let R = 0; R < s.length; R++) {
        let Rchar = s[R];
        map[Rchar] = (map[Rchar] || 0) + 1;
        while (map[Rchar] > 1) {
            let Lchar = s[L];
            map[Lchar]--;
            L++;
        }
        maxSubstr = Math.max(R - L + 1, maxSubstr);
    }
    return maxSubstr;
};
exports.default = () => {
    let s = "abcabcbb";
    let s2 = "bbbbb";
    let s3 = "pwwkew";
    console.log(longestRepeat(s));
    console.log(longestRepeat(s2));
    console.log(longestRepeat(s3));
};
