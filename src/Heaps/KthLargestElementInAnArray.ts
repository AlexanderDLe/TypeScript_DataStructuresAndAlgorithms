/**
 * 215. Kth Largest Element in an Array
 */

import { MinHeap } from '../DataStructures/MinHeapClass';

const findKthLargest = (nums: number[], k: number): number => {
    if (!nums || !nums.length) return -1;

    let heap = new MinHeap(k);
    nums.forEach((num: number) => {
        heap.add(num);
    });
    return heap.peak();
};

export default () => {
    const nums = [3, 2, 3, 1, 2, 4, 5, 5, 6];
    const k = 4;
    console.log(findKthLargest(nums, k));
};
