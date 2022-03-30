"use strict";
/**
 * 1091. Shortest Path in Binary Matrix
 *
 *
    [1,2,3]
    [2,2,3]
    [0,1,0]

 */
Object.defineProperty(exports, "__esModule", { value: true });
const Utilities_1 = require("../utils/Utilities");
const shortestPath = (matrix) => {
    if (!matrix.length)
        return -1;
    if (matrix[0][0] === 1)
        return -1;
    const outOfBounds = (row, col) => {
        if (row < 0 || row >= n)
            return true;
        if (col < 0 || col >= n)
            return true;
        return false;
    };
    const dirs = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1], [0, 1],
        [1, -1], [1, 0], [1, 1]
    ];
    const n = matrix.length;
    const queue = [[0, 0, 1]];
    const visited = new Set();
    visited.add(`0-0`);
    let count = 1;
    let moves = 1;
    while (queue.length) {
        while (count) {
            const [row, col] = queue.shift();
            // Base case - if at final cell, then return pathLen
            if (row === n - 1 && col === n - 1)
                return moves;
            for (let [addRow, addCol] of dirs) {
                let nextRow = row + addRow;
                let nextCol = col + addCol;
                // Mistakes: Be careful of OOB function AND invalid BFS
                if (outOfBounds(nextRow, nextCol))
                    continue;
                if (matrix[nextRow][nextCol] === 1)
                    continue;
                let encode = `${nextRow}-${nextCol}`;
                if (visited.has(encode))
                    continue;
                visited.add(encode);
                queue.push([nextRow, nextCol]);
            }
            count--;
        }
        count = queue.length;
        moves++;
    }
    return -1;
};
exports.default = () => {
    const matrix = [
        [0, 0, 0],
        [1, 1, 0],
        [1, 1, 0]
    ];
    (0, Utilities_1.PrintMatrix)(matrix);
    // console.log(shortestPath([[0,1],[1,0]]));
    // console.log(shortestPath(matrix));
    console.log(shortestPath([
        [1, 0, 0],
        [1, 1, 0],
        [1, 1, 0]
    ]));
};
