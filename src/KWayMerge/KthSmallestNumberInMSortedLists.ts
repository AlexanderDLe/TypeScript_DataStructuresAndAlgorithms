/**
 * Grokking the Coding Interview
*/

import { PrintArray } from "../utils/Utilities";
let Heap = require('collections/heap');


const KthSmallestNumberInMSortedListsPointers = (lists: number[][], K: number): number => {
    const map:any = {};
    for (let i = 0; i < lists.length; i++) map[i] = 0;

    let result = 0;
    while (K) {
        let lowestValue = Infinity;
        let listIndex = 0;

        for (let key in map) {
            let currList = lists[Number(key)];
            let currIndex = map[key];
            let currValue = currList[currIndex]

            if (currValue < lowestValue) {
                lowestValue = currValue;
                listIndex = Number(key);
            }
        }
        
        map[listIndex]++;
        if (map[listIndex] === lists[listIndex].length) {
            delete map[listIndex];
        }
        result = lowestValue;
        K--;
    }

    return result;
}

const KthSmallestNumberInMSortedListsHeap = (lists: number[][], K: number): number => {
    const minSortPattern = (a:any, b:any) => {
        return b.value - a.value;
    }

    const minHeap = new Heap([], null, minSortPattern);
    lists.forEach((list, index) => minHeap.push({
        listIndex: index,
        valueIndex: 0,
        value: list[0]
    }))

    let KthSmallest = 0;
    while (K && minHeap.length) {
        let curr = minHeap.pop();
        KthSmallest = curr.value;
        K--;

        if (curr.valueIndex === lists[curr.listIndex].length) {
            continue;
        }

        minHeap.push({
            listIndex: curr.listIndex,
            valueIndex: curr.valueIndex + 1,
            value: lists[curr.listIndex][curr.valueIndex + 1]
        })
    }

    return KthSmallest;
}

export default () => {
    let listA1 = [2, 6, 8];
    let listA2 = [3, 6, 7];
    let listA3 = [1, 3, 4];
    let lists1 = [listA1, listA2, listA3];
    let K1 = 5;
    
    let listB1 = [5, 8, 9];
    let listB2 = [1, 7];
    let lists2 = [listB1, listB2];
    let K2 = 3;
    
    console.log(KthSmallestNumberInMSortedListsHeap(lists1, K1));
    console.log(KthSmallestNumberInMSortedListsHeap(lists2, K2));
};
