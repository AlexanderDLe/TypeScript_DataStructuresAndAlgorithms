"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const monotonicArray = (array) => {
    if (array.length < 2)
        return true;
    let shouldAscend = array[0] <= array[array.length - 1];
    for (let i = 0; i < array.length - 1; i++) {
        if (shouldAscend && array[i] > array[i + 1])
            return false;
        if (!shouldAscend && array[i] < array[i + 1])
            return false;
    }
    return true;
};
exports.default = () => {
    let arr1 = [-1, -5, -10, -1100, -4500];
    console.log(monotonicArray(arr1));
};
