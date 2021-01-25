/**
 * 268. Missing Number
 */

import { PrintArray } from '../utils/Utilities';

const missingNumber = (nums: number[]): number => {
    let result = 0;

    let n = nums.length;
    let bitmap = new Array(n).fill(0);

    for (let num of nums) {
        bitmap[num] = 1;
    }

    for (let i = 0; i <= n; i++) {
        if (bitmap[i] == 0) return i;
    }

    return result;
};

export default () => {
    const nums = [9,6,4,2,3,5,7,0,1];
    console.log(missingNumber(nums));
};
