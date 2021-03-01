"use strict";
/**
 * 1534. Count Good Triplets
 */
Object.defineProperty(exports, "__esModule", { value: true });
const countGoodTriplets = (arr, a, b, c) => {
    let count = 0;
    for (let L = 0; L < arr.length - 2; L++) {
        for (let M = L + 1; M < arr.length - 1; M++) {
            if (Math.abs(arr[L] - arr[M]) > a)
                continue;
            for (let R = M + 1; R < arr.length; R++) {
                if (Math.abs(arr[M] - arr[R]) > b)
                    continue;
                if (Math.abs(arr[L] - arr[R]) > c)
                    continue;
                count++;
            }
        }
    }
    return count;
};
exports.default = () => {
    const arr = [3, 0, 1, 1, 9, 7];
    const a = 7;
    const b = 2;
    const c = 3;
    console.log(countGoodTriplets(arr, a, b, c));
};
