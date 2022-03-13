"use strict";
/**
 * AlgoExpert
 *
 * ''
 *
 * 'a' 'A'
 *
 * 'a1' 'A1'
 *
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
const longestCommonSubsequence = (str) => {
    let result = [''];
    for (let char of str) {
        let newResult = [];
        if (!isNaN(Number(char))) {
            for (let i = 0; i < result.length; i++) {
                result[i] += char;
            }
            continue;
        }
        let lowerCase = char.toLowerCase();
        let upperCase = char.toUpperCase();
        for (let substr of result) {
            newResult.push(substr + lowerCase);
            newResult.push(substr + upperCase);
        }
        result = [...newResult];
    }
    return result;
};
exports.default = () => {
    const str1 = "e";
    console.log(longestCommonSubsequence(str1));
};
