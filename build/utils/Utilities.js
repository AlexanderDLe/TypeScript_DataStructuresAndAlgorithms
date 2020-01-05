"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrintArray = function (arr) {
    var str = '[ ';
    for (var i = 0; i < arr.length; i++) {
        str += arr[i];
        if (i < arr.length - 1) {
            str += ' | ';
        }
    }
    str += ' ]';
    console.log(str);
};
exports.PrintMatrix = function (matrix) {
    var str = '[\n';
    for (var i = 0; i < matrix.length; i++) {
        str += '\t[ ';
        for (var j = 0; j < matrix[i].length; j++) {
            str += matrix[i][j];
            str += j < matrix[i].length - 1 ? ' | ' : '';
        }
        str += ' ]\n';
    }
    str += ']\n';
    console.log(str);
};
