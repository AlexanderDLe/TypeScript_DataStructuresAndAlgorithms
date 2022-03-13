"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 22. Generate Parentheses
 */
const Utilities_1 = require("../utils/Utilities");
const generateParenthesesOld = (n) => {
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
const generateParenthesesA = (n) => {
    let result = [];
    const recurse = (opens, closes, str) => {
        if (str.length === n * 2) {
            result.push(str);
            return;
        }
        if (opens > 0)
            recurse(opens - 1, closes, str + '(');
        if (closes > 0 && closes > opens)
            recurse(opens, closes - 1, str + ')');
    };
    recurse(n, n, '');
    return result;
};
const generateParentheses = (n) => {
    let result = [];
    const recurse = (opens, closes, substr) => {
        if (!opens && !closes) {
            result.push(substr);
            return;
        }
        if (opens)
            recurse(opens - 1, closes, substr + '(');
        if (closes > opens)
            recurse(opens, closes - 1, substr + ')');
    };
    recurse(n, n, '');
    return result;
};
exports.default = () => {
    (0, Utilities_1.PrintArray)(generateParentheses(3));
};
