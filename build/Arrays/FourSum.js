"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 */
const fourSum = (array, targetSum) => {
    let result = [];
    array = array.sort((a, b) => a - b);
    for (let i = 0; i < array.length - 3; i++) {
        for (let j = i + 1; j < array.length - 2; j++) {
            let L = j + 1;
            let R = array.length - 1;
            while (L < R) {
                let sum = array[i] + array[j] + array[L] + array[R];
                if (sum === targetSum) {
                    result.push([array[i], array[j], array[L], array[R]]);
                    while (array[L] === array[L + 1])
                        L++;
                    while (array[R] === array[R - 1])
                        R--;
                    L++, R--;
                }
                else if (sum < targetSum) {
                    L++;
                }
                else if (sum > targetSum) {
                    R--;
                }
            }
            while (array[j] === array[j + 1])
                j++;
        }
        while (array[i] === array[i + 1])
            i++;
    }
    return result;
};
exports.default = () => {
    let array = [7, 6, 4, -1, 1, 2];
    let targetSum = 16;
    // console.log(fourSum(array, targetSum));
    console.log(fourSum([2, 2, 2, 2, 2], 8));
};
