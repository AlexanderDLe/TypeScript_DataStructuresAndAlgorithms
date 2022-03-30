"use strict";
/**
 * 187. Repeated DNA Sequence
 */
Object.defineProperty(exports, "__esModule", { value: true });
const findRepeated = (s) => {
    const result = [];
    const map = {};
    let L = 0;
    let R = 10;
    while (R < s.length) {
        let substr = s.substring(L, R);
        map[substr] = (map[substr] || 0) + 1;
        if (map[substr] === 2)
            result.push(substr);
        R++, L++;
    }
    return result;
};
exports.default = () => {
    console.log(findRepeated("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"));
    console.log(findRepeated("AAAAAAAAAAAAA"));
};
