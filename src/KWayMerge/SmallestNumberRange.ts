/**
 * Grokking the Coding Interview
*/

import { PrintArray } from "../utils/Utilities";
let Heap = require('collections/heap');

const smallestNumberRange = (lists: number[][]): number[] => {
    const minSortPattern = (a:any, b:any) => {
        return b.value - a.value;
    }

    const minHeap = new Heap([], null, minSortPattern);
    let largestVal = -Infinity;
    lists.forEach(list => {
        largestVal = Math.max(largestVal, list[0]);
        minHeap.push({value: list[0], index: 0, list: list})}
    )

    let result = [0,0];
    let smallestRange = Infinity;
    while (minHeap.length) {
        let curr = minHeap.pop();
        let range = largestVal - curr.value;

        if (range < smallestRange) {
            result = [curr.value, largestVal];
            smallestRange = range;
        }

        if (curr.index + 1 === curr.list.length) break;
        
        let nextValue = curr.list[curr.index + 1];
        largestVal = Math.max(largestVal, nextValue);
        minHeap.push({value: nextValue, index: curr.index + 1, list: curr.list})
    }

    return result;
}

export default () => {
    let L1=[1, 5, 8], L2=[4, 12], L3=[7, 8, 10]
    let lists1 = [L1, L2, L3]
    
    let N1=[1, 9], N2=[4, 12], N3=[7, 10, 16]
    let lists2 = [N1, N2, N3]
    
    console.log(smallestNumberRange(lists1));
    console.log(smallestNumberRange(lists2));
};
