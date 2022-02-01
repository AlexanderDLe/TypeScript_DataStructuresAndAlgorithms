"use strict";
/**
 */
Object.defineProperty(exports, "__esModule", { value: true });
const longestPalindromicSubstring = (string) => {
    let result = '';
    const isPalindrome = (L, R) => {
        if (string[L] === string[R]) {
            let len = R - L + 1;
            if (len > result.length) {
                result = string.substring(L, R + 1);
            }
            return true;
        }
        return false;
    };
    for (let i = 0; i < string.length - Math.floor(result.length / 2); i++) {
        // Run odd palindrome
        let L = i;
        let R = i;
        while (L >= 0 && R <= string.length - 1) {
            let isValid = isPalindrome(L, R);
            if (isValid)
                L--, R++;
            else
                break;
        }
        // Run even palindrome
        if (i === string.length - 1)
            break;
        L = i;
        R = i + 1;
        while (L >= 0 && R <= string.length - 1) {
            let isValid = isPalindrome(L, R);
            if (isValid)
                L--, R++;
            else
                break;
        }
    }
    return result;
};
exports.default = () => {
    const s = "abaxyzzyxf";
    console.log(longestPalindromicSubstring(s));
};
