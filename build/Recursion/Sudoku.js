"use strict";
/**
[
    [ 7 | 8 | 3 | 4 | 0 | 0 | 1 | 2 | 0 ]
    [ 6 | 0 | 0 | 0 | 7 | 5 | 0 | 0 | 9 ]
    [ 0 | 0 | 0 | 6 | 0 | 1 | 0 | 7 | 8 ]
    [ 0 | 0 | 7 | 0 | 4 | 0 | 2 | 6 | 0 ]
    [ 0 | 0 | 1 | 0 | 5 | 0 | 9 | 3 | 0 ]
    [ 9 | 0 | 4 | 0 | 6 | 0 | 0 | 0 | 5 ]
    [ 0 | 7 | 0 | 3 | 0 | 0 | 0 | 1 | 2 ]
    [ 1 | 2 | 0 | 0 | 0 | 7 | 4 | 0 | 0 ]
    [ 0 | 4 | 9 | 2 | 0 | 6 | 0 | 0 | 7 ]
]
*/
Object.defineProperty(exports, "__esModule", { value: true });
const Utilities_1 = require("../utils/Utilities");
const sudoku = (board) => {
    const len = 9;
    const checkValidEntry = (row, col, val) => {
        // Check row
        for (let i = 0; i < len; i++) {
            if (i === col)
                continue;
            if (board[row][i] === val)
                return false;
        }
        // Check cols
        for (let i = 0; i < len; i++) {
            if (i === row)
                continue;
            if (board[i][col] === val)
                return false;
        }
        // Check subboard
        let rowStart = Math.floor(row / 3) * 3;
        let colStart = Math.floor(col / 3) * 3;
        for (let r = rowStart; r < rowStart + 3; r++) {
            for (let c = colStart; c < colStart + 3; c++) {
                if (board[r][c] === val)
                    return false;
            }
        }
        return true;
    };
    const tryDigitsAtPosition = (row, col) => {
        for (let i = 1; i < 10; i++) {
            if (!checkValidEntry(row, col, i))
                continue;
            board[row][col] = i;
            if (solveSudoku(row, col + 1))
                return true;
        }
        board[row][col] = 0;
        return false;
    };
    const solveSudoku = (row, col) => {
        if (col === len)
            col = 0, row++;
        if (row === len)
            return true;
        if (board[row][col] === 0)
            return tryDigitsAtPosition(row, col);
        return solveSudoku(row, col + 1);
    };
    solveSudoku(0, 0);
    return board;
};
exports.default = () => {
    let board = [
        [7, 8, 0, 4, 0, 0, 1, 2, 0],
        [6, 0, 0, 0, 7, 5, 0, 0, 9],
        [0, 0, 0, 6, 0, 1, 0, 7, 8],
        [0, 0, 7, 0, 4, 0, 2, 6, 0],
        [0, 0, 1, 0, 5, 0, 9, 3, 0],
        [9, 0, 4, 0, 6, 0, 0, 0, 5],
        [0, 7, 0, 3, 0, 0, 0, 1, 2],
        [1, 2, 0, 0, 0, 7, 4, 0, 0],
        [0, 4, 9, 2, 0, 6, 0, 0, 7],
    ];
    (0, Utilities_1.PrintMatrix)(sudoku(board));
};
