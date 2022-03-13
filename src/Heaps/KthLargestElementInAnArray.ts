/**
 * 215. Kth Largest Element in an Array
 */

import { MinPriorityQueue } from '@datastructures-js/priority-queue';
import { MinHeap } from '../DataStructures/MinHeapClass';

const findKthLargestA = (nums: number[], k: number): number => {
    if (!nums || !nums.length) return -1;

    let heap = new MinHeap(k);
    nums.forEach((num: number) => {
        heap.add(num);
    });
    return heap.peak();
};

const findKthLargest = (nums: number[], k: number): number => {
  let heap = new MinPriorityQueue({priority: (x:number) => x});

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
}

export default () => {
  const nums = [3, 2, 3, 1, 2, 4, 5, 5, 6];
  const k = 4;
  console.log(findKthLargest(nums, k));
};
