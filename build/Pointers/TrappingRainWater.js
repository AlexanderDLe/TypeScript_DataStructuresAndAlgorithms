"use strict";
/**
 * 42. Trapping Rain Water
*/
Object.defineProperty(exports, "__esModule", { value: true });
const trap = (height) => {
    let totalWater = 0;
    let leftMax = 0;
    let rightMax = 0;
    let L = 0;
    let R = height.length - 1;
    while (L < R) {
        leftMax = Math.max(leftMax, height[L]);
        rightMax = Math.max(rightMax, height[R]);
        let shortestWall = Math.min(leftMax, rightMax);
        let floorVal = 0;
        if (height[L] < height[R]) {
            L++;
            floorVal = height[L];
        }
        else {
            R--;
            floorVal = height[R];
        }
        totalWater += Math.max(0, shortestWall - floorVal);
    }
    return totalWater;
};
exports.default = () => {
    console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
    console.log(trap([4, 2, 0, 3, 2, 5]));
};
