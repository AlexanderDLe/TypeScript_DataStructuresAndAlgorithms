"use strict";
/**
 * 162. Find Peak Element
  
*/
Object.defineProperty(exports, "__esModule", { value: true });
const findPeakElement = (nums) => {
    let L = 0;
    let R = nums.length - 1;
    while (L <= R) {
        let M = Math.floor(L + (R - L) / 2);
        let curr = nums[M];
        let prev = nums[M - 1] || -Infinity;
        let next = nums[M + 1] || -Infinity;
        if (curr > prev && curr > next)
            return M;
        if (curr > prev && curr < next)
            L = M + 1;
        else
            R = M - 1;
    }
    return -1;
};
exports.default = () => {
    let arr1 = [1, 2, 3, 1];
    let arr2 = [1, 2, 1, 3, 5, 6, 4];
    let arr3 = [1];
    console.log(findPeakElement(arr1));
    console.log(findPeakElement(arr2));
    console.log(findPeakElement(arr3));
};
