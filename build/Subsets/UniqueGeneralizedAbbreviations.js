"use strict";
/**
 * Grokking the Coding Interview
 *
 * BFS with object
 *
 * code
 * ^
 * c,                   <-- Adding c
 * 1                    <-- Adding num
 *
 ***************************************
 *
 * code
 *  ^

 * co, 1o,
 * c1, 11 -> 2
 *
 * co, 1o, c1, 2
 *
 ***************************************
 *
 * code
 *   ^
 * cod, 1od, c1d, 2d,
 * co1, 1o1, c11, 3
 *
 * cod, 1od, c1d, 2d, co1, 1o1, c2, 3
 *
 ***************************************
 *
 * code
 *    ^
 * code, 1ode, c1de, 2de, co1e, 1o1e, c2e, 3e
 * cod1, 1od1, c1d1, 2d1, co2, 1o2, c3, 4
 *
 ***************************************
 *
 *
*/
Object.defineProperty(exports, "__esModule", { value: true });
const stringPermutationsByChangingCase = (str) => {
    const lastCharIsNum = (substr) => {
        let lastChar = substr[substr.length - 1];
        return !isNaN(Number(lastChar));
    };
    const incrementLastNumChar = (substr) => {
        let lastNum = Number(substr[substr.length - 1]);
        lastNum++;
        return substr.substring(0, substr.length - 1) + lastNum;
    };
    let result = [];
    result.push('1');
    result.push(str[0]);
    for (let i = 1; i < str.length; i++) {
        let tempResult = [];
        let currChar = str[i];
        for (let j = 0; j < result.length; j++) {
            let currStr = result[j];
            tempResult.push(currStr + currChar);
            if (lastCharIsNum(currStr)) {
                currStr = incrementLastNumChar(currStr);
            }
            else {
                currStr = currStr + '1';
            }
            tempResult.push(currStr);
        }
        result = tempResult;
    }
    return result;
};
exports.default = () => {
    let str1 = 'BAT';
    let str2 = 'code';
    console.log(stringPermutationsByChangingCase(str1));
    console.log(stringPermutationsByChangingCase(str2));
};
