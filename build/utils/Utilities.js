"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrintArray = function (arr) {
    var str = '';
    for (var i = 0; i < arr.length; i++) {
        str += arr[i];
        if (i < arr.length - 1) {
            str += ' | ';
        }
    }
    console.log(str);
};
