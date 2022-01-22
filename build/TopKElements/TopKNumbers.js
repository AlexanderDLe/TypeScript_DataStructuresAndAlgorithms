"use strict";
/**
 * Grokking the Coding Interview
*/
Object.defineProperty(exports, "__esModule", { value: true });
let Heap = require('collections/heap');
const topKNumbers = (nums, k) => {
    const minHeapSort = (a, b) => {
        return b - a;
    };
    let minHeap = new Heap([], null, minHeapSort);
    for (let num of nums) {
        if (minHeap.length < k)
            minHeap.push(num);
        else if (num > minHeap.peek()) {
            minHeap.pop();
            minHeap.push(num);
        }
    }
    return minHeap.toArray();
};
exports.default = () => {
    let arr1 = [3, 1, 5, 12, 2, 11], key1 = 3;
    let arr2 = [5, 12, 11, -1, 12], key2 = 3;
    console.log(topKNumbers(arr1, key1));
    console.log(topKNumbers(arr2, key2));
};
