"use strict";
/**
 * AlgoExpert
 */
Object.defineProperty(exports, "__esModule", { value: true });
const kadanesAlgorithmMyAttempt = (array) => {
    let maxSum = -Infinity;
    let currSum = 0;
    let L = 0;
    let R = 0;
    while (R < array.length) {
        currSum += array[R];
        maxSum = Math.max(maxSum, currSum);
        R++;
        while (currSum < 0) {
            currSum -= array[L];
            L++;
        }
    }
    return maxSum;
};
const kadanesAlgorithm = (array) => {
    let maxEndingHere = array[0];
    let maxSoFar = array[0];
    for (let i = 1; i < array.length; i++) {
        const num = array[i];
        maxEndingHere = Math.max(num, maxEndingHere + num);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
    return maxSoFar;
};
exports.default = () => {
    const nums = [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4];
    console.log(kadanesAlgorithm(nums));
};
