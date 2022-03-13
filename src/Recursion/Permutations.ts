/**
 * 46. Permutations
 * 
 * []
 * 
 * [1] [2] [3] [4]
 * 
 * 
 */
import { PrintMatrix } from '../utils/Utilities';

const permuteA = (nums: number[]): number[][] => {
    let res: number[][] = [];
    res.push(nums);
    
    const recurse = (index: number): void => {
        for (let i = index; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
                res.push([...nums]);
                recurse(i + 1);
                [nums[i], nums[j]] = [nums[j], nums[i]];
            }
        }
    }

    recurse(0);

    return res;
}

const permuteB = (nums: number[]): number[][] => {
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

const permuteC = (nums: number[]): number[][] => {
    let result: number[][] = [];

    const recurse = (index: number): void => {
        if (index === nums.length) {
            result.push(nums.slice(0));
            return;
        }

        for (let i = index; i < nums.length; i++) {
            [nums[index], nums[i]] = [nums[i], nums[index]];
            recurse(index + 1);
            [nums[index], nums[i]] = [nums[i], nums[index]];
        }
    }
    
    recurse(0);
    return result;
}

const permuteD = (nums: number[]): number[][] => {
    if (!nums.length) return [];
    const result: number[][] = [];

    const DFS = (index: number): void => {
        if (index === nums.length) {
            result.push([...nums]);
            return;
        }

        for (let i = index; i < nums.length; i++) {
            [nums[index], nums[i]] = [nums[i], nums[index]];
            DFS(index + 1);
            [nums[index], nums[i]] = [nums[i], nums[index]];
        }
    }
    DFS(0);
    return result;
}

const permute = (nums: number[]): number[][] => {
  let result: number[][] = []

  const recurse = (index:number) => {
    if (index >= nums.length) {
      result.push([...nums]);
      return;
    }

    for (let i = index; i < nums.length; i++) {
      [nums[index], nums[i]] = [nums[i], nums[index]];
      recurse(index + 1);
      [nums[index], nums[i]] = [nums[i], nums[index]];
    }
  }
  recurse(0);
  return result;
}

export default () => {
    let nums = [1, 2, 3, 4];
    PrintMatrix(permute(nums));
};
