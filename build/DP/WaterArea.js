"use strict";
/**
 * AlgoExpert
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
const waterArea = (A) => {
    let L = 0;
    let R = A.length - 1;
    let sum = 0;
    let Lwall = A[L];
    let Rwall = A[R];
    const minWall = () => Math.min(Lwall, Rwall);
    while (L < R) {
        if (A[L] < A[R]) {
            L++;
            if (A[L] >= Lwall)
                Lwall = A[L];
            else
                sum += minWall() - A[L];
        }
        else {
            R--;
            if (A[R] >= Rwall)
                Rwall = A[R];
            else
                sum += minWall() - A[R];
        }
    }
    return sum;
};
exports.default = () => {
    const array = [0, 8, 0, 0, 5, 0, 0, 10, 0, 0, 1, 1, 0, 3];
    console.log(waterArea(array));
};
