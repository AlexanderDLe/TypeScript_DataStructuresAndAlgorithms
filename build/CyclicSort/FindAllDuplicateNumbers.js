"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const findAllDuplicateNumbers = (nums) => {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        let currVal = nums[i];
        while (currVal !== i + 1) {
            if (currVal === nums[currVal - 1])
                break;
            [nums[i], nums[currVal - 1]] = [nums[currVal - 1], nums[i]];
            currVal = nums[i];
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1)
            result.push(nums[i]);
    }
    return result;
};
exports.default = () => {
    let arr1 = [3, 4, 4, 5, 5];
    let arr2 = [5, 4, 7, 2, 3, 5, 3];
    console.log(findAllDuplicateNumbers(arr1));
    console.log(findAllDuplicateNumbers(arr2));
};
