"use strict";
/**
 * Grokking the Coding Interview
 *

*/
Object.defineProperty(exports, "__esModule", { value: true });
class ArrayReader {
    constructor(arr) {
        this.arr = arr;
    }
    get(index) {
        if (index >= this.arr.length)
            return Number.MAX_SAFE_INTEGER;
        return this.arr[index];
    }
}
;
const searchInSortedInfiniteArray = (reader, key) => {
    if (reader.get(0) === key)
        return 0;
    let start = 0;
    let end = 1;
    while (reader.get(end) < Number.MAX_SAFE_INTEGER) {
        start = end;
        end = end * 2;
        if (key >= reader.get(start) && key <= reader.get(end))
            break;
    }
    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);
        let val = reader.get(mid);
        if (key === val)
            return mid;
        if (key > val)
            start = mid + 1;
        else
            end = mid - 1;
    }
    return -1;
};
exports.default = () => {
    var reader = new ArrayReader([4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]);
    console.log(searchInSortedInfiniteArray(reader, 16));
    console.log(searchInSortedInfiniteArray(reader, 11));
    reader = new ArrayReader([1, 3, 8, 10, 15]);
    console.log(searchInSortedInfiniteArray(reader, 15));
    console.log(searchInSortedInfiniteArray(reader, 200));
};
