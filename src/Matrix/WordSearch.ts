/**
 *  79. Word Search
 */

const existA = (board: string[][], word: string): boolean => {
  const DFS = (
      board: string[][],
      row: number,
      col: number,
      index: number,
      word: string
  ): boolean => {
      if (index === word.length) return true;
      if (row < 0 || col < 0) return false;
      if (row === board.length || col === board[0].length) return false;
      if (board[row][col] === '#' || board[row][col] != word[index]) return false;
  
      let letter = word[index];
      let letterExists = false;
      board[row][col] = '#';
  
      if (DFS(board, row - 1, col, index + 1, word)) return true;
      if (DFS(board, row + 1, col, index + 1, word)) return true;
      if (DFS(board, row, col - 1, index + 1, word)) return true;
      if (DFS(board, row, col + 1, index + 1, word)) return true;
  
      board[row][col] = letter;
      return false;
  };
  for (let row = 0; row < board.length; row++) {
      for (let col = 0; col < board[0].length; col++) {
          if (DFS(board, row, col, 0, word)) return true;
      }
  }

  return false;
};


const exist = (board: string[][], word: string): boolean => {
  const outOfBounds = (row:number, col:number): boolean => {
    if (row < 0 || row >= board.length) return true;
    if (col < 0 || col >= board[0].length) return true;
    return false;
  }

  const DFS = (row:number, col:number, substr:string, index:number): boolean => {
    if (outOfBounds(row, col)) return false;
    if (index > word.length) return false;
    if (board[row][col] !== word[index]) return false;
    
    substr += board[row][col];
    if (substr === word) return true;
    
    let temp = board[row][col];
    board[row][col] = '*';

    let top = DFS(row - 1, col, substr, index + 1);
    let right = DFS(row, col + 1, substr, index + 1);
    let bottom = DFS(row + 1, col, substr, index + 1);
    let left = DFS(row, col - 1, substr, index + 1);

    board[row][col] = temp;

    return top || right || bottom || left;
  }

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col] === word[0]) {
        if (DFS(row, col, '', 0)) return true;
      }
    }
  }

  return false;
}

export default () => {
    const board = [
        ['A', 'B', 'C', 'E'],
        ['S', 'F', 'C', 'S'],
        ['A', 'D', 'E', 'E']
    ];

    const word1 = 'ABCCED';
    const word2 = 'SEE';
    const word3 = 'ABCB';
    console.log(exist(board, word3));
};
