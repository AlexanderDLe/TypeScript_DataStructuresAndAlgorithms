/**
 * 212. Word Search 2
 */

const findWords = (board:string[][], words: string[]): string[] => {
  const buildTrie = () => {
    let trie: any = {};
    for (let word of words) {
      let curr = trie;
      for (let char of word) {
        if (!curr[char]) curr[char] = {};
        curr = curr[char];
      }
      curr.word = word;
    }
    return trie;
  }
  const outOfBounds = (row:number,col:number):boolean => {
    if (row < 0 || row >= board.length) return true;
    if (col < 0 || col >= board[0].length) return true;
    return false;
  }

  const trie: any = buildTrie();
  const result:string[] = []
  
  const DFS = (row:number, col:number, node: any) => {
    if (outOfBounds(row,col)) return;
    if (board[row][col] === '#') return;
    if (!(board[row][col] in node)) return;

    let letter = board[row][col];
    node = node[letter];
    
    if (node.word) {
      result.push(node.word);
      delete node.word;
    }

    // Optimization - modify board itself to path instead of using new matrix.
    let temp = board[row][col];
    board[row][col] = '#';
    DFS(row - 1, col, node);
    DFS(row, col + 1, node);
    DFS(row + 1, col, node);
    DFS(row, col - 1, node);
    board[row][col] = temp;
  }

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      DFS(row, col, trie);
    }
  }

  return result;
}

export default () => {
  console.log(findWords(
    [
      ["o","a","a","n"],
      ["e","t","a","e"],
      ["i","h","k","r"],
      ["i","f","l","v"]
    ], 
    ["oath","pea","eat","rain",'aa']
  ))
  console.log(findWords(
    [
      ["a","b"],
      ["c","d"]
    ],
    ["abcb", 'ab']
    ))
};
