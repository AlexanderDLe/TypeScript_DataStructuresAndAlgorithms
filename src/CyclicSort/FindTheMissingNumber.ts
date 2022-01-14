/**
 * Grokking the Coding Interview
 * 
 * [4, 0, 3, 1]
 * 
 * [undefined, 0, 3, 1, 4]
 * 
 * 
*/

import { PrintArray } from "../utils/Utilities";

const findMissingNumberRef = (nums: number[]): number => {
    let n = nums.length;
    let i = 0;
    PrintArray(nums)

    while (i < n) {
        let j = nums[i];
        console.log(`i: ${i} | nums[i]: ${nums[i]} | j: ${j} | nums[j]: ${nums[j]}`)
        if (nums[i] < n && nums[i] !== nums[j]) {
            console.log('true');
            [nums[i], nums[j]] = [nums[j], nums[i]];
        } else {
            console.log('false');
            i += 1;
        }
        PrintArray(nums)
        console.log('')
    }

    for (i = 0; i < n; i++) {
        if (nums[i] !== i) {
          return i;
        }
      }
    
    return n;
}

const findMissingNumber = (nums: number[]): number => {
    let len = nums.length;

    for (let i = 0; i < nums.length; i++) {
        let currVal = nums[i];

        while (nums[i] !== nums[currVal]) {
            if (currVal === len) break;

            [nums[i], nums[currVal]] = [nums[currVal], nums[i]];
            currVal = nums[i];
        }
    }

    for (let i = 0; i < len; i++) {
        if (i !== nums[i]) return i;
    }

    return len;
}


export default () => {
    let arr1 = [4, 0, 3, 1];
    let arr2 = [8, 3, 5, 2, 4, 6, 0, 1];

    console.log(findMissingNumber(arr1));
    console.log(findMissingNumber(arr2));
};