"use strict";
/**
 * 215. Kth Largest Element in an Array
 */
Object.defineProperty(exports, "__esModule", { value: true });
const priority_queue_1 = require("@datastructures-js/priority-queue");
const MinHeapClass_1 = require("../DataStructures/MinHeapClass");
const findKthLargestA = (nums, k) => {
    if (!nums || !nums.length)
        return -1;
    let heap = new MinHeapClass_1.MinHeap(k);
    nums.forEach((num) => {
        heap.add(num);
    });
    return heap.peak();
};
const findKthLargest = (nums, k) => {
    let heap = new priority_queue_1.MinPriorityQueue({ priority: (x) => x });
    for (let num of nums) {
        if (heap.size() < k) {
            heap.enqueue(num);
            continue;
        }
        if (num > heap.front().element) {
            heap.dequeue();
            heap.enqueue(num);
        }
    }
    return heap.front().element;
};
exports.default = () => {
    const nums = [3, 2, 3, 1, 2, 4, 5, 5, 6];
    const k = 4;
    console.log(findKthLargest(nums, k));
};
