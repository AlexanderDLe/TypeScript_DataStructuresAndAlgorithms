"use strict";
/**
 * 567. Permutation in String
*/
Object.defineProperty(exports, "__esModule", { value: true });
const PermutationInAString = (s1, s2) => {
    if (s1.length > s2.length)
        return false;
    let map = {};
    for (let char of s1)
        map[char] = (map[char] || 0) + 1;
    let charCount = Object.keys(map).length;
    let L = 0;
    for (let R = 0; R < s2.length; R++) {
        let Rchar = s2[R];
        map[Rchar]--;
        if (map[Rchar] === 0)
            charCount--;
        if (charCount === 0)
            return true;
        if (R + 1 >= s1.length) {
            let Lchar = s2[L];
            map[Lchar]++;
            if (map[Lchar] === 1)
                charCount++;
            L++;
        }
    }
    return false;
};
exports.default = () => {
    let str1 = 'oidbcaf';
    let pattern1 = 'abc';
    let str2 = 'odicf';
    let pattern2 = 'dc';
    let str3 = 'bcdxabcdy';
    let pattern3 = 'bcdyabcdx';
    let str4 = 'aaacb';
    let pattern4 = 'abc';
    console.log(PermutationInAString(pattern1, str1));
    console.log(PermutationInAString(pattern2, str2));
    console.log(PermutationInAString(pattern3, str3));
    console.log(PermutationInAString(pattern4, str4));
};
