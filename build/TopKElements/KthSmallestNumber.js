"use strict";
/**
 * Grokking the Coding Interview
 *
 * [1, 5, 12, 2, 11, 5] key = 3;
 *
 **************************************************
 *
 * [1, 5, 12, 2, 11, 5] key = 3;
 *         ^
 *
 * heap = [1, 5, 12]
 *
 * Add until length of heap meets key. Eventually, 12
 * will be the max value of the heap.
 *
 **************************************************
 *
 * [1, 5, 12, 2, 11, 5] key = 3;
 *            ^
 *
 * heap = [1, 5, 12]
 *
 * 2 is less than maxHeap.peek(), therefore we can
 * remove that larger number and add into the heap.
 *
 * heap = [1, 2, 5]
 *
 * The heap will automatically adjust. 5 will now be the
 * max value of the maxHeap.
 *
 **************************************************
 *
 * [1, 5, 12, 2, 11, 5] key = 3;
 *               ^
 *
 * heap = [1, 2, 5]
 *
 * 11 is greater than the maxValue, we don't need it.
 *
 **************************************************
 *
 * [1, 5, 12, 2, 11, 5] key = 3;
 *                   ^
 *
 * heap = [1, 2, 5]
 *
 * 5 is not less than maxHeap.peek().
 *
 **************************************************
 *
 * heap = [1, 2, 5]
 *               ^
 *
 * 5 is the 3rd smallest number. We basically keep
 * trading the current 3rd smallest number for a smaller number
 * if found.
 *
*/
Object.defineProperty(exports, "__esModule", { value: true });
let Heap = require('collections/heap');
const kthSmallestNumber = (nums, k) => {
    const maxHeapSort = (a, b) => {
        return a - b;
    };
    let maxHeap = new Heap([], null, maxHeapSort);
    for (let num of nums) {
        if (maxHeap.length < k)
            maxHeap.push(num);
        else if (num < maxHeap.peek()) {
            maxHeap.pop();
            maxHeap.push(num);
        }
    }
    return maxHeap.pop();
};
exports.default = () => {
    let arr1 = [1, 5, 12, 2, 11, 5], K1 = 3;
    let arr2 = [1, 5, 12, 2, 11, 5], K2 = 4;
    let arr3 = [5, 12, 11, -1, 12], K3 = 3;
    console.log(kthSmallestNumber(arr1, K1));
    console.log(kthSmallestNumber(arr2, K2));
    console.log(kthSmallestNumber(arr3, K3));
};
