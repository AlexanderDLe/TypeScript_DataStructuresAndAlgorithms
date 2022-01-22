"use strict";
/**
 * Grokking the Coding Interview
*/
Object.defineProperty(exports, "__esModule", { value: true });
let Heap = require('collections/heap');
const topKFrequentNumbers = (nums, k) => {
    const maxHeapPattern = (a, b) => {
        return a[1] - b[1];
    };
    let map = {};
    for (let num of nums) {
        map[num] = (map[num] || 0) + 1;
    }
    let maxHeap = new Heap([], null, maxHeapPattern);
    for (let key in map) {
        if (maxHeap.length < k)
            maxHeap.push([key, map[key]]);
        else if (map[key] > maxHeap.peek()[1]) {
            maxHeap.pop();
            maxHeap.push([key, map[key]]);
        }
    }
    let result = [];
    while (maxHeap.length) {
        result.push(maxHeap.pop()[0]);
    }
    return result;
};
exports.default = () => {
    let arr1 = [1, 3, 5, 12, 11, 12, 11], key1 = 2;
    let arr2 = [5, 12, 11, 3, 11], key2 = 3;
    console.log(topKFrequentNumbers(arr1, key1));
    console.log(topKFrequentNumbers(arr2, key2));
};
