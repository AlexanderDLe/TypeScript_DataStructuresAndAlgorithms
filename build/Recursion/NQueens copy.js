"use strict";
/**
  51. N-Queens
*/
Object.defineProperty(exports, "__esModule", { value: true });
const Utilities_1 = require("../utils/Utilities");
const nQueens = (n) => {
    let takenRows = new Set();
    let takenCols = new Set();
    let takenNegativeDiagonals = new Set();
    let takenPositiveDiagonals = new Set();
    let board = new Array(n).fill(0);
    board = board.map(x => new Array(n).fill('.'));
    let result = [];
    const checkValid = (row, col) => {
        if (takenRows.has(row))
            return false;
        if (takenCols.has(col))
            return false;
        let negativeDiagonal = col - row;
        let positiveDiagonal = row + col;
        if (takenNegativeDiagonals.has(negativeDiagonal))
            return false;
        if (takenPositiveDiagonals.has(positiveDiagonal))
            return false;
        return true;
    };
    const add = (row, col) => {
        takenRows.add(row);
        takenCols.add(col);
        takenNegativeDiagonals.add(col - row);
        takenPositiveDiagonals.add(col + row);
    };
    const remove = (row, col) => {
        takenRows.delete(row);
        takenCols.delete(col);
        takenNegativeDiagonals.delete(col - row);
        takenPositiveDiagonals.delete(col + row);
    };
    const solve = (row) => {
        if (row === n) {
            let res = board.map(x => x.join(''));
            result.push(res);
            return;
        }
        for (let col = 0; col < n; col++) {
            if (!checkValid(row, col))
                continue;
            add(row, col);
            board[row][col] = 'Q';
            solve(row + 1);
            remove(row, col);
            board[row][col] = '.';
        }
    };
    solve(0);
    return result;
};
exports.default = () => {
    (0, Utilities_1.PrintMatrix)(nQueens(4));
};
