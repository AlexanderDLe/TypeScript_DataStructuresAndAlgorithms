/**
 * 283. Move Zeroes
 */

import { PrintArray } from '../utils/Utilities';

const moveZeroesSwapping = (nums: number[]): void => {
    if (nums.length < 2) return;
    let L = 0,
        R = 1;
    while (R < nums.length) {
        if (nums[L]) {
            L++;
            R = L + 1;
        } else if (!nums[L] && !nums[R]) {
            R++;
        } else if (!nums[L] && nums[R]) {
            [nums[L], nums[R]] = [nums[R], nums[L]];
            L++;
            R = L + 1;
        }
    }
};

const moveZeroesSplicing = (nums: number[]): void => {
    if (!nums.length) return;
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
            i--;
            len--;
        }
    }
};

export default () => {
    const nums = [0, 1, 0, 3, 12];
    moveZeroesSplicing(nums);
    PrintArray(nums);
};
