/**
 * 560. Subarray Sum Equals K
 */

import { PrintObject } from '../utils/Utilities';

type Map = { [key: number]: number };
const subarraySumRef = (nums: number[], k: number): number => {
    let result = 0;
    let sum = 0;
    let map: Map = {};
    map[0] = 1;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (map[sum - k]) result += map[sum - k]; //
        map[sum] = (map[sum] || 0) + 1;
    }

    return result;
};

const subarraySum = (nums: number[], k: number): number => {
  let sum = 0;
  let map: any = {0:1};
  let result = 0;

  for (let num of nums) {
    sum += num;
    if ((sum - k) in map) result += map[sum - k];
    map[sum] = (map[sum] || 0) + 1;
  }

  return result;
}

export default () => {
  const nums = [1, 2, 3, 4, -2, 9];
  const k = 7;
  console.log(subarraySum(nums, k));
  console.log(subarraySum([1,1,1], 2));
  console.log(subarraySum([1,2,3], 3));
};
