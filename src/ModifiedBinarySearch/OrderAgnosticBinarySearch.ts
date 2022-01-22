/**
 * Grokking the Coding Interview
 * 
 * key = 10
 * 
 *  S     E
 * [4, 6, 10]
 * 
 * M = start + (end - start)/2      <--- (end - start) is the difference in length
 *   = 0 + (2 - 0)/2                <--- add start to find position in array
 *   = 0 + 1
 *   = 1
 * 
 * arr[M] = 6.  6 < 10 ie. 6 < key.
 * 
 * The key is higher. Therefore we must search in the right half.
 * start = M + 1; We add the + 1 (or -1 if the opposite) because we don't need M.
 * 
 *********************************************************** 
 * 
 *        SE
 * [4, 6, 10]
 * 
 * M = start + (end - start)/2      <--- (end - start) is the difference in length
 *   = 2 + (2 - 2)/2                <--- add start to find position in array
 *   = 2 + 0
 *   = 2
 * 
 * arr[M] = 10.  10 === 10 ie. 10 is the key.
 * 
 * We found the key, therefore we can return the index.
 * 
 *********************************************************** 
*/

import { PrintArray } from "../utils/Utilities";

const orderAgnosticBinarySearch = (arr:number[], key: number): number => {
    let start = 0;
    let end = arr.length - 1;
    let ascending = arr[0] < arr[arr.length - 1];

    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);
        let val = arr[mid];

        if (key === val) return mid;

        if (ascending) {
            if (key > val) start = mid + 1;
            else end = mid - 1;
        } else {
            if (key > val) end = mid - 1;
            else start = mid + 1;
        }
    }
    return -1;
}
    

export default () => {
    let arr1 = [4, 6, 10], key1 = 10;
    let arr2 = [1, 2, 3, 4, 5, 6, 7], key2 = 5;
    let arr3 = [10, 6, 4], key3 = 10;
    let arr4 = [10, 6, 4], key4 = 4;

    console.log(orderAgnosticBinarySearch(arr1, key1));
    console.log(orderAgnosticBinarySearch(arr2, key2));
    console.log(orderAgnosticBinarySearch(arr3, key3));
    console.log(orderAgnosticBinarySearch(arr4, key4));
};
