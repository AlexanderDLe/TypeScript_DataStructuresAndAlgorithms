/**
 * Grokking the Coding Interview
*/

import { PrintArray, PrintMatrix, PrintObject } from "../utils/Utilities";
let Heap = require('collections/heap');

const targetSum = (nums:number[], target:number): number => {
    const DP: any = {};

    const recurse = (index:number, currSum:number): number => {
        DP[index] = DP[index] || {};

        if (index === nums.length) {
            if (currSum === target) return 1;
            return 0;
        }

        let addSum = currSum + nums[index];
        let subSum = currSum - nums[index];

        let addRecursed = recurse(index + 1, addSum);
        let subRecursed = recurse(index + 1, subSum);

        let currStr = currSum.toString();

        DP[index][currStr] = addRecursed + subRecursed;
        return DP[index][currStr];
    }

    let result = recurse(0,0);
    return result;
}

export default () => {
    console.log(targetSum([1, 1, 2, 3], 1))
    console.log(targetSum([1, 2, 7, 1], 9))
};
