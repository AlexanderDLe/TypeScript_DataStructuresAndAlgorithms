"use strict";
/**
 * Grokking the Coding Interview
 *
 * Time Complexity Analysis:
 *
 * O(N) when updating the frequency map for each char.
 *
 * O(D * logD), for each distinct char, push into the heap
 *
 * O(D * logD), for each distinct char, push into result string
*/
Object.defineProperty(exports, "__esModule", { value: true });
let Heap = require('collections/heap');
class KthLargestNumberInStream {
    constructor(nums, k) {
        this.minHeap = new Heap([], null, this.minSortPattern);
        this.nums = nums;
        this.k = k;
        for (let num of nums) {
            if (this.minHeap.length < k)
                this.minHeap.push(num);
            else if (num > this.minHeap.peek()) {
                this.minHeap.pop();
                this.minHeap.push(num);
            }
        }
    }
    add(num) {
        if (num > this.minHeap.peek()) {
            this.minHeap.pop();
            this.minHeap.push(num);
        }
        return this.minHeap.peek();
    }
    minSortPattern(a, b) {
        return b - a;
    }
}
;
exports.default = () => {
    let kthLargestNumber = new KthLargestNumberInStream([3, 1, 5, 12, 2, 11], 4);
    console.log(`4th largest number is: ${kthLargestNumber.add(6)}`);
    console.log(`4th largest number is: ${kthLargestNumber.add(13)}`);
    console.log(`4th largest number is: ${kthLargestNumber.add(4)}`);
};
