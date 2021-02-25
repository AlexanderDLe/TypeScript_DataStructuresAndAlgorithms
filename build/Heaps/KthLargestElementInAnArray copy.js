"use strict";
/**
 * 215. Kth Largest Element in an Array
 */
Object.defineProperty(exports, "__esModule", { value: true });
const MinHeapClass_1 = require("../DataStructures/MinHeapClass");
const findKthLargest = (nums, k) => {
    if (!nums || !nums.length)
        return -1;
    let heap = new MinHeapClass_1.MinHeap(k);
    nums.forEach((num) => {
        heap.add(num);
    });
    return heap.peak();
};
exports.default = () => {
    const nums = [3, 2, 3, 1, 2, 4, 5, 5, 6];
    const k = 4;
    console.log(findKthLargest(nums, k));
};
