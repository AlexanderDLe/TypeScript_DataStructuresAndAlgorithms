/**
 * 283. Move Zeroes
 */

import { PrintArray } from '../utils/Utilities';

const moveZeroesA = (nums: number[]): void => {
    let searchLength = nums.length;
    for (let i = 0; i < searchLength; i++) {
        if (nums[i] === 0) {
            nums.push(0);
            nums.splice(i, 1);
            searchLength--;
            i--;
        }
    }
};

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

const moveZeroesBubbleRight = (nums: number[]): void => {
    let len = nums.length;

    const bubbleRight = (curr: number) => {
        let swap = curr + 1;
        while (swap < len) {
            if (nums[swap] !== 0) {
                [nums[curr], nums[swap]] = [nums[swap], nums[curr]];
                curr = swap;
            }
            swap ++;
        }
    }

    for (let i = 0; i < len; i++) {
        if (nums[i] === 0) {
            bubbleRight(i);
            len--;
        }
    }
}

const moveZeroes = (nums: number[]): void => {
    let pos = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[pos] = nums[i]
            pos++;
        }
    }

    while (pos < nums.length) {
        nums[pos] = 0;
        pos++;
    }
}

export default () => {
    const nums = [0,1,0,3,12];
    moveZeroes(nums);
    PrintArray(nums);
};
