/**
 * Grokking the Coding Interview
*/

import { PrintArray } from "../utils/Utilities";
let Heap = require('collections/heap');

const KPairsWithLargestSum = (lists: number[][], K:number): number[][] => {
    const minSortPattern = (a:any, b:any) => {
        return b.product - a.product;
    }

    const minHeap = new Heap([], null, minSortPattern);
    
    let arr1 = lists[0];
    let arr2 = lists[1]
    for (let i = 0; i < Math.min(arr1.length, K); i++) {
        for (let j = 0; j < Math.min(arr2.length, K); j++) {
            let product = arr1[i] * arr2[j];

            if (minHeap.length < K) {
                minHeap.push({product, pair: [arr1[i], arr2[j]]});
                continue;
            } 
            if (product <= minHeap.peek().product) {
                break;
            }

            minHeap.pop();
            minHeap.push({product, pair: [arr1[i], arr2[j]]});
        }
    }

    let result: number[][] = [];
    while (minHeap.length) {
        result.push(minHeap.pop().pair);
    }

    return result;
}

export default () => {
    let L1=[9, 8, 2], 
        L2=[6, 3, 1], 
        K1=3;
        
    let N1=[5, 2, 1], 
        N2=[2, -1], 
        K2=3
        
    let lists1 = [L1, L2]
    let lists2 = [N1, N2]
    console.log(KPairsWithLargestSum(lists1, K1));
    console.log(KPairsWithLargestSum(lists2, K2));
};
