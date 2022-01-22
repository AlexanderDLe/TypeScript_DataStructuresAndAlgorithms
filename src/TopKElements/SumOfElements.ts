/**
 * Grokking the Coding Interview
 * 
*/

import { PrintArray } from "../utils/Utilities";
let Heap = require('collections/heap');

const sumOfElements = (nums:number[], K1:number, K2:number): number => {
    const minSort = (a:number,b:number) => {return b - a}
    const minHeap = new Heap([], null, minSort);

    for (let num of nums) minHeap.push(num);
    let i = 0;

    while (i < K1) {
        minHeap.pop();
        i++;
    }

    let sum = 0;
    while (i < K2 - 1) {
        sum += minHeap.pop();
        i++;
    }

    return sum;
}

export default () => {
    let arr1 = [1, 3, 12, 5, 15, 11], k1 = 3, X1 = 6;
    let arr2 = [3, 5, 8, 7], k2 = 1, X2 = 4;

    console.log(sumOfElements(arr1, k1, X1));
    console.log(sumOfElements(arr2, k2, X2));
};
