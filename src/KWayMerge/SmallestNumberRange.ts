/**
 * Grokking the Coding Interview
*/

import { PrintArray } from "../utils/Utilities";
let Heap = require('collections/heap');

const smallestNumberRange = (lists: number[][]): number[] => {
    return [];
}

export default () => {
    let L1=[1, 5, 8], L2=[4, 12], L3=[7, 8, 10]
    let lists1 = [L1, L2, L3]
    
    let N1=[1, 9], N2=[4, 12], N3=[7, 10, 16]
    let lists2 = [N1, N2, N3]
    
    console.log(smallestNumberRange(lists1));
    console.log(smallestNumberRange(lists2));
};
