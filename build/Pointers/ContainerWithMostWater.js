"use strict";
/**
 * 11. Container With Most Water
*/
Object.defineProperty(exports, "__esModule", { value: true });
const maxArea = (height) => {
    let maxArea = 0;
    let L = 0;
    let R = height.length - 1;
    while (L < R) {
        let Lval = height[L];
        let Rval = height[R];
        // Not R - L + 1 because you don't count the "walls"
        let distance = R - L;
        let currArea = distance * Math.min(Lval, Rval);
        maxArea = Math.max(maxArea, currArea);
        if (Lval <= Rval)
            L++;
        else
            R--;
    }
    return maxArea;
};
exports.default = () => {
    let arr = [1, 8, 6, 2, 5, 4, 8, 3, 7];
    console.log(maxArea(arr));
};
