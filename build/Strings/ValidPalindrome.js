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
const isPalindromeB = (s) => {
    let L = 0;
    let R = s.length - 1;
    while (L < R) {
        if (s[L] !== s[R])
            return false;
        L++, R--;
    }
    return true;
};
const isPalindrome = (s) => {
    s = s.toLowerCase();
    const isValid = (char) => {
        let Lstart = 'a'.charCodeAt(0);
        let Lend = 'z'.charCodeAt(0);
        let Nstart = '0'.charCodeAt(0);
        let Nend = '9'.charCodeAt(0);
        if (char.charCodeAt(0) >= Lstart && char.charCodeAt(0) <= Lend)
            return true;
        if (char.charCodeAt(0) >= Nstart && char.charCodeAt(0) <= Nend)
            return true;
        return false;
    };
    let L = 0;
    let R = s.length - 1;
    while (L < R) {
        // Check for bounds
        while (L < s.length && !isValid(s[L]))
            L++;
        while (R >= 0 && !isValid(s[R]))
            R--;
        if (L > R)
            break;
        if (s[L] !== s[R])
            return false;
        L++, R--;
    }
    return true;
};
exports.default = () => {
    const s = "racecar";
    console.log(isPalindrome(s));
    console.log(isPalindrome(' '));
    console.log(isPalindrome('a man a plan a canal panamaa'));
    console.log(isPalindrome('.,'));
    console.log(isPalindrome('0P'));
};
