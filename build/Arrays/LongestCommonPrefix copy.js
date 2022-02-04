"use strict";
/**
 *  14. Longest Commong Prefix
 */
Object.defineProperty(exports, "__esModule", { value: true });
const longestCommonPrefix = (strs) => {
    if (!strs.length)
        return '';
    let res = '';
    let i = 0;
    while (i < strs[0].length) {
        let valid = true;
        let char = strs[0][i];
        for (let j = 1; j < strs.length; j++) {
            if (char != strs[j][i]) {
                valid = false;
                break;
            }
        }
        if (valid)
            res += char;
        else
            break;
        i++;
    }
    return res;
};
exports.default = () => {
    const strs = ["flower", "flow", "flight"];
    console.log(longestCommonPrefix(strs));
};
