/**
 * Grokking the Coding Interview
 * 
 * Same thing as binary search, but once you find the key, 
 * then you can simply return the next index or -1 if the out of bounds.
*/

import { PrintArray } from "../utils/Utilities";

const ceilingOfANumber = (arr:number[], key: number): number => {
    if (key < arr[0]) return 0;
    if (key >= arr[arr.length - 1]) return -1;

    let start = 0;
    let end = arr.length - 1;

    // We will continue searching until we find key or start > end.
    // In that case, the result will have to be arr[start] because that is
    // the closest we're looking for the next largest.
    while (start <= end) {
        let mid = Math.floor(start + (end - start)/2);
        let curr = arr[mid];

        if (curr === key) return mid;
        if (key < curr) end = mid - 1;
        else start = mid + 1;
        // break;
    }
    return start;
}

const ceilingOfANumberSelf = (arr:number[], key: number): number => {
    if (key < arr[0]) return 0;
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);
        let curr = arr[mid];
        let next = arr[mid + 1] || null;
        let prev = arr[mid - 1] || null;

        if (key === curr) return mid;

        if ((next && next > key)
         && (prev && prev < key)) return mid < arr.length - 1 ? mid : -1;

        if (key < curr) end = mid - 1;
        else start = mid + 1;
    }

    return -1;
}
    

export default () => {
    let arr1 = [4, 6, 10], key1 = 6;
    let arr2 = [1, 3, 8, 10, 15, 16, 17, 18, 19, 20, 21, 22, 23], key2 = 12;
    let arr3 = [4, 6, 10], key3 = 17;
    let arr4 = [4, 6, 10], key4 = -1;

    console.log(ceilingOfANumber(arr1, key1));
    console.log(ceilingOfANumber(arr2, key2));
    console.log(ceilingOfANumber(arr3, key3));
    console.log(ceilingOfANumber(arr4, key4));
};
