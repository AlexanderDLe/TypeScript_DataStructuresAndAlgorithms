"use strict";
/**
 *  344. Reverse String
 */
Object.defineProperty(exports, "__esModule", { value: true });
const reverseString = (s) => {
    let L = 0;
    let R = s.length - 1;
    while (L < R) {
        [s[L], s[R]] = [s[R], s[L]];
        L++;
        R--;
    }
    console.log(s);
};
exports.default = () => {
    const s = ['h', 'e', 'l', 'l', 'o'];
    reverseString(s);
};
