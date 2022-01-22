"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Grokking the Coding Interview
 *
*/
let Heap = require('collections/heap');
class SlidingWindowMedian {
    constructor() {
        this.minHeap = new Heap([], null, ((a, b) => b - a));
        this.maxHeap = new Heap([], null, ((a, b) => a - b));
    }
    find_sliding_window_median(nums, k) {
        let result = [];
        let L = 0;
        for (let R = 0; R < nums.length; R++) {
            this.addNum(nums[R]);
            if (R + 1 >= k) {
                result.push(this.find_median());
                this.removeNum(nums[L]);
                L++;
            }
        }
        return result;
    }
    addNum(num) {
        let maxLen = this.maxHeap.length;
        if (!maxLen || num <= this.maxHeap.peek()) {
            this.maxHeap.push(num);
        }
        else {
            this.minHeap.push(num);
        }
        this.balanceHeaps();
    }
    removeNum(num) {
        if (num <= this.maxHeap.peek()) {
            this.maxHeap.delete(num);
        }
        else {
            this.minHeap.delete(num);
        }
        this.balanceHeaps();
    }
    balanceHeaps() {
        let maxLen = this.maxHeap.length;
        let minLen = this.minHeap.length;
        if (maxLen === minLen + 2) {
            this.minHeap.push(this.maxHeap.pop());
        }
        else if (maxLen < minLen) {
            this.maxHeap.push(this.minHeap.pop());
        }
    }
    find_median() {
        let maxLen = this.maxHeap.length;
        let minLen = this.minHeap.length;
        if (maxLen === minLen) {
            return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
        }
        return this.maxHeap.peek();
    }
    print() {
        console.log('minHeap', this.minHeap);
        console.log('maxHeap', this.maxHeap);
    }
}
;
exports.default = () => {
    const slidingWindowMedian = new SlidingWindowMedian();
    let arr = [1, 2, -1, 3, 5], k = 2;
    console.log(slidingWindowMedian.find_sliding_window_median(arr, k));
    const slidingWindowMedian2 = new SlidingWindowMedian();
    let arr2 = [1, 2, -1, 3, 5], k2 = 3;
    console.log(slidingWindowMedian2.find_sliding_window_median(arr2, k2));
};
