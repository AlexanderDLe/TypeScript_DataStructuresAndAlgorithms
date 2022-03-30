/**
 * 1293. Shortest Path in a Grid with Obstacles Elimination
 */

// Set usage unable to fit sufficiently large problems
const shortestPathWRONG = (grid: number[][],k:number): number => {
  const rows = grid.length;
  const cols = grid[0].length;
  const visited = new Set();
  let result = Infinity;

  const outOfBounds = (row:number, col:number) => {
    if (row < 0 || row >= rows) return true;
    if (col < 0 || col >= cols) return true;
    return false;
  }

  const endReached = (row:number, col:number) => {
    return row === rows - 1 && col === cols - 1;
  }

  const alreadyTraveled = (row:number, col:number) => {
    return grid[row][col] === 3 || grid[row][col] === 2;
  }
  
  const DFS = (row:number,col:number, steps:number, breaks:number) => {
    if (outOfBounds(row,col)) return;
    if (alreadyTraveled(row,col)) return;
    if (endReached(row, col)) return result = Math.min(result, steps);
    
    let encode = `${row}-${col}-${steps}-${breaks}`;
    if (visited.has(encode)) return;
    else (visited.add(encode));

    if (grid[row][col] === 1 && breaks === 0) return;
    if (grid[row][col] === 1 && breaks > 0) breaks--;
    
    if (grid[row][col] === 0) grid[row][col] = 2;
    if (grid[row][col] === 1) grid[row][col] = 3;
    
    DFS(row + 1, col, steps + 1, breaks);
    DFS(row, col + 1, steps + 1, breaks);
    DFS(row - 1, col, steps + 1, breaks);
    DFS(row, col - 1, steps + 1, breaks);
    
    if (grid[row][col] === 2) grid[row][col] = 0;
    if (grid[row][col] === 3) grid[row][col] = 1;
  }

  DFS(0, 0, 0, k);
  return result === Infinity ? -1 : result;
}

const shortestPathRef = (grid: number[][],k:number): number => {
  if (!grid.length || !grid[0].length) return 0;

  const outOfBounds = (row:number, col:number) => {
    if (row < 0 || row >= rows) return true;
    if (col < 0 || col >= cols) return true;
    return false;
  }
  const blocked = (row:number, col:number, remainingK:number):boolean => {
    return grid[row][col] === 1 && !remainingK;
  }

  const rows = grid.length;
  const cols = grid[0].length;
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  const visited = new Set();
  visited.add(`0-0-${k}`);

  let moves = 0;
  let queue = [[0, 0, k]];

  while (queue.length > 0) {
    let nextMoves = [];

    while (queue.length > 0) {
      let [row, col, remainingK] = queue.pop();

      if (row === rows - 1 && col === cols - 1) return moves;

      for (let direction of directions) {
        let nextRow = row + direction[0];
        let nextCol = col + direction[1];

        if (outOfBounds(nextRow, nextCol)) continue;
        if (blocked(nextRow, nextCol, remainingK)) continue;

        let nextK = grid[nextRow][nextCol] === 1 ? remainingK - 1 : remainingK;
        let key = `${nextRow}-${nextCol}-${nextK}`;

        if (!visited.has(key)) {
          nextMoves.push([nextRow, nextCol, nextK]);
          visited.add(key);
        }
      }
    }
    queue = nextMoves;
    moves++;
  }
  return -1;
}

const shortestPath = (grid: number[][],k:number): number => {
  if (!grid.length || !grid[0].length) return 0;
  const rows = grid.length;
  const cols = grid[0].length;
  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]]
  
  const outOfBounds = (row:number, col:number) => {
    if (row < 0 || row >= rows) return true;
    if (col < 0 || col >= cols) return true;
    return false;
  }

  const blocked = (row:number, col:number, breaks:number) => {
    return grid[row][col] === 1 && breaks === 0;
  }

  const endReached = (row:number, col:number) => {
    return row === rows - 1 && col === cols - 1;
  }
  
  const visited = new Set();
  visited.add(`0-0-${k}`)

  let count = 1;
  let result = 0;
  
  const queue = [[0,0,k]];
  while (queue.length) {
    while (count) {
      const [row, col, breaks] = queue.shift();

      // Mistake: don't forget to return when end has been reached.
      if (endReached(row, col)) return result;

      for (let [x, y] of dirs) {
        let nextRow = row + x;
        let nextCol = col + y;

        if (outOfBounds(nextRow, nextCol)) continue;
        if (blocked(nextRow, nextCol, breaks)) continue;

        // Mistake: breaksLeft should be based on next rows/cols - not previous.
        let breaksLeft = grid[nextRow][nextCol] === 1 ? breaks - 1 : breaks;
        
        // Mistake: encode should be based on next rows/cols - not previous.
        let encode = `${nextRow}-${nextCol}-${breaksLeft}`;
        if (!visited.has(encode)) {
          visited.add(encode);
          queue.push([nextRow, nextCol, breaksLeft]);
        }
      }
      count--;
    }
    count = queue.length;
    result++;
  }

  return result;
}

export default () => {
  const grid =  [
    [0,0,0],
    [1,1,0],
    [0,0,0],
    [0,1,1],
    [0,0,0]
  ]
  const grid2 = [
    [0,1,1],
    [1,1,1],
    [1,0,0]
  ]
  const grid3 = [
    [0,0,1,0,0],
    [0,1,0,1,0]
  ]
  console.log(shortestPath(grid, 1));
  console.log(shortestPath(grid2, 1));
  console.log(shortestPath(grid2, 2));
  console.log(shortestPath(grid3, 2));
  console.log(shortestPath([
    [0,0],
    [1,0],
    [1,0],
    [1,0],
    [1,0],
    [1,0],
    [0,0],
    [0,1],
    [0,1],
    [0,1],
    [0,0],
    [1,0],
    [1,0],
    [0,0]
  ], 4));
  // console.log(shortestPath([
  //   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  //   [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
  //   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  //   [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  //   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  //   [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
  //   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  //   [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  //   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  //   [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
  //   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  //   [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  //   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  //   [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
  //   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  //   [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  //   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  //   [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
  //   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  //   [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  //   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  //   [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
  //   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  //   [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  //   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  //   [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
  //   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  //   [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  //   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  //   [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
  //   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  //   [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  //   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  //   [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
  //   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  //   [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  //   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]
  //   ,5));
  // console.log(shortestPath([
  //   [0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1],
  //   [0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1],
  //   [0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1],
  //   [0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1],
  //   [1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1],
  //   [1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1],
  //   [0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1],
  //   [0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0],
  //   [0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0],
  //   [0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0],
  //   [1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1],
  //   [0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0],
  //   [0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1],
  //   [0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1],
  //   [1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1],
  //   [1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1],
  //   [1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1],
  //   [0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1],
  //   [1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1],
  //   [0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0],
  //   [0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1],
  //   [0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0],
  //   [1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1],
  //   [0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0]]
  //   ,617));
};
