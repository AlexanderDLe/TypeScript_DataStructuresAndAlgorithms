/**
 * 39. Combination Sum
 */

import { PrintMatrix } from '../utils/Utilities';

const combinationSum = (nums: number[], target: number): number[][] => {
    let result: number[][] = [];

    const recurse = (i: number, res: number[], sum: number) => {
        if (i === nums.length || sum < 0) return;
        if (sum === 0) return result.push(res.slice(0));

        recurse(i + 1, res.concat(), sum);
        if (nums[i] <= sum) recurse(i, res.concat(nums[i]), sum - nums[i]);
    };

    recurse(0, [], target);
    return result;
};

export default () => {
    const nums = [2, 3, 6, 7];
    const target = 7;
    PrintMatrix(combinationSum(nums, target));
};
