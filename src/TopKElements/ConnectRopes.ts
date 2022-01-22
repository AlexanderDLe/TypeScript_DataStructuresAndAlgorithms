/**
 * Grokking the Coding Interview
*/

import { PrintArray } from "../utils/Utilities";
let Heap = require('collections/heap');

const connectRopes = (ropeLengths:number[]): number => {
    const minSortPattern = (a:number, b:number) => {
        return b - a;
    }

    let minHeap = new Heap(ropeLengths, null, minSortPattern);
    let sum = 0;

    // If we already accounted for the last num,
    // we don't want to add the final sum to the heap
    // i.e. Keep adding until there is only one rope left
    while (minHeap.length > 1) {
        let num1 = minHeap.pop();
        let num2 = minHeap.pop();
        sum += num1 + num2;

        minHeap.push(num1 + num2);
    }

    return sum;
}

export default () => {
    let arr1 = [1, 3, 11, 5];
    let arr2 = [3, 4, 5, 6];
    let arr3 = [1, 3, 11, 5, 2];

    console.log(connectRopes(arr1));
    console.log(connectRopes(arr2));
    console.log(connectRopes(arr3));
};
