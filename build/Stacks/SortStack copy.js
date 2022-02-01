"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Utilities_1 = require("../utils/Utilities");
const sortStackRef = (stack) => {
    const insert = (num) => {
        if (!stack.length || stack[stack.length - 1] < num) {
            stack.push(num);
            return;
        }
        let store = stack.pop();
        insert(num);
        stack.push(store);
    };
    const sort = () => {
        if (!stack.length)
            return;
        let store = stack.pop();
        sort();
        insert(store);
    };
    sort();
    return stack;
};
const sortStack = (stack) => {
    const insert = (num) => {
        if (!stack.length || num > stack[stack.length - 1]) {
            stack.push(num);
            return;
        }
        let store = stack.pop();
        insert(num);
        stack.push(store);
    };
    const sort = () => {
        if (!stack.length)
            return;
        let store = stack.pop();
        sort();
        insert(store);
    };
    sort();
    return stack;
};
exports.default = () => {
    let stack = [-5, 2, -2, 4, 3, 1];
    (0, Utilities_1.PrintArray)(sortStack(stack));
};
