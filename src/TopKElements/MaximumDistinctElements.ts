/**
 * Grokking the Coding Interview
 * 
*/

import { PrintArray } from "../utils/Utilities";
let Heap = require('collections/heap');

const maximumDistinctElements = (nums:number[], k:number): number => {
    const map:any = {};
    for (let num of nums) map[num] = (map[num] || 0) + 1;
    
    const minSortPattern = (a:any, b:any) => {
        return b.frequency - a.frequency;
    }
    const minHeap = new Heap([], null, minSortPattern)
    for (let key in map) {
        minHeap.push({num: key, frequency: map[key]})
    }

    let distinctCount = 0;
    while (k && minHeap.length) {
        let curr = minHeap.pop();
        
        while (k && curr.frequency > 1) {
            curr.frequency--;
            k--;
        }
        
        if (curr.frequency === 1) distinctCount++;
    }

    // We subtract by k because we need to use all of k
    // even if the remaining numbers are unique.
    return distinctCount - k;
}

export default () => {
    let arr1 = [7, 3, 5, 8, 5, 3, 3], K1 = 2;
    let arr2 = [3, 5, 12, 11, 12], K2 = 3;
    let arr3 = [1, 2, 3, 3, 3, 3, 4, 4, 5, 5, 5], K3 = 2;

    console.log(maximumDistinctElements(arr1, K1));
    console.log(maximumDistinctElements(arr2, K2));
    console.log(maximumDistinctElements(arr3, K3));
};
