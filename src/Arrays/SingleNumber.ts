/**
 * 136. Single Number
 */

import { PrintArray } from '../utils/Utilities';

const singleNumber = (nums: number[]): number => {
    let set: any = new Set([]);
    let result: number;

    for (let i of nums) {
        if (set.has(i)) set.delete(i);
        else set.add(i);
    }
    // for-of loop works only when compiling to es6
    for (let i of set.values()) {
        result = i;
    }
    // forEach loop works with either es5/es6
    set.forEach((val: number) => {
        result = val;
    });

    return result;
};

export default () => {
    const nums = [4, 1, 2, 1, 2];
    PrintArray(nums);
    console.log(singleNumber(nums));
};
