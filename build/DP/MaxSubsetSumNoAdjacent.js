"use strict";
/**
 * 279. Perfect Squares
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Utilities_1 = require("../utils/Utilities");
const maxSubsetSumNoAdjacentA = (array) => {
    let DP = {};
    const recurse = (index, sum) => {
        if (index >= array.length)
            return sum;
        DP[index] = DP[index] || {};
        if (DP[index][sum])
            return DP[index][sum];
        let newSum = sum + array[index];
        let withoutTake = recurse(index + 1, sum);
        let withTake = recurse(index + 2, newSum);
        DP[index][sum] = Math.max(withTake, withoutTake);
        console.log(DP);
        return DP[index][sum];
    };
    return recurse(0, 0);
};
const maxSubsetSumNoAdjacentB = (array) => {
    if (!array.length)
        return array[0] || 0;
    if (array.length === 2)
        return Math.max(array[0], array[1]);
    let DP = new Array(array.length).fill(0);
    DP[0] = array[0];
    DP[1] = array[1];
    DP[2] = Math.max(array[0] + array[2], array[1]);
    for (let i = 3; i < array.length; i++) {
        let val = array[i];
        let skip = Math.max(val + DP[i - 2], val + DP[i - 3]);
        let noSkip = DP[i - 1];
        DP[i] = Math.max(skip, noSkip);
    }
    (0, Utilities_1.PrintArray)(DP);
    return DP[array.length - 1];
};
const maxSubsetSumNoAdjacent = (array) => {
    if (!array.length)
        return 0;
    if (array.length === 1)
        return array[0];
    let second = array[0];
    let first = Math.max(array[0], array[1]);
    for (let i = 2; i < array.length; i++) {
        let curr = Math.max(first, array[i] + second);
        second = first;
        first = curr;
    }
    return first;
};
exports.default = () => {
    let array = [75, 105, 120, 75, 90, 135];
    console.log(maxSubsetSumNoAdjacent(array));
};
