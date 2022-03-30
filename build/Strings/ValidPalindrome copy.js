"use strict";
/**
 */
Object.defineProperty(exports, "__esModule", { value: true });
const isPalindromeA = (s) => {
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
const isPalindrome = (s) => {
    let L = 0;
    let R = s.length - 1;
    while (L < R) {
        if (s[L] !== s[R])
            return false;
        L++, R--;
    }
    return true;
};
exports.default = () => {
    const s = "racecar";
    console.log(isPalindrome(s));
};
