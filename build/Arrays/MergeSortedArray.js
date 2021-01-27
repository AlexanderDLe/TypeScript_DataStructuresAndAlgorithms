"use strict";
/**
 * 88. Merge Sorted Array
 */
Object.defineProperty(exports, "__esModule", { value: true });
const mergeA = (nums1, m, nums2, n) => {
    while (nums1.length > m)
        nums1.pop();
    while (nums2.length > n)
        nums2.pop();
    nums1.push(...nums2);
    nums1.sort((a, b) => a - b);
    console.log(nums1);
};
const mergeB = (nums1, m, nums2, n) => {
    while (nums1.length > m)
        nums1.pop();
    while (nums2.length > n)
        nums2.pop();
    let p1 = 0;
    let p2 = 0;
    while (p2 < n) {
        // if p2 is greater than p1, then increment p1
        if (nums2[p2] > nums1[p1])
            p1++;
        // if p2 is less than or equal to p1, then insert
        else if (nums2[p2] <= nums1[p1]) {
            nums1.splice(p1, 0, nums2[p2]);
            p1++;
            p2++;
        }
        if (p1 >= nums1.length) {
            while (p2 < n) {
                nums1.push(nums2[p2++]);
            }
        }
    }
};
exports.default = () => {
    let nums1 = [-10, -1, -5, 1, 2, 3, 0, 0, 0];
    let m = 5;
    let nums2 = [2, 5, 6];
    let n = 3;
    mergeB(nums1, m, nums2, n);
};
