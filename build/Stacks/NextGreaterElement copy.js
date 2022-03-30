"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 *
 */
const Utilities_1 = require("../utils/Utilities");
const nextGreaterElement = (array) => {
    const maxVal = Math.max(...array);
    const maxIndex = array.indexOf(maxVal);
    const stack = [];
    const result = new Array(array.length).fill(0);
    result[maxIndex] = -1;
    stack.push(maxVal);
    const process = (index) => {
        let curr = array[index];
        while (stack.length && curr >= stack[stack.length - 1]) {
            stack.pop();
        }
        result[index] = stack.length ? stack[stack.length - 1] : -1;
        stack.push(curr);
    };
    for (let i = maxIndex - 1; i >= 0; i--) {
        process(i);
    }
    for (let i = array.length - 1; i > maxIndex; i--) {
        process(i);
    }
    return result;
};
exports.default = () => {
    let array = [2, 5, -3, -4, 6, 7, 2];
    (0, Utilities_1.PrintArray)(nextGreaterElement(array));
};
