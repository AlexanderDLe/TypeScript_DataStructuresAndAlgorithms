/**
 * 581. Shortest Unsorted Continuous Subarray
 */
import { PrintArray } from '../utils/Utilities';

const findUnsortedSubarray = (nums: number[]): number => {
    let n = nums.length;
    let beg = -1;
    let end = -2;
    let min = nums[n - 1];
    let max = nums[0];

    for (let i = 1; i < n; i++) {
        let j = n - 1 - i;
        max = Math.max(max, nums[i]);
        min = Math.min(min, nums[j]);
        if (nums[i] < max) end = i;
        if (nums[j] > min) beg = j;
    }

    return end - beg + 1;
};

export default () => {
    const nums = [2, 6, 4, 8, 10, 9, 15];

    console.log(findUnsortedSubarray(nums));
};
