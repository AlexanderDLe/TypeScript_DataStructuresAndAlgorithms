"use strict";
/**
  37. Sudoku Solver
*/
Object.defineProperty(exports, "__esModule", { value: true });
const Utilities_1 = require("../utils/Utilities");
const sudokuRef = (board) => {
    const len = board.length;
    const checkValid = (num, row, col) => {
        // Check row and col
        for (let i = 0; i < len; i++) {
            if (board[row][i] === num)
                return false;
            if (board[i][col] === num)
                return false;
        }
        // Check submatrix
        let startRow = Math.floor(row / 3) * 3;
        let startCol = Math.floor(col / 3) * 3;
        for (let r = startRow; r < startRow + 3; r++) {
            for (let c = startCol; c < startCol + 3; c++) {
                if (board[r][c] === num)
                    return false;
            }
        }
        return true;
    };
    const tryDigits = (row, col) => {
        for (let i = 1; i <= 9; i++) {
            let char = i.toString();
            if (!checkValid(char, row, col))
                continue;
            board[row][col] = char;
            if (solveSudoku(row, col + 1))
                return true;
        }
        board[row][col] = '.';
        return false;
    };
    const solveSudoku = (row, col) => {
        if (col === len)
            col = 0, row++;
        if (row === len)
            return true;
        if (board[row][col] === '.')
            return tryDigits(row, col);
        return solveSudoku(row, col + 1);
    };
    solveSudoku(0, 0);
};
const sudoku = (board) => {
    const len = board.length;
    const checkValid = (num, row, col) => {
        // Check row and col
        for (let i = 0; i < len; i++) {
            if (board[row][i] === num)
                return false;
            if (board[i][col] === num)
                return false;
        }
        // Check submatrix
        let startRow = Math.floor(row / 3) * 3;
        let startCol = Math.floor(col / 3) * 3;
        for (let r = startRow; r < startRow + 3; r++) {
            for (let c = startCol; c < startCol + 3; c++) {
                if (board[r][c] === num)
                    return false;
            }
        }
        return true;
    };
    const tryDigits = (row, col) => {
        for (let i = 1; i <= 9; i++) {
            let char = i.toString();
            if (!checkValid(char, row, col))
                continue;
            board[row][col] = char;
            if (solveSudoku(row, col + 1))
                return true;
        }
        board[row][col] = '.';
        return false;
    };
    const solveSudoku = (row, col) => {
        if (col === len)
            col = 0, row++;
        if (row === len)
            return true;
        if (board[row][col] === '.')
            return tryDigits(row, col);
        else
            return solveSudoku(row, col + 1);
    };
    solveSudoku(0, 0);
};
exports.default = () => {
    let board = [
        ["5", "3", ".", ".", "7", ".", ".", ".", "."],
        ["6", ".", ".", "1", "9", "5", ".", ".", "."],
        [".", "9", "8", ".", ".", ".", ".", "6", "."],
        ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
        ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
        ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
        [".", "6", ".", ".", ".", ".", "2", "8", "."],
        [".", ".", ".", "4", "1", "9", ".", ".", "5"],
        [".", ".", ".", ".", "8", ".", ".", "7", "9"]
    ]; //
    sudoku(board);
    (0, Utilities_1.PrintMatrix)(board);
};
