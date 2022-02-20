/**
 * 136. Single Number
 */

import { PrintArray } from '../utils/Utilities';

const singleNumberA = (nums: number[]): number => {
    let set: any = new Set([]);
    let res: number = 0;

    for (let i of nums) {
        if (set.has(i)) set.delete(i);
        else set.add(i);
    }
    set.forEach((val: number) => {
        res = val;
    });

    return res;
};

const singleNumber = (nums: number[]): number => {
    let map: any = {};

    for (let num of nums) {
        map[num] = (map[num] || 0) + 1;
    }

    for (let key in map) {
        if (map[key] === 1) return Number(key);
    }
}


export default () => {
    const nums = [4, 1, 2, 1, 2];
    console.log(singleNumber(nums));
};
