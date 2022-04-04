"use strict";
/**
 * 1151. Minimum Swaps to Group All 1s Together
 */
Object.defineProperty(exports, "__esModule", { value: true });
const minSwaps = (data) => {
    let totalOnes = 0;
    for (let num of data)
        if (num === 1)
            totalOnes++;
    let L = 0;
    let R = 0;
    let max = 0;
    let total = 0;
    console.log(totalOnes);
    /*
      totalOnes = 3
      total = 1
              R
      1 0 1 0 1
        L
    */
    while (R < data.length) {
        total += data[R++];
        max = Math.max(max, total);
        if (R >= totalOnes) {
            total -= data[L++];
        }
    }
    return totalOnes - max;
};
exports.default = () => {
    console.log(minSwaps([1, 0, 1, 0, 1]));
};
