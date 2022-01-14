"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const findAllDuplicateNumbers = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        let currVal = nums[i];
        while (currVal !== i + 1) {
            if (currVal <= 0 || currVal > nums.length)
                break;
            [nums[i], nums[currVal - 1]] = [nums[currVal - 1], nums[i]];
            currVal = nums[i];
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1)
            return i + 1;
    }
    return 0;
};
exports.default = () => {
    let arr1 = [-3, 1, 5, 4, 2];
    let arr2 = [3, -2, 0, 1, 2];
    let arr3 = [3, 2, 5, 1];
    console.log(findAllDuplicateNumbers(arr1));
    console.log(findAllDuplicateNumbers(arr2));
    console.log(findAllDuplicateNumbers(arr3));
};
