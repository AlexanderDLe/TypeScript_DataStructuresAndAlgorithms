"use strict";
/**
 * Grokking the Coding Interview
*/
Object.defineProperty(exports, "__esModule", { value: true });
const findAllMissingNumbers = (nums) => {
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        let currVal = nums[i];
        while (currVal !== i + 1) {
            if (currVal === nums[currVal])
                return currVal;
            [nums[i], nums[currVal]] = [nums[currVal], nums[i]];
            currVal = nums[i];
        }
    }
    return 0;
};
exports.default = () => {
    let arr1 = [1, 4, 4, 3, 2];
    let arr2 = [2, 1, 3, 3, 5, 4];
    let arr3 = [2, 4, 1, 4, 4];
    console.log(findAllMissingNumbers(arr1));
    console.log(findAllMissingNumbers(arr2));
    console.log(findAllMissingNumbers(arr3));
};
