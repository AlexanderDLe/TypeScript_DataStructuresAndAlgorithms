"use strict";
/**
 * 75. Sort Colors
 *
 *  [0  0  1  1  2  2]
 *        LM  2
*/
Object.defineProperty(exports, "__esModule", { value: true });
const sortColors = (nums) => {
    let L = 0;
    let M = 0;
    let R = nums.length - 1;
    while (M <= R) {
        if (nums[M] === 2) {
            [nums[M], nums[R]] = [nums[R], nums[M]];
            R--;
        }
        else if (nums[M] === 0) {
            [nums[M], nums[L]] = [nums[L], nums[M]];
            L++, M++;
        }
        else {
            M++;
        }
    }
};
exports.default = () => {
    let arr = [2, 0, 2, 1, 1, 0, 2, 1, 1, 2, 0];
    console.log(sortColors(arr));
    console.log(arr);
};
