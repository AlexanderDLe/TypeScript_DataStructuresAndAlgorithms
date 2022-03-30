"use strict";
/**
 *  1762. Buildings with an Ocean View
 */
Object.defineProperty(exports, "__esModule", { value: true });
const findBuildings = (heights) => {
    let result = [];
    let max = 0;
    for (let i = heights.length - 1; i >= 0; i--) {
        let height = heights[i];
        if (height > max) {
            result.unshift(i);
            max = height;
        }
    }
    return result;
};
exports.default = () => {
    console.log(findBuildings([4, 2, 3, 1]));
    console.log(findBuildings([4, 3, 2, 1]));
    console.log(findBuildings([1, 3, 2, 4]));
};
