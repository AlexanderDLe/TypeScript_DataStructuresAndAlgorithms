"use strict";
/**
 * 2104. Sum of Subarray Ranges




  1 2 3
      ^


  Stack = [2, 3]
  Result= [0, 1, ]

 */
Object.defineProperty(exports, "__esModule", { value: true });
const Utilities_1 = require("../utils/Utilities");
const subarrayMinsRef = (A) => {
    const getMaxRange = (nums) => {
        (0, Utilities_1.PrintArray)(nums);
        const stack = [-1];
        nums.push(Infinity);
        let res = 0;
        for (let i = 0; i < nums.length; i++) {
            let val = nums[i];
            console.log(`-----------------`);
            console.log(`val: ${val}`);
            while (nums[stack[stack.length - 1]] < val) {
                const MOST_MAX = stack.pop();
                const LEFT_BOUNDARY = stack[stack.length - 1];
                const LEFT_RANGE = MOST_MAX - LEFT_BOUNDARY; //
                const RIGHT_RANGE = i - MOST_MAX;
                (0, Utilities_1.PrintArray)(nums);
                console.log(`MOST_MAX: ${MOST_MAX} | LEFT_BOUNDARY: ${LEFT_BOUNDARY} | LEFT_RANGE: ${LEFT_RANGE} | RIGHT_RANGE: ${RIGHT_RANGE}`);
                console.log(`nums[MOST_MAX](${nums[MOST_MAX]}) * LEFT_RANGE(${LEFT_RANGE}) * RIGHT_RANGE(${RIGHT_RANGE}): ${nums[MOST_MAX] * LEFT_RANGE * RIGHT_RANGE}`);
                res += nums[MOST_MAX] * LEFT_RANGE * RIGHT_RANGE;
            }
            stack.push(i);
            (0, Utilities_1.PrintArray)(stack);
            console.log(`res: ${res}`);
        }
        return res;
    };
    const N = A.map(n => -n);
    return getMaxRange(A) + getMaxRange(N);
};
const subarrayMins = (nums) => {
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        let smallest = nums[i];
        let biggest = nums[i];
        for (let j = i; j < nums.length; j++) {
            smallest = Math.min(smallest, nums[j]);
            biggest = Math.max(biggest, nums[j]);
            res += biggest - smallest;
        }
    }
    return res;
};
exports.default = () => {
    console.log(subarrayMins([1, 2, 3, 4]));
    // console.log(subarrayMins([1,3,3]));
};
