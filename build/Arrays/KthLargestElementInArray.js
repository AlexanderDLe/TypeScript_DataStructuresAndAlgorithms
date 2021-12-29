"use strict";
/**
 * 215. Kth Largest Element In An Array
 */
Object.defineProperty(exports, "__esModule", { value: true });
const findKthLargestSortMethod = (nums, k) => {
    nums.sort((a, b) => b - a);
    return nums[k - 1];
};
const findKthLargestA = (nums, k) => {
    const partition = (lo, hi) => {
        let pivot = nums[hi];
        let i = lo;
        for (let j = lo; j < hi; j++) {
            if (nums[j] <= pivot) {
                swap(i, j);
                i++;
            }
        }
        swap(i, hi);
        return i;
    };
    const swap = (i, j) => {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    };
    k = nums.length - k;
    let lo = 0;
    let hi = nums.length - 1;
    while (lo < hi) {
        let j = partition(lo, hi);
        if (j < k) {
            lo = j + 1;
        }
        else if (j > k) {
            hi = j - 1;
        }
        else {
            break;
        }
    }
    return nums[k];
};
const findKthLargestB = (nums, k) => {
    const partition = (arr, lo, hi) => {
        let i = lo;
        let j = hi + 1;
        console.log(`Partition Start: - i: ${i} | j: ${j}`);
        while (true) {
            while (i < hi && arr[++i] < arr[lo])
                ;
            while (j > lo && arr[--j] > arr[lo])
                ;
            if (i >= j)
                break;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        [arr[lo], arr[j]] = [arr[j], arr[lo]];
        console.log(`Partition End  : - i: ${i} | j: ${j}`);
        return j;
    };
    console.log('k: ', nums.length - k);
    k = nums.length - k;
    let lo = 0;
    let hi = nums.length - 1;
    let itr = 1;
    while (lo < hi) {
        let j = partition(nums, lo, hi);
        console.log(`Iteration ${itr} - lo: ${lo} | hi: ${hi} | j: ${j} \n`);
        if (j < k) {
            lo = j + 1;
        }
        else if (j > k) {
            hi = j - 1;
        }
        else {
            break;
        }
        itr++;
    }
    return nums[k];
};
const findKthLargest = (nums, k) => {
    const partition = (lo, hi) => {
        let i = lo;
        let j = hi + 1;
        while (true) {
            while (i < hi && nums[++i] < nums[lo])
                ;
            while (j > lo && nums[--j] >= nums[lo])
                ;
            if (j <= i)
                break;
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
        [nums[lo], nums[j]] = [nums[j], nums[lo]];
        return j;
    };
    let targetIndex = nums.length - k;
    let lo = 0;
    let hi = nums.length - 1;
    while (lo < hi) {
        let currIndex = partition(lo, hi);
        if (currIndex === targetIndex)
            break;
        if (currIndex < targetIndex) {
            lo = currIndex + 1;
        }
        else {
            hi = currIndex - 1;
        }
    }
    return nums[targetIndex];
};
exports.default = () => {
    const nums = [3, 2, 1, 5, 6, 4, 7, 2, 4, 9];
    let k = 4;
    console.log(findKthLargest(nums, k));
};
