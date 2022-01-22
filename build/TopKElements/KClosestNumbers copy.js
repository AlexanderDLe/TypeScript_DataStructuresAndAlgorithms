"use strict";
/**
 * Grokking the Coding Interview
 *
 * Why doe using findClosestIndex return the index of the
 * next higher number if X isn't found?
 *
 * Binary search will continue until eventually it picks between two
 * numbers. At this point, using Math.floor to determine the mid variable
 * will force the comparison of X to the first number. If the X is not
 * equal to the first number, then the binary search will continue with
 * the second number only.
 *
 * However, let's say the final binary search is taking place on the last number
 * of the array. If the current number is less than X, then the start index
 * finally be placed outside of the array.
*/
Object.defineProperty(exports, "__esModule", { value: true });
let Heap = require('collections/heap');
const KClosestNumbers = (nums, K, X) => {
    const findClosestIndex = () => {
        let start = 0;
        let end = nums.length - 1;
        while (start <= end) {
            let mid = Math.floor(start + (end - start) / 2);
            let curr = nums[mid];
            if (curr === X)
                return mid;
            if (curr < X)
                start = mid + 1;
            else
                end = mid - 1;
        }
        return start;
    };
    let closestIndex = findClosestIndex();
    let L = closestIndex - 1;
    let R = closestIndex;
    let result = [];
    while (K) {
        let left = nums[L] || -1;
        let right = nums[R] || -1;
        if (left >= right) {
            result.unshift(left);
            L--;
        }
        else {
            result.push(right);
            R++;
        }
        K--;
    }
    return result;
};
const KClosestNumbersSlowerLinearTime = (nums, K, X) => {
    const maxSortPattern = (a, b) => {
        return a.distance - b.distance;
    };
    let result = [];
    let maxHeap = new Heap([], null, maxSortPattern);
    for (let num of nums) {
        let distance = Math.abs(X - num);
        if (maxHeap.length < K)
            maxHeap.push({ num, distance });
        else if (distance < maxHeap.peek().distance) {
            maxHeap.pop();
            maxHeap.push({ num, distance });
        }
    }
    while (maxHeap.length)
        result.push(maxHeap.pop().num);
    return result;
};
exports.default = () => {
    let arr1 = [5, 6, 7, 8, 9], k1 = 3, X1 = 7;
    let arr2 = [2, 4, 5, 6, 9], k2 = 3, X2 = 3;
    let arr3 = [2, 4, 5, 6, 9], k3 = 3, X3 = 8;
    console.log(KClosestNumbers(arr1, k1, X1));
    console.log(KClosestNumbers(arr2, k2, X2));
    console.log(KClosestNumbers(arr3, k3, X3));
};
