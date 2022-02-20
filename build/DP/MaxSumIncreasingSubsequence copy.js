"use strict";
/**
 * AlgoExpert
 *
 *
 * 1  5  2  4
 *
 * 1  6  6
 *
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
const maxSumIncreasingSubsequence = (array) => {
    let DP = array.map((num, i) => {
        return [num, []];
    });
    DP[0] = [array[0], [array[0]]];
    let max = DP[0];
    for (let i = 1; i < array.length; i++) {
        let temp = [array[i], [array[i]]];
        for (let j = 0; j < i; j++) {
            if (array[i] > array[j]) {
                if (DP[j][0] + array[i] > temp[0]) {
                    temp = [array[i] + DP[j][0], [...DP[j][1]]];
                    temp[1].push(array[i]);
                }
            }
        }
        DP[i] = temp;
        if (temp[0] > max[0])
            max = temp;
    }
    return max;
};
exports.default = () => {
    const array = [10, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    console.log(maxSumIncreasingSubsequence(array));
};
