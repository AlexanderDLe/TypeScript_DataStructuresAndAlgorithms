"use strict";
/**
 * Grokking the Coding Interview
 *
 * BFS Method (Easier to formulate, reason, and visualize):
 *
 * Let’s take the example-1 mentioned above to generate all the permutations. Following a BFS approach, we will consider one number at a time:

 * If the given set is empty then we have only an empty permutation set: []
 * Let’s add the first element (1), the permutations will be: [1]
 *
 * Let’s add the second element (3), the permutations will be: [3,1], [1,3]
 *
 * Let’s add the third element (5), the permutations will be:
 * [5,3,1], [3,5,1], [3,1,5], [5,1,3], [1,5,3], [1,3,5]
 *
 * Let’s analyze the permutations in the 3rd and 4th step.
 * How can we generate permutations in the 4th step from the permutations of the 3rd step?
 *
 * If we look closely, we will realize that when we add a new number (5), we take each permutation of the previous step and insert the new number in every position to generate the new permutations. For example, inserting ‘5’ in different positions of [3,1] will give us the following permutations:
 *
 * Inserting ‘5’ before ‘3’: [5,3,1]
 * Inserting ‘5’ between ‘3’ and ‘1’: [3,5,1]
 * Inserting ‘5’ after ‘1’: [3,1,5]
 *
 ************************************************************************
 
 * Recursion Method:
 *
 * index = 0    x = index | i = i
 *
 * [1, 2, 3]    Loop through, i = index, swap index and i. Call recursion.
 * xi           If length === nums.length, then push into result and return.
 *
 ************************************************************************
 *
 * [1, 2, 3]        Swap, then recurse next.
 *     xi
 *
 ************************************************************************
 *
 * [1, 2, 3]        Swap, then recurse next.
 *        xi
 *
 ************************************************************************
 *
 * [1, 2, 3]        x = nums.length, push result.
 *            xi    Go back to previous recursion branch.
 *
 ************************************************************************
 *
 * [1, 2, 3]
 *        xi        Branch ends.
 *
 ************************************************************************
 *
 * [1, 3, 2]        Swap, then recurse next.
 *     x  i
 *
 ************************************************************************
 *
 * [1, 3, 2]        Recurse next.
 *       xi
 *
 ************************************************************************
 *
 * [1, 3, 2]        x = nums.length, push result.
 *           xi     Go back to previous recursion branch.
 *
 ************************************************************************
 *
 * [1, 2, 3]        Branch reswaps to previous.
 *     x  i         Branch ends.
 *
 ************************************************************************
 *
 * [2, 1, 3]        Swap then recurse next.
 *  x  i
 *
 ************************************************************************
 *
 * [2, 1, 3]        Recurse next.
 *     xi
 *
 ************************************************************************
 *
 * [2, 1, 3]        Recurse next.
 *        xi
 *
 ************************************************************************
 *
 * [2, 1, 3]        Recurse next.
 *            xi
 *
 ************************************************************************
 *
 * ETC.
 *
*/
Object.defineProperty(exports, "__esModule", { value: true });
const permutationsSubsetsBFS = (nums) => {
    let result = [];
    result.push([nums[0]]);
    for (let i = 1; i < nums.length; i++) {
        let nextResult = [];
        let curr = nums[i];
        for (let subarr of result) {
            for (let j = 0; j <= subarr.length; j++) {
                let copy = subarr.slice(0);
                copy.splice(j, 0, curr);
                nextResult.push(copy);
            }
        }
        result = nextResult;
    }
    return result;
};
const permutationsRecursionDFS = (nums) => {
    const result = [];
    const recurse = (index) => {
        if (index === nums.length) {
            result.push(nums.slice(0));
            return;
        }
        for (let i = index; i < nums.length; i++) {
            [nums[index], nums[i]] = [nums[i], nums[index]];
            recurse(index + 1);
            [nums[index], nums[i]] = [nums[i], nums[index]];
        }
    };
    recurse(0);
    return result;
};
exports.default = () => {
    let arr1 = [1, 2, 3];
    console.log(permutationsSubsetsBFS(arr1));
};
