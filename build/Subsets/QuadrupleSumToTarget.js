"use strict";
/**
 * Grokking the Coding Interview
*/
Object.defineProperty(exports, "__esModule", { value: true });
const quadrupleSumToTarget = (arr, target) => {
    let result = [];
    arr = arr.sort((a, b) => a - b);
    for (let L = 0; L < arr.length - 3; L++) {
        for (let LM = L + 1; LM < arr.length - 2; LM++) {
            let RM = LM + 1;
            let R = arr.length - 1;
            while (RM < R) {
                let sum = arr[L] + arr[LM] + arr[RM] + arr[R];
                if (sum === target) {
                    result.push([arr[L], arr[LM], arr[RM], arr[R]]);
                    while (arr[RM] === arr[RM + 1])
                        RM++;
                    while (arr[R] === arr[R - 1])
                        R--;
                    RM++, R--;
                }
                else if (sum < target) {
                    RM++;
                }
                else {
                    R--;
                }
            }
            while (arr[LM] === arr[LM + 1])
                LM++;
        }
        while (arr[L] === arr[L + 1])
            L++;
    }
    return result;
};
exports.default = () => {
    let arr1 = [4, 1, 2, -1, 1, -3], target1 = 1;
    let arr2 = [2, 0, -1, 1, -2, 2], target2 = 2;
    console.log(quadrupleSumToTarget(arr1, target1));
    console.log(quadrupleSumToTarget(arr2, target2));
};
[0, 0, 1, 1, 2];
