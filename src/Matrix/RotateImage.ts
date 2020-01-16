/**
 * 48. Rotate Image
 */

import { PrintMatrix } from '../utils/Utilities';

const rotate = (matrix: number[][]): void => {
    let rotations = Math.floor(matrix.length / 2);

    for (let i = 0; i < rotations; i++) {
        let j = matrix.length - 1 - i;
        let k = i;
        let m = j;

        while (k < j) {
            let topLeft = matrix[i][k];
            let topRight = matrix[k][j];
            let botRight = matrix[j][m];
            let botLeft = matrix[m][i];

            matrix[i][k] = botLeft;
            matrix[k][j] = topLeft;
            matrix[j][m] = topRight;
            matrix[m][i] = botRight;

            k++;
            m--;
        }
    }
};

export default () => {
    const matrix = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]
    ];
    rotate(matrix);
    PrintMatrix(matrix);
};
