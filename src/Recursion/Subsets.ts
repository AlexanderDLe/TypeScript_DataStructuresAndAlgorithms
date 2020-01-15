/**
 * 78. Subsets
 */

import { PrintMatrix } from '../utils/Utilities';

const subsets = (nums: number[]): number[][] => {
    let result: number[][] = [];

    const recurse = (index: number, res: number[]): void => {
        if (index === nums.length) {
            result.push(res.slice(0));
            return;
        }
        recurse(index + 1, res);
        recurse(index + 1, res.concat(nums[index]));
    };

    recurse(0, []);
    return result;
};

export default () => {
    const nums = [1, 2, 3];
    PrintMatrix(subsets(nums));
};
