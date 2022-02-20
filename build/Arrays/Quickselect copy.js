"use strict";
/**
 * Algo Expert
 *
 * [7, 5, 2, 6, 4, 8, 9]
 *  P           R  L
 *
 * 1. if a[L] < a[P], then continue L
 * 2. if a[L] > a[P], then swap L and R then decrement R
 * 3. if a[R] < a[P], then save until a[L] > a[P] for swap
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
const quickselect = (a, k) => {
    let target = k - 1;
    const sortAroundPivot = (start, end) => {
        let P = start;
        let L = start + 1;
        let R = end;
        while (L <= R) {
            if (a[L] > a[P] && a[R] < a[P]) {
                [a[L], a[R]] = [a[R], a[L]];
            }
            if (a[L] <= a[P])
                L++;
            if (a[R] >= a[P])
                R--;
        }
        [a[P], a[R]] = [a[R], a[P]];
        if (R === target)
            return a[R];
        if (R > target)
            return sortAroundPivot(start, R - 1);
        if (R < target)
            return sortAroundPivot(R + 1, end);
    };
    return sortAroundPivot(0, a.length - 1);
};
exports.default = () => {
    let array = [8, 5, 2, 9, 7, 6, 3];
    console.log(quickselect(array, 3));
};
