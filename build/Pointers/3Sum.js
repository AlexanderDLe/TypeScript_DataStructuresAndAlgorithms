"use strict";
/**
 * 15. 3Sum
*/
Object.defineProperty(exports, "__esModule", { value: true });
const Utilities_1 = require("../utils/Utilities");
const threeSum = (arr) => {
    arr = arr.sort((a, b) => a - b);
    const result = [];
    for (let L = 0; L < arr.length - 2; L++) {
        let M = L + 1;
        let R = arr.length - 1;
        let sum = arr[L] + arr[M] + arr[R];
        if (sum === 0) {
            result.push([arr[L], arr[M], arr[R]]);
            while (M < R && arr[M] === arr[M + 1])
                M++;
            while (R > M && arr[R] === arr[R - 1])
                R--;
            M++, R--;
        }
        else if (sum < 0) {
            while (M < R && arr[M] === arr[M + 1])
                M++;
            M++;
        }
        else if (sum > 0) {
            while (R > M && arr[R] === arr[R - 1])
                R--;
            R--;
        }
        while (arr[L] === arr[L + 1])
            L++;
    }
    return result;
};
exports.default = () => {
    let arr1 = [-3, 0, 1, 2, -1, 1, -2];
    let arr2 = [-5, 2, -1, -2, 3];
    (0, Utilities_1.PrintArray)(threeSum(arr1));
    (0, Utilities_1.PrintArray)(threeSum(arr2));
};
