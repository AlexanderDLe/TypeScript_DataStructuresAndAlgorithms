"use strict";
/**
 * 81. Search in Rotated Sorted Array 2
 *
 * [2,5,6,1,1,1,2]
 *
 * 3-?-?-3-?-?-3
 *
 * In situations where both ends are the same as curr,
 * then we should inc L and dec R to reduce the range.
 *
 * 1-?-3-?-3
 *
 * Now we can binary search as usual.
 *
 * Takeaway: since there are duplicates, curr <= nums[R] is considered sorted.
 *
*/
Object.defineProperty(exports, "__esModule", { value: true });
const searchRotatedArray2A = (nums, target) => {
    let L = 0;
    let R = nums.length - 1;
    while (L <= R) {
        let M = Math.floor(L + (R - L) / 2);
        let curr = nums[M];
        if (curr === target)
            return true;
        if (nums[L] === nums[R] && nums[M] === nums[R]) {
            L++, R--;
            continue;
        }
        let rightSideSorted = curr <= nums[R];
        if (rightSideSorted) {
            if (target > curr && target <= nums[R])
                L = M + 1;
            else
                R = M - 1;
        }
        else {
            if (target < curr && target >= nums[L])
                R = M - 1;
            else
                L = M + 1;
        }
    }
    return false;
};
const searchRotatedArray2 = (nums, target) => {
    let L = 0;
    let R = nums.length - 1;
    while (L <= R) {
        let M = Math.floor(L + (R - L) / 2);
        let curr = nums[M];
        if (curr === target)
            return true;
        if (curr === nums[L] && curr === nums[R]) {
            L++, R--;
            continue;
        }
        let rightSideSorted = curr <= nums[R];
        if (rightSideSorted) {
            if (target > curr && target <= nums[R])
                L = M + 1;
            else
                R = M - 1;
        }
        else {
            if (target < curr && target >= nums[L])
                R = M - 1;
            else
                L = M + 1;
        }
    }
    return false;
};
exports.default = () => {
    let arr1 = [2, 5, 6, 0, 0, 0, 0, 1, 1, 2];
    let arr2 = [1, 0, 1, 1, 1];
    let arr3 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 13, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    let arr4 = [1, 2, 1];
    console.log(searchRotatedArray2(arr1, 0));
    console.log(searchRotatedArray2(arr1, 1));
    console.log(searchRotatedArray2(arr2, 0));
    console.log(searchRotatedArray2(arr3, 13));
    console.log(searchRotatedArray2(arr4, 1));
};
