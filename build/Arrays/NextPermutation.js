"use strict";
/**
 *  31. Next Permutation
 */
Object.defineProperty(exports, "__esModule", { value: true });
const nextPermutation = (nums) => {
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
exports.default = () => {
    const nums = [
        100,
        99,
        98,
        97,
        96,
        95,
        94,
        93,
        92,
        91,
        90,
        89,
        88,
        87,
        86,
        85,
        84,
        83,
        82,
        81,
        80,
        79,
        78,
        77,
        76,
        75,
        74,
        73,
        72,
        71,
        70,
        69,
        68,
        67,
        66,
        65,
        64,
        63,
        62,
        61,
        60,
        59,
        58,
        57,
        56,
        55,
        54,
        53,
        52,
        51,
        50,
        49,
        48,
        47,
        46,
        45,
        44,
        43,
        42,
        41,
        40,
        39,
        38,
        37,
        36,
        35,
        34,
        33,
        32,
        31,
        30,
        29,
        28,
        27,
        26,
        25,
        24,
        23,
        22,
        21,
        20,
        19,
        18,
        17,
        16,
        15,
        14,
        13,
        12,
        11,
        10,
        9,
        8,
        7,
        6,
        5,
        4,
        3,
        2,
        1
    ];
    console.log(nextPermutation(nums));
};
