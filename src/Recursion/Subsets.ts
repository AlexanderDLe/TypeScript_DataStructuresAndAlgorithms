/**
 * 78. Subsets
 */

import { PrintMatrix } from '../utils/Utilities';

const subsetsA = (nums: number[]): number[][] => {
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

const subsetsB = (nums: number[]): number[][] => {
    const result: number[][] = [];

    const recurse = (index: number, subarr: number[]): void => {
        if (index === nums.length) result.push(subarr);
        else {
            recurse(index + 1, [...subarr]);
            recurse(index + 1, [...subarr, nums[index]])
        }
    }

    recurse(0, []);
    return result;
}

const subsetsC = (nums: number[]): number[][] => {
  const result: number[][] = [];

  const recurse = (index:number, subarr:number[]) => {
    if (index >= nums.length) {
      result.push([...subarr]);
      return;
    }

    recurse(index + 1, subarr);
    recurse(index + 1, [...subarr, nums[index]]);
  }
  recurse(0, []);
  return result;
}

const subsets = (nums: number[]): number[][] => {
  const result: number[][] = []

  const backtrack = (index:number, subarr:number[]) => {
    if (index >= nums.length) {
      result.push([...subarr]);
      return;
    }
    backtrack(index + 1, subarr);
    subarr.push(nums[index]);
    backtrack(index + 1, subarr);
    subarr.pop();
  }

  backtrack(0, []);
  return result;
}

export default () => {
    const nums = [1, 2, 3];
    PrintMatrix(subsets(nums));
};
