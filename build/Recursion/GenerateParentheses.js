"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 22. Generate Parentheses
 */
const Utilities_1 = require("../utils/Utilities");
const generateParentheses = (n) => {
    let result = [];
    const recurse = (opens, closes, str) => {
        if (str.length === n * 2)
            result.push(str);
        else {
            if (opens > 0)
                recurse(opens - 1, closes, str + '(');
            if (closes > opens)
                recurse(opens, closes - 1, str + ')');
        }
    };
    recurse(n, n, '');
    return result;
};
exports.default = () => {
    Utilities_1.PrintArray(generateParentheses(3));
};
