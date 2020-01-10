/**
 * 169. Majority Element
 */

import { PrintObject } from '../utils/Utilities';

type NumMap = {
    [key: number]: number;
};
const majorityElement = (nums: number[]): number => {
    let majority = Math.floor(nums.length / 2);
    let map: NumMap = {};

    for (const i of nums) {
        if (map[i]) map[i]++;
        else map[i] = 1;

        if (map[i] > majority) return i;
    }

    return 0;
};

export default () => {
    const nums = [2, 2, 1, 1, 1, 2, 2];
    console.log(majorityElement(nums));
};
