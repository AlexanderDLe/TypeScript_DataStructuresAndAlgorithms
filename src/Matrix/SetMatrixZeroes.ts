/**
 * 73. Set Matrix Zeroes
 */

import { PrintMatrix } from '../utils/Utilities';

const setZeroes = (m: number[][]): void => {
    if (!m.length || !m[0].length) return;
    const rows = m.length;
    const cols = m[0].length;
    let colIsZero = false;
    let rowIsZero = false;

    for (let r = 0; r < rows; r++) {
        if (m[r][0] === 0) colIsZero = true;
    }
    for (let c = 0; c < cols; c++) {
        if (m[0][c] === 0) rowIsZero = true;
    }

    for (let r = 1; r < rows; r++) {
        for (let c = 1; c < cols; c++) {
            if (m[r][c] === 0) {
                m[r][0] = 0;
                m[0][c] = 0;
            }
        }
    }

    for (let r = 1; r < rows; r++) {
        for (let c = 1; c < cols; c++) {
            if (m[0][c] === 0 || m[r][0] === 0) {
                m[r][c] = 0;
            }
        }
    }

    if (rowIsZero) {
        for (let c = 0; c < cols; c++) {
            m[0][c] = 0;
        }
    }

    if (colIsZero) {
        for (let r = 0; r < rows; r++) {
            m[r][0] = 0;
        }
    }
};

const setZeroesUsing777 = (m: number[][]): void => {
    if (!m.length || !m[0].length) return;

    const rows = m.length;
    const cols = m[0].length;

    const setToZeroes = (row: number, col: number) => {
        for (let c = 0; c < cols; c++) {
            if (m[row][c] != 0) m[row][c] = 777;
        }
        for (let r = 0; r < rows; r++) {
            if (m[r][col] != 0) m[r][col] = 777;
        }
    };

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (m[row][col] === 0) {
                setToZeroes(row, col);
            }
        }
    }

    // Swap encoded 777 to 0
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (m[row][col] === 777) m[row][col] = 0;
        }
    }
};

export default () => {
    const m = [
        [0, 1, 2, 0],
        [3, 4, 5, 2],
        [1, 3, 1, 5],
    ];

    PrintMatrix(m);
    setZeroes(m);
    PrintMatrix(m);
};
