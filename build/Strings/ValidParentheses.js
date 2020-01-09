"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isValid = function (s) {
    var stack = [];
    var map = { '(': ')', '{': '}', '[': ']' };
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var c = s_1[_i];
        if (map[c])
            stack.push(c);
        else if (map[stack.pop()] !== c)
            return false;
    }
    return stack.length ? false : true;
};
exports.default = (function () {
    var s1 = '([)]';
    var s2 = '{[]}';
    var s3 = '()[]{}';
    if (isValid(s3))
        console.log('True');
    else
        console.log('False');
});
