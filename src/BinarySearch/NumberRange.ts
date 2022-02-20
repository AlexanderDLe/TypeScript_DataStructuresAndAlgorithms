/**
 * Grokking the Coding Interview
 * 

*/

import LinkedListConstruction from "../LinkedLists/LinkedListConstruction";
import { PrintArray } from "../utils/Utilities";

const numberRangeA = (arr:number[], key: number): number[] => {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);
        let val = arr[mid];

        if (val === key) {
            while (arr[start] !== val) start++;
            while (arr[end] !== val) end--;
            return [start, end];
        }

        if (val < key) start = mid + 1;
        else end = mid - 1;
    }

    return [-1, -1];
}

const numberRange = (arr:number[], target: number): number[] => {
    let L = 0;
    let R = arr.length -1;

    while (L <= R) {
        let M = Math.floor(L + (R - L) / 2);
        let curr = arr[M];

        if (curr === target) {
            while (arr[L] !== target) L++;
            while (arr[R] !== target) R--;
            return [L, R];
        }
        if (target > curr) L = M + 1;
        else R = M - 1;
    }
    
    return [-1, -1];
}

export default () => {
    let arr1 = [4, 6, 6, 6, 9], key1 = 6;
    let arr2 = [1, 3, 8, 10, 15], key2 = 10;
    let arr3 = [1, 3, 8, 10, 15], key3 = 12;
    let arr4 = [0, 1, 21, 33, 45, 45, 45, 45, 45, 45, 61, 71, 73], key4 = 45;

    console.log(numberRange(arr1, key1));
    console.log(numberRange(arr2, key2));
    console.log(numberRange(arr3, key3));
    console.log(numberRange(arr4, key4));
};
