'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
/**
 * 739. Daily Temperatures
 */
var Utilities_1 = require('../utils/Utilities');
var dailyTemperatures = function(T) {
    var result = new Array(T.length).fill(0);
    var stack = [];
    for (var i = T.length - 1; i >= 0; i--) {
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
exports.default = function() {
    var T = [73, 74, 75, 71, 69, 72, 76, 73];
    Utilities_1.PrintArray(dailyTemperatures(T));
};
