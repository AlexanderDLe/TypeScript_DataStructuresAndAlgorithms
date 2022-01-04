"use strict";
/**
 * Grokking the Coding Interview
 *
*/
Object.defineProperty(exports, "__esModule", { value: true });
const LongestSubstrWithSameLettersAfterReplace = (str, k) => {
    let maxLen = 0;
    let map = [];
    let maxRepeatingChar = 0;
    let L = 0;
    for (let R = 0; R < str.length; R++) {
        let Rchar = str[R];
        map[Rchar] = (map[Rchar] || 0) + 1;
        maxRepeatingChar = Math.max(maxRepeatingChar, map[Rchar]);
        let currLen = R - L + 1;
        let repeatsUsed = currLen - maxRepeatingChar;
        if (repeatsUsed > k) {
            let Lchar = str[L];
            map[Lchar]--;
            L++;
        }
        maxLen = Math.max(maxLen, R - L + 1);
    }
    return maxLen;
};
exports.default = () => {
    let str1 = 'aabccbb';
    let str2 = 'abbcb';
    let str3 = 'abccde';
    console.log(LongestSubstrWithSameLettersAfterReplace(str1, 2));
    console.log(LongestSubstrWithSameLettersAfterReplace(str2, 1));
    console.log(LongestSubstrWithSameLettersAfterReplace(str3, 1));
};
