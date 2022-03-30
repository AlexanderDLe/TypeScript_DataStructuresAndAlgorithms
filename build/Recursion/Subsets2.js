"use strict";
/**
 * 90. Subsets 2
 *
 * [1, 2, 2, 2]
 *
 * [] [1]
 *                                                        1
 *
 * [] [1] [2] [1, 2]
 * |Prev|                                                 1,2
 *
 * [] [1] [2] [1, 2] [2, 2] [1, 2, 2]
 *        |  Prev  |                                      1,2,2
 *
 * [] [1] [2] [1, 2] [2, 2] [1, 2, 2] [2,2,2] [1,2,2,2]
 *                   |  Prev added  |                     1,2,2,2
 *
 * Pattern: When we add a duplicate value, we only append
 * another duplicate to those subsets that were most recently added.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Utilities_1 = require("../utils/Utilities");
const subsetsShouldveWorked = (nums) => {
    nums = nums.sort((a, b) => a - b);
    const result = [];
    const nextIsDuplicate = (i) => {
        if (i < nums.length - 1 && nums[i] === nums[i + 1])
            return true;
        return false;
    };
    const recurse = (index, subarr) => {
        if (index >= nums.length) {
            result.push([...subarr]);
            return;
        }
        if (nextIsDuplicate(index)) {
            result.push([...subarr]);
            recurse(index + 1, [...subarr, nums[index]]);
            return;
        }
        recurse(index + 1, subarr);
        recurse(index + 1, [...subarr, nums[index]]);
    };
    recurse(0, []);
    return result;
};
const subsetsWierd = (nums) => {
    nums = nums.sort((a, b) => a - b);
    const result = [];
    const recurse = (len, start, subarr) => {
        if (subarr.length === len) {
            result.push([...subarr]);
            return;
        }
        for (let i = start; i < nums.length; i++) {
            if (i !== start && nums[i - 1] === nums[i])
                continue;
            subarr.push(nums[i]);
            recurse(len, i + 1, subarr);
            subarr.pop();
        }
    };
    for (let len = 0; len <= nums.length; len++) {
        recurse(len, 0, []);
    }
    return result;
};
const subsetsA = (nums) => {
    nums = nums.sort((a, b) => a - b);
    let result = [[]];
    let prevResults = [];
    const isDuplicate = (i) => {
        if (i > 0 && nums[i] === nums[i - 1])
            return true;
        return false;
    };
    for (let i = 0; i < nums.length; i++) {
        let newResult = [];
        if (!isDuplicate(i)) {
            for (let res of result) {
                newResult.push([...res, nums[i]]);
            }
        }
        if (isDuplicate(i)) {
            for (let res of prevResults) {
                newResult.push([...res, nums[i]]);
            }
        }
        prevResults = newResult;
        result = [...result, ...newResult];
    }
    return result;
};
/*
  []

  [] [1] prevAdded = 1

  [] [1] [2] [1, 2] prevAdded = 2
  
  isDupe = true
  len = 4 - 2  = 2
  
  [] [1] [2] [1, 2]
          ^
        start
*/
const subsets = (nums) => {
    nums.sort((a, b) => a - b);
    let result = [[]];
    let prevAdded = 0;
    const isDuplicate = (i) => {
        if (i > 0 && nums[i] === nums[i - 1])
            return true;
        return false;
    };
    for (let i = 0; i < nums.length; i++) {
        let nextSubsets = [];
        let num = nums[i];
        let start = isDuplicate(i) ? result.length - prevAdded : 0;
        prevAdded = 0;
        for (let j = start; j < result.length; j++) {
            nextSubsets.push([...result[j], num]);
            prevAdded++;
        }
        result.push(...nextSubsets);
    }
    return result;
};
exports.default = () => {
    const nums = [1, 2, 2];
    (0, Utilities_1.PrintMatrix)(subsets(nums));
};
