"use strict";
/**
 * 11. Container With Most Water
 */
Object.defineProperty(exports, "__esModule", { value: true });
const maxArea = (height) => {
    let result = 0;
    let L = 0;
    let R = height.length - 1;
    while (L < R) {
        let lowerHeight = Math.min(height[L], height[R]);
        let area = lowerHeight * (R - L);
        result = Math.max(result, area);
        if (height[L] < height[R])
            L++;
        else
            R--;
    }
    return result;
};
const maxAreaB = (height) => {
    let L = 0;
    let R = height.length - 1;
    let result = 0;
    while (L < R) {
        let min = Math.min(height[L], height[R]);
        result = Math.max(result, min * (R - L));
        if (height[L] <= height[R])
            L++;
        else
            R--;
    }
    return result;
};
exports.default = () => {
    const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
    console.log(maxArea(height));
};
