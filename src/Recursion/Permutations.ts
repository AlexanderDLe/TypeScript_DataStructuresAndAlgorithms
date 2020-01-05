/**
 * 46. Permutations
 */
import { PrintMatrix } from '../utils/Utilities';

const permute = (nums: number[]): number[][] => {
    let result: number[][] = [];

    const recursion = (index: number) => {
        if (index === nums.length) {
            result.push(nums.slice(0));
        }
        for (let i = index; i < nums.length; i++) {
            [nums[index], nums[i]] = [nums[i], nums[index]];
            recursion(index + 1);
            [nums[index], nums[i]] = [nums[i], nums[index]];
        }
    };
    recursion(0);
    return result;
};

export default () => {
    let nums = [1, 2, 3];
    PrintMatrix(permute(nums));
};
