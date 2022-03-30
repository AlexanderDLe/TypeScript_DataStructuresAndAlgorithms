/**
 * 448. Find All Numbers Disappeared In An Array
 */
import { PrintArray } from '../utils/Utilities';

const findDisappearedNumbersA = (nums: number[]): number[] => {
    let result: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        let numToFlip = Math.abs(nums[i]);
        nums[numToFlip - 1] = - Math.abs(nums[numToFlip - 1]);
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) result.push(i + 1);
    }

    return result;
}

const findDisappearedNumbersB = (nums: number[]): number[] => {
    let result: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        let val = Math.abs(nums[i]);
        nums[val - 1] = -Math.abs(nums[val - 1]);
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) result.push(i + 1);
    }

    return result;
}

const findDisappearedNumbersSwapping = (nums: number[]): number[] => {
    let result: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === i + 1) continue;
        else {
            let temp = nums[i];
            nums[i] = 0;

            while (temp) {
                console.log(temp);
                if (nums[temp - 1] === temp) temp = 0;
                else {
                    let swap = nums[temp - 1];
                    nums[temp - 1] = temp;
                    temp = swap;
                }
            }
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) result.push(i + 1);
    }

    return result;
};

/**
 * Strategy: Iterate through the array, for numbers that have occured,
 * then flip their corresponding entry in the array as negative.
 *
 * By the end of the loop, indexes of the positive values are numbers are missing.
 */
const findDisappearedNumbersFlipping = (nums: number[]): number[] => {
    let result = [];
    const abs = Math.abs;
    for (let i = 0; i < nums.length; i++) {
        let num = abs(nums[i]);
        nums[num - 1] = -abs(nums[num - 1]);
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) result.push(i + 1);
    }
    return result;
};

const findDisappearedNumbers = (nums: number[]): number[] => {
  let result: number[] = [];

  // Cyclic sort all the numbers. If you find a duplicate number then
  // break current loop and continue next.
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] !== i + 1) {
      let val = nums[i];
      
      if (nums[i] === nums[val - 1]) break;
      [nums[i], nums[val - 1]] = [nums[val - 1], nums[i]];
    }
  }

  // Iterate once more - if you encounter a number not in its correct position,
  // then that its index + 1 is a missing number (zero index array)
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) result.push(i + 1);
  }

  return result;
}

export default () => {
    const nums = [4, 3, 2, 7, 8, 2, 3, 1];
    PrintArray(findDisappearedNumbers(nums));
};
