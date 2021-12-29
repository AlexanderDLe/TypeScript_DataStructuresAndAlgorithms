/**
 * 200. Number of Islands
 */

import { PrintMatrix } from '../utils/Utilities';

const numIslandsA = (grid: string[][]): number => {
    if (!grid.length) return 0;
    let rows = grid.length;
    let cols = grid[0].length;
    let count = 0;

    const sinkIsland = (row: number, col: number): void => {
        if (row < 0 || row === rows) return;
        if (col < 0 || col === cols) return;
        if (grid[row][col] === '0') return;

        grid[row][col] = '0';
        sinkIsland(row + 1, col);
        sinkIsland(row - 1, col);
        sinkIsland(row, col + 1);
        sinkIsland(row, col - 1);
    };

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] === '1') {
                count++;
                sinkIsland(row, col);
            }
            PrintMatrix(grid);
        }
    }

    return count;
};

const numIslands = (grid: string[][]): number => {
    let count = 0;

    const destroy = (row: number, col: number): void => {

    }

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === '1') {
                destroy(row, col);
                count++;
            }
        }
    }

    return count;
}

export default () => {
    const grid = [
        ['1', '1', '0', '0', '0'],
        ['1', '1', '0', '0', '0'],
        ['0', '0', '1', '0', '0'],
        ['0', '0', '0', '1', '1']
    ];
    console.log(numIslands(grid));
};
