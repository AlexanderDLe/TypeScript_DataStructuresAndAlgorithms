"use strict";
/**
 * 767. Reorganize String
 */
Object.defineProperty(exports, "__esModule", { value: true });
const priority_queue_1 = require("@datastructures-js/priority-queue");
const reorganizeString = (s) => {
    const map = {};
    const heap = new priority_queue_1.MaxPriorityQueue({ priority: (x) => x.val });
    const queue = [];
    for (let char of s)
        map[char] = (map[char] || 0) + 1;
    for (let key in map)
        heap.enqueue({ key, val: map[key] });
    let result = '';
    while (heap.size()) {
        let curr = heap.dequeue().element;
        result += curr.key;
        curr.val--;
        if (queue.length)
            heap.enqueue(queue.shift());
        if (curr.val)
            queue.push(curr);
    }
    if (queue.length)
        return '';
    return result;
};
exports.default = () => {
    console.log(reorganizeString('aab'));
    console.log(reorganizeString('aaba'));
    console.log(reorganizeString('aababac'));
};
