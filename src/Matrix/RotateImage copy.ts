/**
 * 48. Rotate Image
 */

import { PrintMatrix } from '../utils/Utilities';

const rotateA = (matrix: number[][]): void => {
    let levels = Math.floor(matrix.length / 2);

    for (let lvl = 0; lvl < levels; lvl++) {
        let end = matrix.length - 1 - lvl;
        let i = lvl;
        let j = end;

        
        while (i < end) {
            let topLeft = matrix[lvl][i];
            let topRight = matrix[i][end];
            let bottomRight = matrix[end][j];
            let bottomLeft = matrix[j][lvl];

            matrix[i][end] = topLeft;
            matrix[end][j] = topRight;
            matrix[j][lvl] = bottomRight;
            matrix[lvl][i] = bottomLeft;

            i++, j--;
        }
    }
}

const rotateB = (matrix: number[][]): void => {
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

const rotateC = (matrix: number[][]): void => {
    let len = matrix.length;
    let totalLayers = Math.floor(matrix.length / 2);
    
    for (let currLayer = 0; currLayer < totalLayers; currLayer++) {
        for (let currPos = currLayer; currPos < len - currLayer - 1; currPos++) {

            let topLeft = matrix[currLayer][currPos];
            let topRight = matrix[currPos][len - currLayer - 1];
            let botRight = matrix[len - currLayer - 1][len - 1 - currPos];
            let botLeft = matrix[len - 1 - currPos][currLayer];

            matrix[currLayer][currPos] = botLeft;
            matrix[currPos][len - currLayer - 1] = topLeft;
            matrix[len - currLayer - 1][len - 1 - currPos] = topRight;
            matrix[len - 1 - currPos][currLayer] = botRight;
        }
    }
}

const rotate = (matrix: number[][]): void => {
  let n = matrix.length;
  let layers = Math.ceil(n / 2);

  for (let layer = 0; layer < layers; layer++) {
    const endLayer = n - layer - 1;

    for (let i = layer; i < endLayer; i++) {
      let topLeft = matrix[layer][i];
      let topRight = matrix[i][endLayer];
      let botRight = matrix[endLayer][n - i - 1];
      let botLeft = matrix[n - i - 1][layer];

      matrix[layer][i] = botLeft;
      matrix[i][endLayer] = topLeft;
      matrix[endLayer][n - i - 1] = topRight;
      matrix[n - i - 1][layer] = botRight;
    }
  }
}

export default () => {
    const matrix1 = [
        [1, 2, 3,],
        [5, 6, 7,],
        [9, 10, 11],
    ];
    const matrix = [
      [5,1,9,11],
      [2,4,8,10],
      [13,3,6,7],
      [15,14,12,16]
    ];//
    rotate(matrix);
    PrintMatrix(matrix);
};
