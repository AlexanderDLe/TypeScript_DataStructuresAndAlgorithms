"use strict";
/**
 * 784. Letter Case Permutation
 */
Object.defineProperty(exports, "__esModule", { value: true });
const letterCasePermutation = (str) => {
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
    const str1 = "a1b2";
    console.log(letterCasePermutation(str1));
};
