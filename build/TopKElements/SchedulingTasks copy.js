"use strict";
/**
 * Grokking the Coding Interview
 *
 * K = 2
 *
 * {
 *  a: 1,
 *  b: 0,
 *  c: 0
 * }
 *
 * ['a', 'a', 'a', 'b', 'c', 'c']
 *
 * a -> c -> b -> a -> c ->
 *
 * queue = [b, a, null]        if (queue.length > K) then shift from queue.s
 *          ^
 *        Front
*/
Object.defineProperty(exports, "__esModule", { value: true });
let Heap = require('collections/heap');
let Deque = require('collections/deque');
const schedulingsTasks = (arr, k) => {
    let maxHeapPattern = (a, b) => {
        return a.frequency - b.frequency;
    };
    let tasks = arr.length;
    let map = {};
    for (let char of arr)
        map[char] = (map[char] || 0) + 1;
    let maxHeap = new Heap([], null, maxHeapPattern);
    for (let key in map) {
        maxHeap.push({ char: key, frequency: map[key] });
    }
    let queue = new Deque();
    let intervals = 0;
    while (tasks) {
        let curr = maxHeap.pop() || { char: null, frequency: 0 };
        intervals++;
        curr.frequency--;
        queue.push(curr);
        if (queue.length > k) {
            let item = queue.shift();
            if (item.frequency > 0)
                maxHeap.push(item);
        }
        if (curr.char !== null)
            tasks--;
    }
    return intervals;
};
exports.default = () => {
    let arr1 = ['a', 'a', 'a', 'b', 'c', 'c'], k1 = 2;
    let arr2 = ['a', 'b', 'a'], k2 = 3;
    console.log(schedulingsTasks(arr1, k1));
    console.log(schedulingsTasks(arr2, k2));
};
