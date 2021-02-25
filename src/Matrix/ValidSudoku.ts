/**
 *  36. Valid Sudoku
 */

/*  Using Single Encoded Set

    Encode Row = r#-#
    Encode Col = c#-#
    Encode Sub = s#-#
*/
const isValidSudoku = (board: string[][]): boolean => {
    let set: Set<string> = new Set([]);

    const getSub = (row: number, col: number): number => {
        let sub = 0;
        sub += (Math.floor(row / 3)) * 3;
        sub += (Math.floor(col / 3));
        return sub;
    }

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            let cell = board[row][col];
            if (cell === '.') continue;
            
            let sub = getSub(row, col);
            if (set.has(`r${row}-${cell}`)) return false;
            if (set.has(`c${col}-${cell}`)) return false;
            if (set.has(`s${sub}-${cell}`)) return false;

            set.add(`r${row}-${cell}`);
            set.add(`c${col}-${cell}`);
            set.add(`s${sub}-${cell}`);
        }
    }

    return true;
}

// Using Multiple Maps & Sets
type Map = {
    [key: string]: Set<string>
}
const isValidSudokuB = (board: string[][]): boolean => {
    let rowMap: Map = {};
    let colMap: Map = {};
    let subMap: Map = {};

    for (let i = 0; i < 9; i++) {
        rowMap[i] = new Set();
        colMap[i] = new Set();
        subMap[i] = new Set();
    }

    const isNumeric = (str: string): boolean => {
        return /\d+/g.test(str);
    }

    const getSubMatrix = (row: number, col: number): number => {
        let subMatrix = 0;
        subMatrix += (Math.floor(row / 3)) * 3;
        subMatrix += (Math.floor(col / 3));
        return subMatrix;
    }

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            let cell = board[row][col];
            if (isNumeric(cell)) {
                let sub = getSubMatrix(row, col);
                if (rowMap[row].has(cell)) return false;
                if (colMap[col].has(cell)) return false;
                if (subMap[sub].has(cell)) return false;

                rowMap[row].add(cell);
                colMap[col].add(cell);
                subMap[sub].add(cell);
            }
        }
    }

    return true;
};

export default () => {
    const board = 
        [["5","3",".",".","7",".",".",".","."]
        ,["6",".",".","1","9","5",".",".","."]
        ,[".","9","8",".",".",".",".","6","."]
        ,["8",".",".",".","6",".",".",".","3"]
        ,["4",".",".","8",".","3",".",".","1"]
        ,["7",".",".",".","2",".",".",".","6"]
        ,[".","6",".",".",".",".","2","8","."]
        ,[".",".",".","4","1","9",".",".","5"]
        ,[".",".",".",".","8",".",".","7","9"]];

    console.log(isValidSudoku(board));
};
