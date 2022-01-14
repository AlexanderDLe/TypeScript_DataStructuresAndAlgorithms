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
    }
    find_median() {
    }
    print() {
        console.log('minHeap', this.minHeap);
        console.log('maxHeap', this.maxHeap);
    }
}
;
exports.default = () => {
    var slidingWindowMedian = new SlidingWindowMedian();
    console.log(slidingWindowMedian.);
};
