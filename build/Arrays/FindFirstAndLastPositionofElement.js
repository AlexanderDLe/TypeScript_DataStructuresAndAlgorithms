"use strict";
/**
 * 34. Find First and Last Position of Element in Sorted Array
 *
 * If target is found, then we find position of the start and end
 * range of the target values.
 *
 * If target is never found, then we eventually leave while loop
 * and return [-1, -1];
 */
Object.defineProperty(exports, "__esModule", { value: true });
const searchRange = (nums, target) => {
    let result = [-1, -1];
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
        let midIndex = Math.floor((end + start) / 2);
        let val = nums[midIndex];
        if (val === target) {
            let startPos = midIndex;
            let endPos = midIndex;
            while (nums[startPos - 1] === target)
                startPos--;
            while (nums[endPos + 1] === target)
                endPos++;
            return (result = [startPos, endPos]);
        }
        if (val > target)
            end = midIndex - 1;
        if (val < target)
            start = midIndex + 1;
    }
    return result;
};
exports.default = () => {
    const nums = [5, 7, 7, 8, 8, 10];
    const target = 6;
    console.log(searchRange(nums, target));
};
