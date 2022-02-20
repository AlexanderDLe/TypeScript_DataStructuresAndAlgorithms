/**
 * Grokking the Coding Interview
 * 
*/

import { PrintArray } from "../utils/Utilities";

const searchRotatedArray = (arr:number[]): number => {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor(start + (end - start)/2);
        let curr = arr[mid];
        let prev = arr[mid - 1];
        let next = arr[mid + 1];

        if (prev && prev > curr) return mid;
        if (next && curr > next) return mid + 1;

        if (curr > arr[start]) start = mid + 1;
        else end = mid - 1;
    }

    return 0;
}
    

export default () => {
    let arr1 = [10, 15, 1, 3, 8];
    let arr2 = [4, 5, 7, 9, 10, -1, 2];
    let arr3 = [1, 3, 8, 10];

    console.log(searchRotatedArray(arr1));
    console.log(searchRotatedArray(arr2));
    console.log(searchRotatedArray(arr3));
};
