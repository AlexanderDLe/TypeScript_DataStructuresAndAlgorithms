"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 1. Two Sum 2
 */
var Utilities_1 = require("../utils/Utilities");
var twoSum = function (numbers, target) {
    var L = 0;
    var R = numbers.length - 1;
    var answer = [0, 0];
    while (L < R) {
        var sum = numbers[L] + numbers[R];
        if (sum === target) {
            answer[0] = L + 1;
            answer[1] = R + 1;
            break;
        }
        else if (sum > target) {
            R--;
        }
        else {
            L++;
        }
    }
    return answer;
};
exports.default = (function () {
    var numbers = [2, 7, 11, 15];
    Utilities_1.PrintArray(twoSum(numbers, 9));
});
