/**
 * 136. Single Number
 */

import { PrintArray } from '../utils/Utilities';

const singleNumber = (nums: number[]): number => {
    let set = new Set([]);
    let result: number;

    for (let i of nums) {
        if (set.has(i)) set.delete(i);
        else set.add(i);
    }
    set.forEach(val => {
        result = val;
    });

    return result;
};

export default () => {
    const nums = [4, 1, 2, 1, 2];
    PrintArray(nums);
    console.log(singleNumber(nums));
};
