"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrintObject = exports.PrintMatrix = exports.PrintArray = void 0;
const PrintArray = (arr) => {
    if (!arr)
        return;
    let str = '[ ';
    for (let i = 0; i < arr.length; i++) {
        str += arr[i];
        if (i < arr.length - 1) {
            str += ' | ';
        }
    }
    str += ' ]';
    console.log(str);
};
exports.PrintArray = PrintArray;
const PrintMatrix = (matrix) => {
    let str = '[\n';
    for (let i = 0; i < matrix.length; i++) {
        str += '\t[ ';
        for (let j = 0; j < matrix[i].length; j++) {
            str += matrix[i][j];
            str += j < matrix[i].length - 1 ? ' | ' : '';
        }
        str += ' ]\n';
    }
    str += ']\n';
    console.log(str);
};
exports.PrintMatrix = PrintMatrix;
const PrintObject = (obj) => {
    let str = '{\n';
    for (let item in obj) {
        str += '\t';
        if (obj.hasOwnProperty(item)) {
            str += `${item}: ${obj[item]}\n`;
        }
    }
    str += '}\n';
    console.log(str);
};
exports.PrintObject = PrintObject;
