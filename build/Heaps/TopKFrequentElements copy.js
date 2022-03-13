"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 973. K Closest Points To Origin
*/
const priority_queue_1 = require("@datastructures-js/priority-queue");
const topK = (nums, k) => {
    let map = {};
    for (let num of nums)
        map[num] = (map[num] || 0) + 1;
    let minHeap = new priority_queue_1.MinPriorityQueue({ priority: (x) => x.Val });
    for (let key in map) {
        if (minHeap.size() < k) {
            minHeap.enqueue({ Key: key, Val: map[key] });
            continue;
        }
        if (map[key] > minHeap.front().element.Val) {
            minHeap.dequeue();
            minHeap.enqueue({ Key: key, Val: map[key] });
        }
    }
    const result = minHeap.toArray().map(x => Number(x.element.Key));
    return result;
};
exports.default = () => {
    console.log(topK([1, 1, 1, 2, 2, 3], 2));
    console.log(topK([1], 1));
};
