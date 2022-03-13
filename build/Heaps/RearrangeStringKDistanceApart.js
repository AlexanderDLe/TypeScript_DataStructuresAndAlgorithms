"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 973. K Closest Points To Origin
*/
const priority_queue_1 = require("@datastructures-js/priority-queue");
const rearrangeString = (s, k) => {
    const map = {};
    for (let char of s) {
        map[char] = (map[char] || 0) + 1;
    }
    const heap = new priority_queue_1.MaxPriorityQueue({ priority: (x) => x.frequency });
    for (let key in map) {
        const item = { char: key, frequency: map[key] };
        heap.enqueue(item);
    }
    const queue = [];
    let result = '';
    let index = 0;
    while (heap.size()) {
        let item = heap.dequeue().element;
        result += item.char;
        item.frequency--;
        if (item.frequency > 0) {
            queue.push([index + k, item]);
        }
        // Made a mistake here: Incremented index too early - affectd the queue[0] index value
        index++;
        if (queue.length) {
            let indexToRemove = queue[0][0];
            // Made two errors here: forgot to shift before enqueuing
            // Also forgot to access the actual item for enqueueing into the heap
            if (index >= indexToRemove)
                heap.enqueue(queue.shift()[1]);
        }
    }
    return result.length === s.length ? result : '';
};
exports.default = () => {
    console.log(rearrangeString("aabbcc", 3));
    console.log(rearrangeString("aaabc", 3));
    console.log(rearrangeString("aaadbbcc", 2));
};
