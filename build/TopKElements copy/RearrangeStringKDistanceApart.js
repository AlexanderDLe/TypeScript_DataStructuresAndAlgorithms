"use strict";
/**
 * Grokking the Coding Interview
 *
 *
 * Queue Technique:
 *
 * Uses a queue to push k elements and back to heap
 *
 ********************************************
 *
 * Sliding Window Technique:
 *
 * mmpp
 *
 * heap: [{m: 2}, {p: 2}]
 *
 *
 * result = ''
 *
 *********************************************
 *
 * curr = {m: 2}
 *
 * result = 'm';
 *
 * curr = {m: 1};
 *
 * heap: [{m: 1}, {p: 2}]
 *
 * set = [m]
 *
 * L = 0, R = 1
 *
 *********************************************
 *
 * curr = {p: 2}
 *
 * result = 'mp';
 *
 * curr = {p: 1};
 *
 * heap: [{m: 1}, {p: 1}]
 *
 * set = [m, p]
 *
 * L = 0, R = 2
 *
 *********************************************
 *
 * curr = {m: 1}
 *
 * result = 'mp';
 *
 * curr = {p: 1};
 *
 * heap: [{m: 1}, {p: 1}]
 *
 * set = [m, p]
 *
 * L = 0, R = 2
*/
Object.defineProperty(exports, "__esModule", { value: true });
let Heap = require('collections/heap');
let Deque = require('collections/deque');
const rearrangeStringKDistanceApart = (str, k) => {
    const maxSortPattern = (a, b) => {
        return a.frequency - b.frequency;
    };
    let map = {};
    for (let char of str)
        map[char] = (map[char] || 0) + 1;
    const maxHeap = new Heap([], null, maxSortPattern);
    for (let key in map) {
        maxHeap.push({ char: key, frequency: map[key] });
    }
    let queue = new Deque();
    let result = '';
    while (maxHeap.length) {
        let curr = maxHeap.pop();
        result += curr.char;
        curr.frequency--;
        // We push curr to the queue even if frequency is 0
        // because we need the item to push the queue forward
        queue.push(curr);
        if (queue.length === k) {
            let qItem = queue.shift();
            if (qItem.frequency > 0)
                maxHeap.push(qItem);
        }
    }
    return result.length === str.length ? result : '';
};
const rearrangeStringKDistanceApartSlidingWindow = (str, k) => {
    const maxSortPattern = (a, b) => {
        return a.frequency - b.frequency;
    };
    let map = {};
    for (let char of str)
        map[char] = (map[char] || 0) + 1;
    const maxHeap = new Heap([], null, maxSortPattern);
    for (let key in map) {
        maxHeap.push({ char: key, frequency: map[key] });
    }
    let windowSet = new Set();
    let tempStorage = [];
    let result = '';
    let L = 0;
    let R = 1;
    while (maxHeap.length) {
        let curr = maxHeap.pop();
        while (windowSet.has(curr.char)) {
            tempStorage.push(curr);
            curr = maxHeap.pop();
            if (!curr)
                return '';
        }
        windowSet.add(curr.char);
        curr.frequency--;
        result += curr.char;
        if (curr.frequency > 0)
            maxHeap.push(curr);
        while (tempStorage.length)
            maxHeap.push(tempStorage.pop());
        if (R >= k) {
            windowSet.delete(result[L]);
            L++;
        }
        R++;
    }
    return result;
};
exports.default = () => {
    let str1 = 'mmpp', k1 = 2;
    let str2 = 'Programming', k2 = 3;
    let str3 = 'aab', k3 = 2;
    let str4 = 'aappa', k4 = 3;
    console.log(rearrangeStringKDistanceApart(str1, k1));
    console.log(rearrangeStringKDistanceApart(str2, k2));
    console.log(rearrangeStringKDistanceApart(str3, k3));
    console.log(rearrangeStringKDistanceApart(str4, k4));
};
