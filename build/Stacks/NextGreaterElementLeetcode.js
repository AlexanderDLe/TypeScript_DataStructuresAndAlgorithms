"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 496. Next Greater Element 1

  4  1  2     ->    1  3  4  2
  ^                             ^
  4 has no greater number in nums2. result is -1

  ------------------------------------------------

  4  1  2     ->    1  3  4  2
     ^                    ^
  the greatest number in nums2 after 1 is 3. result is 3.
  ------------------------------------------------

  4  1  2     ->    1  3  4  2
        ^                       ^
  there is no greater number after 2 in nums2. result is -1

  ********************************************************

  1   3   4   2
  3   4  -1   -1

  stack: [4, 3, 1]
  

  4 1 2   1 3 4 2
  v           ^
  ------------|
*/
const Utilities_1 = require("../utils/Utilities");
const nextGreaterElement = (nums1, nums2) => {
    const valueToNextGreater = {};
    const stack = [];
    for (let i = nums2.length - 1; i >= 0; i--) {
        let num = nums2[i];
        while (stack.length && num > stack[stack.length - 1]) {
            stack.pop();
        }
        if (!stack.length)
            valueToNextGreater[num] = -1;
        else
            valueToNextGreater[num] = stack[stack.length - 1];
        stack.push(num);
    }
    const result = [];
    for (let num of nums1) {
        result.push(valueToNextGreater[num]);
    }
    return result;
};
exports.default = () => {
    (0, Utilities_1.PrintArray)(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
};
