/**
 * 62. Unique Paths
 */

import { PrintMatrix } from '../utils/Utilities';

const uniquePaths = (m: number, n: number): number => {
    let matrix: number[][] = [];

    for (let i = 0; i < n; i++) {
        matrix.push(new Array(m).fill(0));
    }
    matrix.forEach((v, i) => (matrix[i][0] = 1));
    matrix[0].forEach((v, i) => (matrix[0][i] = 1));

    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1];
        }
    }

    PrintMatrix(matrix);
    return matrix[n - 1][m - 1];
};

export default () => {
    const m = 7;
    const n = 3;
    console.log(uniquePaths(m, n));
};
