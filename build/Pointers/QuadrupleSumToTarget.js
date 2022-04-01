"use strict";
/**
 * Grokking the Coding Interview
*/
Object.defineProperty(exports, "__esModule", { value: true });
const quadrupleSumToTarget = (arr, target) => {
    let result = [];
    arr = arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length - 3; i++) {
        for (let j = i + 1; j < arr.length - 2; j++) {
            let L = j + 1;
            let R = arr.length - 1;
            while (L < R) {
                let sum = arr[i] + arr[j] + arr[L] + arr[R];
                if (sum === target) {
                    result.push([arr[i], arr[j], arr[L], arr[R]]);
                    while (arr[L] === arr[L + 1])
                        L++;
                    while (arr[R] === arr[R - 1])
                        R--;
                    L++, R--;
                }
                else if (sum < target) {
                    L++;
                }
                else {
                    R--;
                }
            }
            while (arr[j] === arr[j + 1])
                j++;
        }
        while (arr[i] === arr[i + 1])
            i++;
    }
    return result;
};
exports.default = () => {
    let arr1 = [4, 1, 2, -1, 1, -3], target1 = 1;
    let arr2 = [2, 0, -1, 1, -2, 2], target2 = 2;
    console.log(quadrupleSumToTarget(arr1, target1));
    console.log(quadrupleSumToTarget(arr2, target2));
};
