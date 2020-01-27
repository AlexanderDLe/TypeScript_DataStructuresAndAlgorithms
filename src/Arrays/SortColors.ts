/**
 * 75. Sort Colors
 */

import { PrintObject } from '../utils/Utilities';

type Map = {
    [key: number]: number;
};
const sortColors = (nums: number[]): void => {
    if (!nums.length) return;
    let map: Map = {};
    for (let num of nums) map[num] = (map[num] || 0) + 1;

    let i = 0;
    for (let num in map) {
        while (map[num]) {
            nums[i] = Number(num);
            map[num]--;
            i++;
        }
    }
};

export default () => {
    const nums = [2, 0, 2, 1, 5, 1, 0, 0];
    sortColors(nums);
    console.log(nums);
};
