"use strict";
/*

*/
Object.defineProperty(exports, "__esModule", { value: true });
const Utilities_1 = require("../utils/Utilities");
const algoSwap = (arr) => {
    let numSwaps = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j])
                numSwaps++;
        }
    }
    (0, Utilities_1.PrintArray)(arr);
    return numSwaps;
};
exports.default = () => {
    console.log(algoSwap([5, 1, 4, 2]));
};
