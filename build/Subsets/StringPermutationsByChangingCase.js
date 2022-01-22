"use strict";
/**
 * Grokking the Coding Interview
 *
 * BFS Solution. Build subarrs char by char.
 *
 * Time Complexity: O(N*(2^N)). We iterate through str once.
 * For every iteration worst case, we build 2^N substr because
 * every char has a lower case and upper case version.
 *
 * ad52     Since this first char is a letter, we have to use both
 * ^        the lower case and upper case.
 *
 * ['a', 'A']
 *
 *************************************************************
 *
 * ad52     This char is a letter, we have to use both lower + upper case.
 *  ^       We must append both to all existing subarrays.
 *
 * ['a', 'A']
 *
 * ['ad', 'Ad'] + ['aD', 'AD']
 *      d               D
 *
 * ['ad', 'Ad', 'aD', 'AD']
 *
 *************************************************************
 *
 * ad52     This char is a num, we only append to each.
 *   ^
 *
 * ['ad5', 'Ad5', 'aD5', 'AD5']
 *
 *************************************************************
 *
 * ad52     This char is a num, we only append to each.
 *    ^
 *
 * ['ad52', 'Ad52', 'aD52', 'AD52']
 *
 *************************************************************
*/
Object.defineProperty(exports, "__esModule", { value: true });
const stringPermutationsByChangingCase = (str) => {
    const isNum = (char) => { return !isNaN(Number(char)); };
    let result = [];
    if (isNum(str[0])) {
        result.push(str[0]);
    }
    else {
        result.push(str[0].toLowerCase());
        result.push(str[0].toUpperCase());
    }
    for (let i = 1; i < str.length; i++) {
        let curr = str[i];
        if (isNum(curr)) {
            for (let j = 0; j < result.length; j++) {
                result[j] += curr;
            }
        }
        else {
            let newResult = [];
            for (let j = 0; j < result.length; j++) {
                let substr = result[j];
                newResult.push(substr + curr.toLowerCase());
                newResult.push(substr + curr.toUpperCase());
            }
            result = newResult;
        }
    }
    return result;
};
exports.default = () => {
    let str1 = 'ad52';
    let str2 = 'ab7c';
    console.log(stringPermutationsByChangingCase(str1));
    console.log(stringPermutationsByChangingCase(str2));
};
