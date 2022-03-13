/**
  51. N-Queens
*/

import { PrintArray, PrintMatrix } from '../utils/Utilities';


const nQueens = (n: number):string[][] => {
  let takenRows = new Set<number>();
  let takenCols = new Set<number>();
  let takenNegativeDiagonals = new Set<number>();
  let takenPositiveDiagonals = new Set<number>();
  let board = new Array(n).fill(0);
  board = board.map(x => new Array(n).fill('.'));
  let result: string[][] = [];

  const checkValid = (row:number, col:number): boolean => {
    if (takenRows.has(row)) return false;
    if (takenCols.has(col)) return false;
    
    let negativeDiagonal = col - row;
    let positiveDiagonal = row + col;
    if (takenNegativeDiagonals.has(negativeDiagonal)) return false;
    if (takenPositiveDiagonals.has(positiveDiagonal)) return false;
    return true;
  }
  const add = (row:number, col:number) => {
    takenRows.add(row);
    takenCols.add(col);
    takenNegativeDiagonals.add(col - row);
    takenPositiveDiagonals.add(col + row);
  }
  const remove = (row:number, col:number) => {
    takenRows.delete(row);
    takenCols.delete(col);
    takenNegativeDiagonals.delete(col - row);
    takenPositiveDiagonals.delete(col + row);
  }

  const solve = (row:number) => {
    if (row === n) {
      let res = board.map(x => x.join(''));
      result.push(res)
      return;
    }

    for (let col = 0; col < n; col++) {
      if (!checkValid(row, col)) continue;
      add(row, col);
      board[row][col] = 'Q';
      solve(row + 1);
      
      remove(row, col);
      board[row][col] = '.';
    }
  }

  solve(0);
  return result;
}

export default () => {
  PrintMatrix(nQueens(4));
}
