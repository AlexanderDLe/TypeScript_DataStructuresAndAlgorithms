"use strict";
/**
 *  152. Maximum Product Subarray
 */
Object.defineProperty(exports, "__esModule", { value: true });
const maxProduct = (nums) => {
    let r = nums[0];
    for (let i = 1, imax = r, imin = r; i < nums.length; i++) {
        console.log(`A: num: ${nums[i]}, imax: ${imax}, imin: ${imin}, r: ${r}`);
        // multiplied by a negative makes big number smaller, small number bigger
        // so we redefine the extremums by swapping them
        if (nums[i] < 0) {
            let temp = imax;
            imax = imin;
            imin = temp;
        }
        // max/min product for the current number is either the current number itself
        // or the max/min by the previous number times the current one
        imax = Math.max(nums[i], imax * nums[i]);
        imin = Math.min(nums[i], imin * nums[i]);
        // the newly computed max value is a candidate for our global result
        r = Math.max(r, imax);
        console.log(`B: num: ${nums[i]}, imax: ${imax}, imin: ${imin}, r: ${r}`);
    }
    return r;
};
exports.default = () => {
    const nums = [2, -5, -2, -4, 3];
    console.log(maxProduct(nums));
};
