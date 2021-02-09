/**
 *  289. Game of Life
 */

import { PrintMatrix } from '../utils/Utilities';

/*  
    If currently dead, but switch to alive: 3
    If currently dead, and remain dead: 0
    If currently alive, but switch to dead; 2
    If currently alive, and remain alive: 1
*/

const gameOfLife = (board: number[][]): void => {
    let rows = board.length;
    let cols = board[0].length;

    const dirs = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]]

    const checkAlive = (row: number, col: number): number => {
        if (row < 0 || row >= rows) return 0;
        if (col < 0 || col >= cols) return 0;

        let currCell = board[row][col];
        if (currCell === 0 || currCell === 3) return 0;
        if (currCell === 1 || currCell === 2) return 1;
    }

    const updateCell = (row: number, col: number): number => {
        let alives = 0;
        for (let dir of dirs) {
            alives += checkAlive(row + dir[0], col + dir[1]);
        }
        console.log(`Alives for board[${row}][${col}]: ${alives}\nAfter:`);
        if (board[row][col] === 1) {
            if (alives < 2 || alives > 3) return 2;
            else return 1;
        } else {
            if (alives === 3) return 3;
            else return 0;
        }
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            board[row][col] = updateCell(row, col);
            PrintMatrix(board);
        }
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (board[row][col] === 2) board[row][col] = 0;
            if (board[row][col] === 3) board[row][col] = 1;
        }
    }
};

export default () => {
    const board = [
        [0,1,0],
        [0,0,1],
        [1,1,1],
        [0,0,0]
    ];

    gameOfLife(board);   
    PrintMatrix(board);
};
