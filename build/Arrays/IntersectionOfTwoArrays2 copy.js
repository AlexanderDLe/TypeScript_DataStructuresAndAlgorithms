"use strict";
/**
 *  350. Intersection of Two Arrays II
 */
Object.defineProperty(exports, "__esModule", { value: true });
const intersect = (nums1, nums2) => {
    let res = [];
    let map = {};
    for (let num of nums1) {
        map[num] = (map[num] || 0) + 1;
    }
    for (let num of nums2) {
        if (map[num] && map[num] > 0) {
            res.push(num);
            map[num]--;
        }
    }
    return res;
};
exports.default = () => {
    let nums1 = [4, 9, 5];
    let nums2 = [9, 4, 9, 8, 4];
    console.log(intersect(nums1, nums2));
};
