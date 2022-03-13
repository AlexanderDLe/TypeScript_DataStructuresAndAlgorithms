"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 295. Find Media from Data Stream
 *
 *
 * 4, 3, 2, 5
 *
 * [5]
 * [4]
 * min
 *
 * max
 * [3]
 * [2]
*/
const priority_queue_1 = require("@datastructures-js/priority-queue");
class MedianFinder {
    constructor() {
        this.minHeap = new priority_queue_1.MinPriorityQueue({ priority: (x) => x });
        this.maxHeap = new priority_queue_1.MaxPriorityQueue({ priority: (x) => x });
    }
    addNum(num) {
        let { minHeap, maxHeap } = this;
        if (!minHeap.size()) {
            minHeap.enqueue(num);
            return;
        }
        if (num > minHeap.front().element) {
            minHeap.enqueue(num);
        }
        else {
            maxHeap.enqueue(num);
        }
        this.balanceHeaps();
    }
    findMedian() {
        let { minHeap, maxHeap } = this;
        // Mistake: Account for parity of elements.
        // If odd elements, take middle - else take average of middle two
        if (minHeap.size() === maxHeap.size()) {
            let minVal = minHeap.size() > 0 ? minHeap.front().element : 0;
            let maxVal = maxHeap.size() > 0 ? maxHeap.front().element : 0;
            return (minVal + maxVal) / 2;
        }
        return minHeap.front().element;
    }
    balanceHeaps() {
        let { minHeap, maxHeap } = this;
        // Mistake: Don't forget to balance both conditions - 
        // 1. MinHeap has 2 more elements
        // 2. MaxHeap has 1 more element
        if (minHeap.size() === maxHeap.size() + 2) {
            maxHeap.enqueue(minHeap.dequeue().element);
            return;
        }
        if (minHeap.size() + 1 === maxHeap.size()) {
            minHeap.enqueue(maxHeap.dequeue().element);
            return;
        }
    }
}
exports.default = () => {
    const medianFinder = new MedianFinder();
    medianFinder.addNum(1); // arr = [1]
    medianFinder.addNum(2); // arr = [1, 2]
    console.log(medianFinder.findMedian()); // return 1.5 (i.e., (1 + 2) / 2)
    medianFinder.addNum(3); // arr[1, 2, 3]
    console.log(medianFinder.findMedian()); // return 2.0
};
