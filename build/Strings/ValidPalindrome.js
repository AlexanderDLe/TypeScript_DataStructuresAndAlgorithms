"use strict";
/**
 *  242. Valid Anagram
 */
Object.defineProperty(exports, "__esModule", { value: true });
const isPalindrome = (s) => {
    s = s.toLowerCase();
    s = s.replace(/[^a-z0-9]/g, '');
    console.log(s);
    let L = 0;
    let R = s.length - 1;
    while (L < R) {
        if (s[L] != s[R])
            return false;
        L++, R--;
    }
    return true;
};
exports.default = () => {
    const s = "9A man, a plan, a canal: Panama9";
    console.log(isPalindrome(s));
};
