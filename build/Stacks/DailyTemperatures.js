"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 739. Daily Temperatures
 */
const Utilities_1 = require("../utils/Utilities");
const dailyTemperatures = (T) => {
    let stack = [];
    let result = new Array(T.length).fill(0);
    for (let i = T.length - 1; i >= 0; i--) {
        let currTemp = T[i];
        while (stack.length) {
            let prevTemp = T[stack[stack.length - 1]];
            if (currTemp < prevTemp) {
                result[i] = stack[stack.length - 1] - i;
                break;
            }
            else {
                stack.pop();
            }
        }
        stack.push(i);
    }
    return result;
};
const dailyTemperaturesB = (T) => {
    let result = new Array(T.length).fill(0);
    let stack = [];
    for (let i = T.length - 1; i >= 0; i--) {
        while (stack.length && T[i] >= stack[stack.length - 1][0]) {
            stack.pop();
        }
        if (stack.length && T[i] < stack[stack.length - 1][0]) {
            result[i] = stack[stack.length - 1][1] - i;
        }
        stack.push([T[i], i]);
    }
    return result;
};
exports.default = () => {
    let T = [73, 74, 75, 71, 69, 72, 76, 73];
    Utilities_1.PrintArray(dailyTemperatures(T));
};
