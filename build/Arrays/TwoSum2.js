"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 1. Two Sum 2
 */
const Utilities_1 = require("../utils/Utilities");
let twoSum = (numbers, target) => {
    let L = 0;
    let R = numbers.length - 1;
    let answer = [0, 0];
    while (L < R) {
        let sum = numbers[L] + numbers[R];
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
exports.default = () => {
    let numbers = [2, 7, 11, 15];
    (0, Utilities_1.PrintArray)(twoSum(numbers, 9));
};
