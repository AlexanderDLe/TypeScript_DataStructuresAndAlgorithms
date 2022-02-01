/**
 * 200. Number of Islands
 */

import { PrintMatrix } from '../utils/Utilities';

const removeIslands = (matrix: number[][]): number[][] => {
    const checkBorderConnection = (row:number, col: number): boolean => {
        if (row < 0 || col < 0) return true;
        if (row === matrix.length || col === matrix[0].length) return true;
        if (!matrix[row][col]) return false;
        if (matrix[row][col] === 2) return false;

        matrix[row][col] = 2;

        let top = checkBorderConnection(row - 1, col);
        let right = checkBorderConnection(row, col + 1);
        let bottom = checkBorderConnection(row + 1, col);
        let left = checkBorderConnection(row, col -1);

        return top || right || bottom || left;
    }

    const sinkIsland = (row:number, col:number):void => {
        if (row < 0 || col < 0) return;
        if (row === matrix.length || col === matrix[0].length) return;
        if (!matrix[row][col]) return;

        matrix[row][col] = 0;
        sinkIsland(row + 1, col);
        sinkIsland(row - 1, col);
        sinkIsland(row, col + 1);
        sinkIsland(row, col - 1);
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            if (matrix[row][col] === 1) {
                let connectedToBorder = checkBorderConnection(row, col);
                if (!connectedToBorder) sinkIsland(row, col);
            }
        }
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            if (matrix[row][col] === 2) {
                matrix[row][col] = 1;
            }
        }
    }

    return matrix;
}

export default () => {
    const grid = [
        [1, 1, 0, 0, 0],
        [1, 1, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 1, 1]
    ];
    PrintMatrix(removeIslands(grid));
};
