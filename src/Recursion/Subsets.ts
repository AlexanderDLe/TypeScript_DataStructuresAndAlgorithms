/**
 * 78. Subsets
 */

import { PrintMatrix } from '../utils/Utilities';

const subsets = (nums: number[]): number[][] => {
    let result: number[][] = [];

    const recurse = (i: number, subarr: number[]): void => {
        if (i === nums.length) result.push(subarr);
        else {
            recurse(i + 1, [...subarr, nums[i]]);
            recurse(i + 1, [...subarr]);
        }
    }
    recurse(0, []);
    return result;
}

export default () => {
    const nums = [1, 2, 3];
    PrintMatrix(subsets(nums));
};
