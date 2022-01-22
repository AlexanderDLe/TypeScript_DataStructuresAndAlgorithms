/**
 * Grokking the Coding Interview
*/

import { PrintArray } from "../utils/Utilities";

const subsets = (nums: number[]): number[][] => {
    let subsets:number[][] = [];

    subsets.push([]);
    for (let i = 0; i < nums.length; i++) {
        let currNum = nums[i];

        // We will take all existing subsets and insert the current num in them
        let n = subsets.length;
        for (let j = 0; j < n; j++) {
            // Create a new subset from the existing subset and insert curr into it
            let setClone = subsets[j].slice(0);
            setClone.push(currNum);
            subsets.push(setClone);
        }
    }
    return subsets;
}

const subsetsRecursion = (nums: number[]): number[][] => {
    let result: number[][] = [];

    const recurse = (index:number, subarr:number[]):void => {
        if (index === nums.length) {
            result.push(subarr.slice());
            return;
        }
        recurse(index + 1, subarr);
        recurse(index + 1, [...subarr, nums[index]]);
    }

    recurse(0, []);
    return result;
}

export default () => {
    let arr1 = [1, 3, 3];
    let arr2 = [1, 5, 3];

    console.log(subsets(arr1));
    console.log(subsets(arr2));
};
