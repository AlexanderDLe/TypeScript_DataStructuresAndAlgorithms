"use strict";
/**
 */
Object.defineProperty(exports, "__esModule", { value: true });
const longestSubstringWithoutDuplication = (string) => {
    let set = new Set();
    let result = '';
    let L = 0;
    for (let R = 0; R < string.length; R++) {
        let Rchar = string[R];
        while (set.has(Rchar)) {
            let Lchar = string[L];
            set.delete(Lchar);
            L++;
        }
        if (R - L + 1 > result.length) {
            result = string.substring(L, R + 1);
        }
        set.add(Rchar);
    }
    return result;
};
exports.default = () => {
    const string = "clementisacap";
    console.log(longestSubstringWithoutDuplication(string));
};
