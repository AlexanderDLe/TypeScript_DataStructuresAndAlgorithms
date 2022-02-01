"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validateSubsequence = (array, sequence) => {
    let S = 0;
    for (let A = 0; A < array.length; A++) {
        if (array[A] === sequence[S])
            S++;
    }
    return S === sequence.length;
};
exports.default = () => {
    let nums = [5, 1, 22, 25, 6, -1, 8, 10];
    let sequence = [1, 6, -1, 10];
    console.log(validateSubsequence(nums, sequence));
};
