"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Algo Expert
 */
const Utilities_1 = require("../utils/Utilities");
const moveElementToEnd = (array, toMove) => {
    let L = 0;
    let R = array.length - 1;
    while (L < R) {
        if (array[L] === toMove) {
            [array[L], array[R]] = [array[R], array[L]];
            R--;
        }
        else {
            L++;
        }
    }
    return array;
};
exports.default = () => {
    let arr1 = [2, 1, 2, 2, 2, 3, 4, 2];
    (0, Utilities_1.PrintArray)(moveElementToEnd(arr1, 2));
};
