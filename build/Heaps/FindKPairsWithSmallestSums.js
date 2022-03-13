"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 373. Find K Pairs With Smallest Sums
  
  k = 3

  [1, 2, 11]
  [2, 4,  6]
  

  1-2, 1-4, 2-2
*/
const priority_queue_1 = require("@datastructures-js/priority-queue");
const findKPairsWithSmallestSums = (nums1, nums2, k) => {
    let heap = new priority_queue_1.MaxPriorityQueue({ priority: (x) => x.product });
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            let num1 = nums1[i];
            let num2 = nums2[j];
            let product = num1 + num2;
            let pair = { product, pair: [num1, num2] };
            if (heap.size() < k) {
                heap.enqueue(pair);
                continue;
            }
            if (heap.size() >= k) {
                if (product >= heap.front().element.product)
                    break;
                heap.dequeue();
                heap.enqueue(pair);
            }
        }
    }
    return heap.toArray().map(x => x.element.pair);
};
exports.default = () => {
    let nums1 = [-10, -4, 0, 0, 6], nums2 = [3, 5, 6, 7, 8, 100], k = 10;
    console.log(findKPairsWithSmallestSums(nums1, nums2, k));
};
