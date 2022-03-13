"use strict";
/**
 AlgoExpert
*/
Object.defineProperty(exports, "__esModule", { value: true });
const convert1DArrayInto2DArray = (original, m, n) => {
    if (original.length !== m * n)
        return [];
    let result = [];
    let row = [];
    for (let i = 0; i < original.length; i++) {
        let num = original[i];
        row.push(num);
        if (i % n === n - 1) {
            result.push([...row]);
            row = [];
        }
    }
    return result;
};
exports.default = () => {
    // const board = [1,2,3,4,5,6,7,8,9]
    const board = [2];
    console.log(convert1DArrayInto2DArray(board, 1, 1));
    // PrintMatrix(board);
};
