/**
 * 581. Shortest Unsorted Continuous Subarray
 */

const findUnsortedSubarrayA = (nums: number[]): number => {
    let n = nums.length;

    let start = -1;
    let end = -2;

    let min = nums[n - 1];
    let max = nums[0];

    for (let i = 1; i < n; i++) {
        let j = n - i - 1;

        max = Math.max(max, nums[i]);
        if (nums[i] < max) end = i;
        min = Math.min(min, nums[j]);
        if (nums[j] > min) start = j;
    }

    return end - start + 1;
};

const findUnsortedSubarray = (nums: number[]): number[] => {
    let startIndex = -1;
    let startMin = nums[nums.length - 1];

    let endIndex = -1;
    let endMax = nums[0];

    for (let i = 0; i < nums.length; i++) {
        let curr = nums[i];

        if (curr < endMax) endIndex = i;
        endMax = Math.max(endMax, curr);
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        let curr = nums[i];

        if (curr > startMin) startIndex = i;
        startMin = Math.min(startMin, curr);
    }

    return [startIndex, endIndex]
}

export default () => {
    const nums = [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19];

    console.log(findUnsortedSubarray(nums));
};
