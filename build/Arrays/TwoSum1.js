'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
/**
 * 1. Two Sum 1
 */
var Utilities_1 = require('../utils/Utilities');
var twoSum = function(nums, target) {
    var answer = [0, 0];
    var map = {};
    for (var i = 0; i < nums.length; i++) {
        var difference = target - nums[i];
        if (map[difference]) {
            answer[0] = map[difference] - 1;
            answer[1] = i;
            break;
        } else {
            map[nums[i]] = i + 1;
        }
    }
    Utilities_1.PrintObject(map);
    return answer;
};
exports.default = function() {
    var nums = [2, 7, 11, 15];
    Utilities_1.PrintArray(twoSum(nums, 9));
};
