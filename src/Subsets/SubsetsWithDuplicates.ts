/**
 * Grokking the Coding Interview
 * 
 * [1, 3, 3]
 * 
 * [[]]
 * 
 ************************************************

 * [[], [1]]
 * 
 ************************************************ 
 * 
 * [[], [1], [3], [1, 3]]
 * 
 * [| [], [1], | [3], [1, 3]]     3 is next, but we've already added 3 to some
 *    Added 3  |   Freshly        Add only to those freshly made
 *    already  |     made
 * 
 ************************************************ 

 * [| [], [1], [3], [1, 3], | [3, 3], [1, 3, 3]]
 *     3 already added      |     Just Made
 * 
*/

import { PrintArray } from "../utils/Utilities";

const subsetsA = (nums: number[]): number[][] => {
    nums = nums.sort((a, b) => a - b);
    let subsets: number[][] = [];
    subsets.push([]);
    
    // Keep track of those freshly made, increment only when next is duplicate
    let freshlyMade = 0
    for (let i = 0; i < nums.length; i++) {
        let currNum = nums[i];
        let subLen = subsets.length;

        // If freshlyMade > 0, that means there is a duplicate
        // Therefore instead of starting at 0, we start right at the beginning
        // of those freshly made.
        let start = freshlyMade > 0 ? subLen - freshlyMade : 0;
        freshlyMade = 0;

        for (let j = start; j < subLen; j++) {
            let clone = subsets[j].slice(0);
            clone.push(currNum);
            subsets.push(clone);

            // If next num on nums is duplicate, increment freshlyMade
            if (nums[i] === nums[i + 1]) freshlyMade++;
        }

    }
    
    return subsets;
}

const subsets = (nums: number[]): number[][] => {
    nums = nums.sort((a, b) => a - b);
    let subsets: number[][] = []
    subsets.push([]);

    let startIndex = 0;
    let endIndex = 0;

    for (let i = 0; i < nums.length; i++) {
        startIndex = 0;
        
        // If current and the previous elements are the same, create new
        // subsets only from the subsets added in previous steps
        if (i > 0 && nums[i] === nums[i - 1]) {
            startIndex = endIndex + 1;
        }

        endIndex = subsets.length - 1;
        for (let j = startIndex; j < endIndex + 1; j++) {
            // create a new subset from the existing subset 
            // and add the current element to it
            let clone = subsets[j].slice(0);
            clone.push(nums[i]);
            subsets.push(clone);
        }
    }

    return subsets;
}

export default () => {
    let arr1 = [1, 3, 3];
    let arr2 = [1, 5, 3, 3, 3];

    console.log(subsets(arr1));
    console.log(subsets(arr2));
};
