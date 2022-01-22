/**
 * Grokking the Coding Interview
 * 
*/

import { PrintArray } from "../utils/Utilities";

const searchBitonicArray = (arr:number[], key:number): number => {
    const findMax = (start:number, end:number):number => {
        while (start <= end) {
            let mid = Math.floor(start + (end - start)/2);
            let curr = arr[mid];
            let prev = arr[mid - 1];
            let next = arr[mid + 1];

            if (!prev && curr > next) return mid;
            if (!next && curr > prev) return mid;
            if (curr > prev && curr > next) return mid;

            let onAscent = curr < next;
            if (onAscent) start = mid + 1;
            else end = mid - 1;
        }
        return -1;
    }
    
    const findKey = (start:number,end:number):number => {
        while (start <= end) {
            let mid = Math.floor(start + (end - start)/2);
            let curr = arr[mid];
            
            if (curr === key) return mid;
            
            let onAscent = curr < arr[mid + 1];
            if (onAscent) {
                if (key > curr) start = mid + 1;
                else end = mid - 1;
            } else {
                if (key > curr) end = mid + 1;
                else start = mid + 1;
            }
        }
        return -1;
    }

    let maxIndex = findMax(0, arr.length - 1);
    if (key === arr[maxIndex]) return maxIndex;
    
    let searchLeft = findKey(0, maxIndex - 1);
    let searchRight = findKey(maxIndex + 1, arr.length - 1);

    return Math.max(searchLeft, searchRight);
}
    

export default () => {
    let arr1 = [1, 3, 8, 4, 2], key1 = 4;
    let arr2 = [3, 8, 3, 1], key2 = 8;
    let arr3 = [1, 3, 8, 12], key3 = 12;
    let arr4 = [10, 9, 8], key4 = 10;

    console.log(searchBitonicArray(arr1, key1));
    console.log(searchBitonicArray(arr2, key2));
    console.log(searchBitonicArray(arr3, key3));
    console.log(searchBitonicArray(arr4, key4));
};
