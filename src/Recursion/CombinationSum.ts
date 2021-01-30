/**
 * 39. Combination Sum
 */

import { PrintMatrix } from '../utils/Utilities';

const combinationSum = (candidates: number[], target: number): number[][] => {
    let result: number[][] = [];

    const recurse = (i: number, subarr: number[], sum: number): void => {
        if (i >= candidates.length) return;
        recurse(i + 1, subarr, sum);

        sum += candidates[i];

        if (sum > target) return;
        if (sum === target) {
            result.push([...subarr, candidates[i]]);
            return;
        }
        if (sum < target) {
            recurse(i, [...subarr, candidates[i]], sum);
        }
    }
    recurse(0, [], 0);
    return result;
}

const combinationSumB = (candidates: number[], target: number): number[][] => {
    let result: number[][] = [];

    const recurse = (i: number, res: number[], sum: number) => {
        if (i === candidates.length || sum < 0) return;
        if (sum === 0) return result.push(res.slice(0));

        recurse(i + 1, res.concat(), sum);
        if (candidates[i] <= sum) recurse(i, res.concat(candidates[i]), sum - candidates[i]);
    };

    recurse(0, [], target);
    return result;
};

export default () => {
    const candidates = [2, 3, 6, 7];
    const target = 7;
    PrintMatrix(combinationSum(candidates, target));
};
