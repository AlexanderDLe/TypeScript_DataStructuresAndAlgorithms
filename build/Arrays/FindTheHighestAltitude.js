"use strict";
/**
 * 1732. Find the Highest Altitude
 */
Object.defineProperty(exports, "__esModule", { value: true });
const largestAltitude = (gain) => {
    let curr = 0;
    let highest = 0;
    for (let change of gain) {
        curr += change;
        highest = Math.max(highest, curr);
    }
    return highest;
};
exports.default = () => {
    const arr = [-4, -3, -2, -1, 4, 3, 2];
    console.log(largestAltitude(arr));
};
