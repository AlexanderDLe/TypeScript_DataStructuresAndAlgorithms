"use strict";
/**
 * 75. Sort Colors
 */
Object.defineProperty(exports, "__esModule", { value: true });
const sortColors = (nums) => {
    if (!nums.length)
        return;
    let map = {};
    for (let num of nums)
        map[num] = (map[num] || 0) + 1;
    let i = 0;
    for (let num in map) {
        while (map[num]) {
            nums[i] = Number(num);
            map[num]--;
            i++;
        }
    }
};
exports.default = () => {
    const nums = [2, 0, 2, 1, 5, 1, 0, 0];
    sortColors(nums);
    console.log(nums);
};
