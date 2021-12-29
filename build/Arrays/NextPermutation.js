"use strict";
/**
 *  31. Next Permutation
 * https://www.youtube.com/watch?v=goUlyp4rwiU&t=192s
 */
Object.defineProperty(exports, "__esModule", { value: true });
const nextPermutationOld = (nums) => {
    // if pivot is -2 by end, then pivot does not exist
    // if pivot is -1 by end, then nums[] is in desc order
    let pivot = -2;
    let i;
    let j;
    let ascending = false;
    for (i = 0, j = 1; j < nums.length; i++, j++) {
        // if last ascends; swap last two nums
        if (nums[j] > nums[i]) {
            ascending = true;
            pivot = -2;
        }
        // if last descends/identical; then pivot
        if (nums[j] <= nums[i]) {
            ascending = false;
            if (pivot === -2)
                pivot = i - 1;
        }
    }
    // i & j failed go out of bounds of nums[] and fail check above;
    // therefore, we decrement to point at last two digits of nums[]
    i--, j--;
    // if nums[] last ascends, then we simply swap the two last vals
    if (ascending)
        [nums[i], nums[j]] = [nums[j], nums[i]];
    else {
        // if pivot is -1, then nums[] is in desc order - therefore
        // we simply sort in ascending order.
        if (pivot === -1)
            nums.sort((a, b) => a - b);
        if (pivot > -1) {
            let pivotVal = nums[pivot];
            let swapVal = nums[pivot + 1];
            let swapIndex = pivot + 1;
            // pivot point should be the point before the nums[] vals
            // begins to descend. therefore, we should replace it with the next
            // larger value.
            for (let x = pivot + 2; x < nums.length; x++) {
                if (nums[x] > pivotVal) {
                    swapVal = Math.min(swapVal, nums[x]);
                    swapIndex = x;
                }
            }
            // swap the values
            [nums[pivot], nums[swapIndex]] = [nums[swapIndex], nums[pivot]];
            // once swapped, we need to sort everything after the pivot point.
            let unsorted = nums.slice(pivot + 1);
            unsorted.sort((a, b) => a - b);
            nums.length = pivot + 1;
            nums.push.apply(nums, unsorted);
        }
    }
    return nums;
};
const nextPermutationA = (nums) => {
    const result = [];
    let largestI = -1;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] < nums[i + 1]) {
            largestI = i;
        }
    }
    let largestJ = -1;
    for (let j = 0; j < nums.length; j++) {
        if (nums[largestI] < nums[j]) {
            largestJ = j;
        }
    }
    console.log(largestI);
    console.log(largestJ);
    [nums[largestI], nums[largestJ]] = [nums[largestJ], nums[largestI]];
    let endArray = nums.splice(largestI + 1);
    endArray.reverse();
    nums = nums.concat(endArray);
    console.log(nums);
    return result;
};
const nextPermutationB = (nums) => {
    let largestI = -1;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] < nums[i + 1])
            largestI = i;
    }
    let largestJ;
    for (let j = 0; j < nums.length; j++) {
        if (nums[largestI] < nums[j])
            largestJ = j;
    }
    console.log(`largestI - index: ${largestI}, value: ${nums[largestI]} (where nums[i] < nums[i + 1])`);
    console.log(`largestJ - index: ${largestJ}, value: ${nums[largestJ]} (where nums[largestI] < nums[j]) \n`);
    console.log(`Original array: \n${nums.slice()}\n`);
    [nums[largestI], nums[largestJ]] = [nums[largestJ], nums[largestI]];
    console.log(`After swapping nums[largestI] and nums[largestJ]`);
    console.log(nums.slice() + '\n');
    let endArray = nums.splice(largestI + 1);
    console.log(`Subarray after largestI: \n${endArray}\n `);
    endArray.reverse();
    console.log(`Reversed array after largestI: \n${endArray}\n`);
    nums = nums.concat(endArray);
    console.log(`Concat reversed subarray to original array: \n${nums}\n `);
    return nums;
};
const nextPermutation = (nums) => {
    let pivot = -1;
    let swap = -1;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] < nums[i + 1])
            pivot = i;
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[pivot])
            swap = i;
    }
    [nums[pivot], nums[swap]] = [nums[swap], nums[pivot]];
    let endArray = nums.splice(pivot + 1);
    endArray.reverse();
    nums.push.apply(nums, endArray);
    return nums;
};
exports.default = () => {
    const nums = [1, 2, 3];
    console.log(nextPermutation(nums));
};
