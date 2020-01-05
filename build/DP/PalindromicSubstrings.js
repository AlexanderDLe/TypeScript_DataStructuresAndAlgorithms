"use strict";
/**
 * 647. Palindromic Substrings
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Utilities_1 = require("../utils/Utilities");
var countSubstrings = function (s) {
    var count = 0;
    var matrix = [];
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var char = s_1[_i];
        matrix.push(new Array(s.length).fill(0));
    }
    for (var i = 0; i < s.length; i++) {
        matrix[i][i] = 1;
        count++;
    }
    for (var col = 1; col < s.length; col++) {
        for (var row = 0; row < col; row++) {
            if (row === col - 1 && s[col] === s[row]) {
                matrix[row][col] = 1;
                count++;
            }
            else if (matrix[row + 1][col - 1] === 1 && s[col] === s[row]) {
                matrix[row][col] = 1;
                count++;
            }
        }
    }
    Utilities_1.PrintMatrix(matrix);
    return count;
};
exports.default = (function () {
    var str = 'aabaaca';
    console.log(countSubstrings(str));
});
