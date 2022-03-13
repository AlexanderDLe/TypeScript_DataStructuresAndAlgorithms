"use strict";
/**
 * 15. 3Sum
*/
Object.defineProperty(exports, "__esModule", { value: true });
const Utilities_1 = require("../utils/Utilities");
const threeSum = (nums) => {
    nums = nums.sort((a, b) => a - b);
    const result = [];
    for (let L = 0; L < nums.length - 2; L++) {
        let M = L + 1;
        let R = nums.length - 1;
        while (M < R) {
            let sum = nums[L] + nums[M] + nums[R];
            if (sum === 0) {
                result.push([nums[L], nums[M], nums[R]]);
                while (M < R && nums[M] === nums[M + 1])
                    M++;
                while (R > M && nums[R] === nums[R - 1])
                    R--;
                M++, R--;
            }
            else if (sum < 0) {
                M++;
            }
            else if (sum > 0) {
                R--;
            }
        }
        while (nums[L] === nums[L + 1])
            L++;
    }
    return result;
};
exports.default = () => {
    let arr1 = [-3, 0, 1, 2, -1, 1, -2];
    let arr2 = [-5, 2, -1, -2, 3];
    (0, Utilities_1.PrintArray)(threeSum(arr1));
    (0, Utilities_1.PrintArray)(threeSum(arr2));
    (0, Utilities_1.PrintArray)(threeSum([-1, 0, 1, 2, -1, -4]));
};
