"use strict";
/**
 AlgoExpert
*/
Object.defineProperty(exports, "__esModule", { value: true });
const boggleBoard = (board, words) => {
    let rows = board.length;
    let cols = board[0].length;
    const buildTrie = () => {
        let trie = {};
        for (let word of words) {
            let curr = trie;
            for (let i = 0; i < word.length; i++) {
                let char = word[i];
                if (!curr[char])
                    curr[char] = {};
                curr = curr[char];
                if (i === word.length - 1) {
                    curr['*'] = {};
                }
            }
        }
        return trie;
    };
    const buildPathMatrix = () => {
        let matrix = new Array(rows).fill(0);
        matrix = matrix.map(item => new Array(cols).fill(0));
        return matrix;
    };
    const pathMatrix = buildPathMatrix();
    const result = [];
    const search = (row, col, substr, currTrie) => {
        if (row < 0 || row >= rows || col < 0 || col >= cols)
            return;
        if (pathMatrix[row][col] > 0)
            return;
        let char = board[row][col];
        if (!currTrie[char])
            return;
        currTrie = currTrie[char];
        pathMatrix[row][col] = 1;
        substr += char;
        if ('*' in currTrie) {
            result.push(substr);
            delete currTrie['*'];
        }
        search(row - 1, col, substr, currTrie);
        search(row - 1, col + 1, substr, currTrie);
        search(row, col + 1, substr, currTrie);
        search(row + 1, col + 1, substr, currTrie);
        search(row + 1, col, substr, currTrie);
        search(row + 1, col - 1, substr, currTrie);
        search(row, col - 1, substr, currTrie);
        search(row - 1, col - 1, substr, currTrie);
        pathMatrix[row][col] = 0;
    };
    const trie = buildTrie();
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            search(row, col, '', trie);
        }
    }
    return result;
};
exports.default = () => {
    const board = [
        ["t", "h", "i", "s", "i", "s", "a"],
        ["s", "i", "m", "p", "l", "e", "x"],
        ["b", "x", "x", "x", "x", "e", "b"],
        ["x", "o", "g", "g", "l", "x", "o"],
        ["x", "x", "x", "D", "T", "r", "a"],
        ["R", "E", "P", "E", "A", "d", "x"],
        ["x", "x", "x", "x", "x", "x", "x"],
        ["N", "O", "T", "R", "E", "-", "P"],
        ["x", "x", "D", "E", "T", "A", "E"],
    ];
    const words = [
        "this", "is", "not", "a", "simple", "boggle",
        "board", "test", "REPEATED", "NOTRE-PEATED",
    ];
    console.log(boggleBoard(board, words));
    // PrintMatrix(board);
};
