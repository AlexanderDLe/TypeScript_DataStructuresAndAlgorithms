"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *  35. Search Insert Position
 */
const searchInsert = (nums, target) => {
    let L = 0;
    let R = nums.length - 1;
    while (L < R) {
        let M = Math.floor((L + R) / 2);
        if (target === nums[M])
            return M;
        else if (nums[M] < target)
            L = M + 1;
        else if (nums[M] > target)
            R = M - 1;
    }
    if (nums[L] < target)
        return L + 1;
    else
        return L;
};
exports.default = () => {
    const nums1 = [1, 3, 5, 6];
    const t1 = 5;
    const t2 = 2;
    const t3 = 7;
    const t4 = 0;
    const nums2 = [1];
    const t5 = 0;
    console.log(searchInsert(nums1, t1));
};
