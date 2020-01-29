/**
 * 560. Subarray Sum Equals K
 */

import { PrintObject } from '../utils/Utilities';

type Map = { [key: number]: number };
const subarraySum = (nums: number[], k: number): number => {
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

export default () => {
    const nums = [1, 2, 3, 4, -2, 9];
    const k = 7;
    console.log(subarraySum(nums, k));
    console.log(nums);
};
