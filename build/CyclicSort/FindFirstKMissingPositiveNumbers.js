"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const findFirstKMissingPositiveNumbers = (nums, k) => {
    for (let i = 0; i < nums.length; i++) {
        let currVal = nums[i];
        while (currVal !== i + 1) {
            if (currVal <= 0 || currVal > nums.length)
                break;
            if (currVal === nums[currVal - 1])
                break;
            [nums[i], nums[currVal - 1]] = [nums[currVal - 1], nums[i]];
            currVal = nums[i];
        }
    }
    let result = [];
    let extras = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (!k)
            break;
        if (nums[i] !== i + 1) {
            result.push(i + 1);
            extras.add(nums[i]);
            k--;
        }
    }
    let n = nums.length + 1;
    while (k > 0) {
        if (!extras.has(n)) {
            result.push(n);
            k--;
        }
        n++;
    }
    return result;
};
exports.default = () => {
    let arr1 = [3, -1, 4, 5, 5], k1 = 3;
    let arr2 = [2, 3, 4], k2 = 3;
    let arr3 = [-2, -3, 4], k3 = 2;
    console.log(findFirstKMissingPositiveNumbers(arr1, k1));
    console.log(findFirstKMissingPositiveNumbers(arr2, k2));
    console.log(findFirstKMissingPositiveNumbers(arr3, k3));
};
