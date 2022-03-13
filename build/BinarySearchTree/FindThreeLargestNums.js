"use strict";
/**
 * Grokking the Coding Interview
*/
Object.defineProperty(exports, "__esModule", { value: true });
const findThreeLargestNums = (array) => {
    let result = [];
    let lowestVal = Infinity;
    for (let num of array) {
        if (result.length < 3) {
            result.push(num);
            lowestVal = Math.min(lowestVal, num);
            continue;
        }
        if (num > lowestVal) {
            for (let i = 0; i < result.length; i++) {
                if (result[i] === lowestVal) {
                    result[i] = num;
                    lowestVal = Math.min(...result);
                    break;
                }
            }
        }
    }
    return result;
};
exports.default = () => {
    let array = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7];
    console.log(findThreeLargestNums(array));
};
