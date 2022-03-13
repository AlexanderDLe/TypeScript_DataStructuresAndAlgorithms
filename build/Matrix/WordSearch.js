"use strict";
/**
 *  79. Word Search
 */
Object.defineProperty(exports, "__esModule", { value: true });
const existA = (board, word) => {
    const DFS = (board, row, col, index, word) => {
        if (index === word.length)
            return true;
        if (row < 0 || col < 0)
            return false;
        if (row === board.length || col === board[0].length)
            return false;
        if (board[row][col] === '#' || board[row][col] != word[index])
            return false;
        let letter = word[index];
        let letterExists = false;
        board[row][col] = '#';
        if (DFS(board, row - 1, col, index + 1, word))
            return true;
        if (DFS(board, row + 1, col, index + 1, word))
            return true;
        if (DFS(board, row, col - 1, index + 1, word))
            return true;
        if (DFS(board, row, col + 1, index + 1, word))
            return true;
        board[row][col] = letter;
        return false;
    };
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            if (DFS(board, row, col, 0, word))
                return true;
        }
    }
    return false;
};
const exist = (board, word) => {
    const outOfBounds = (row, col) => {
        if (row < 0 || row >= board.length)
            return true;
        if (col < 0 || col >= board[0].length)
            return true;
        return false;
    };
    const DFS = (row, col, substr, index) => {
        if (outOfBounds(row, col))
            return false;
        if (index > word.length)
            return false;
        if (board[row][col] !== word[index])
            return false;
        substr += board[row][col];
        if (substr === word)
            return true;
        let temp = board[row][col];
        board[row][col] = '*';
        let top = DFS(row - 1, col, substr, index + 1);
        let right = DFS(row, col + 1, substr, index + 1);
        let bottom = DFS(row + 1, col, substr, index + 1);
        let left = DFS(row, col - 1, substr, index + 1);
        board[row][col] = temp;
        return top || right || bottom || left;
    };
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            if (board[row][col] === word[0]) {
                if (DFS(row, col, '', 0))
                    return true;
            }
        }
    }
    return false;
};
exports.default = () => {
    const board = [
        ['A', 'B', 'C', 'E'],
        ['S', 'F', 'C', 'S'],
        ['A', 'D', 'E', 'E']
    ];
    const word1 = 'ABCCED';
    const word2 = 'SEE';
    const word3 = 'ABCB';
    console.log(exist(board, word3));
};
