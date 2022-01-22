/**
 * Grokking the Coding Interview
*/

import { PrintArray } from "../utils/Utilities";
let Heap = require('collections/heap');

const topKNumbers = (nums:number[], k:number): number[] => {
    const minHeapSort = (a:number, b:number) => {
        return b - a;
    }
    let minHeap = new Heap([], null, minHeapSort)

    for (let num of nums) {
        if (minHeap.length < k) minHeap.push(num);
        else if (num > minHeap.peek()) {
            minHeap.pop();
            minHeap.push(num);
        }
    }

    return minHeap.toArray();
}

export default () => {
    let arr1 = [3, 1, 5, 12, 2, 11], key1 = 3;
    let arr2 = [5, 12, 11, -1, 12], key2 = 3;

    console.log(topKNumbers(arr1, key1));
    console.log(topKNumbers(arr2, key2));
};
