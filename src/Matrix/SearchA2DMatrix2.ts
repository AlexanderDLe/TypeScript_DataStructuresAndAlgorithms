/**
 * 240. Search A 2D Matrix 2
 */

const searchMatrixBS = (matrix: number[][], target: number): boolean => {
    if (!matrix.length || !matrix[0].length) return false;

    let rows = matrix.length;
    let cols = matrix[0].length;

    let search = (
        startRow: number,
        endRow: number,
        startCol: number,
        endCol: number
    ): boolean => {
        if (startRow > endRow || startCol > endCol) return false;

        let midRow = Math.floor((endRow - startRow) / 2 + startRow);
        let midCol = Math.floor((endCol - startCol) / 2 + startCol);
        let midVal = matrix[midRow][midCol];
        console.log(midVal);

        if (midVal === target) return true;
        else if (midVal < target) {
            return (
                search(startRow, midRow, midCol + 1, endCol) ||
                search(midRow + 1, endRow, startCol, endCol)
            );
        } else if (midVal > target) {
            return (
                search(startRow, midRow - 1, startCol, endCol) ||
                search(midRow, endRow, startCol, midCol - 1)
            );
        }
    };

    return search(0, rows - 1, 0, cols - 1);
};

const searchMatrix = (matrix: number[][], target: number): boolean => {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let row = rows - 1;
    let col = 0;

    while (row >= 0 && col < cols) {
        let curr = matrix[row][col];
        console.log(curr);
        if (curr === target) return true;
        else if (curr > target) row--;
        else if (curr < target) col++;
    }

    return false;
};

const searchMatrixB = (matrix: number[][], target: number): boolean => {
    if (!matrix.length || !matrix[0].length) return false;
    let col = matrix[0].length - 1;
    let row = 0;

    while (col >= 0 && row <= matrix.length - 1) {
        if (target == matrix[row][col]) return true;
        else if (target < matrix[row][col]) col--;
        else if (target > matrix[row][col]) row++;
    }

    return false;
};

export default () => {
    const matrix: number[][] = [
        [1, 4, 7, 11, 15],
        [2, 5, 8, 12, 19],
        [3, 6, 9, 16, 22],
        [10, 13, 14, 17, 24],
        [18, 21, 23, 26, 30],
    ];
    const matrix2: number[][] = [[-1, 3]];
    const target = 3; //
    console.log(searchMatrixBS(matrix2, target));
};
