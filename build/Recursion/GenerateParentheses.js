"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 22. Generate Parentheses
 */
const Utilities_1 = require("../utils/Utilities");
const generateParentheses = (n) => {
    let result = [];
    const recurse = (str, opens, closes) => {
        if (str.length === n * 2) {
            result.push(str);
            return;
        }
        if (opens > 0)
            recurse(str + '(', opens - 1, closes);
        if (closes > opens)
            recurse(str + ')', opens, closes - 1);
    };
    recurse('', n, n);
    return result;
};
exports.default = () => {
    Utilities_1.PrintArray(generateParentheses(3));
};
