/**
 * 827. Making a Large Island
 */

import { PrintMatrix } from "../utils/Utilities";


const largestIsland = (matrix: number[][]): number => {
  // Mistakes - coordinates were incorrect
  const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  const n = matrix.length;
  const islandSizes: any = {};
  let result = 0;

  const outOfBounds = (row:number, col:number) => {
    if (row < 0 || row >= n) return true;
    if (col < 0 || col >= n) return true;
    return false;
  }

  // Instead of using BFS, you can also use DFS and return size
  const setIsland = (row:number, col:number, islandIndex:number) => {
    const queue: number[][] = [[row, col]];
    matrix[row][col] = islandIndex;
    let count = 1;
    let size = 0;

    while (queue.length) {
      while (count) {
        let [R, C] = queue.shift();
        size++;

        for (let [x, y] of dirs) {
          let nextRow = R + x;
          let nextCol = C + y;
          // Mistake: don't forget to check out of bounds
          if (!outOfBounds(nextRow, nextCol) && matrix[nextRow][nextCol] === 1) {
            queue.push([nextRow, nextCol]);
            // Mistake: set island index upon entering the queue
            // Otherwise the BFS will add the same item again!
            matrix[nextRow][nextCol] = islandIndex;
          }
        }
        count--;
      }
      count = queue.length;
    }
    islandSizes[islandIndex] = size;
    result = Math.max(result, size);
    return count;
  }
  const tryBridge = (row:number, col:number) => {
    // Mistake: use set to prevent adding the same island again
    const uniqueIsland = new Set();
    let sum = 0;
    
    for (let [x, y] of dirs) {
      let adjRow = row + x;
      let adjCol = col + y;

      if (!outOfBounds(adjRow, adjCol) && matrix[adjRow][adjCol] !== 0) {
        let islandIndex = matrix[adjRow][adjCol];
        if (uniqueIsland.has(islandIndex)) continue;
        sum += islandSizes[islandIndex] || 0;
        uniqueIsland.add(islandIndex);
      }
    }
    
    return sum;
  }
  
  let islandIndex = 2;
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      if (matrix[row][col] === 1) {
        setIsland(row, col, islandIndex);
        islandIndex++;
      }
    }
  }
  
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      if (matrix[row][col] === 0) {
        result = Math.max(result, tryBridge(row, col) + 1);
      }
    }
  }

  return result;
};

export default () => {
  console.log(largestIsland([
    [1,1,1,0],
    [1,1,0,0],
    [0,0,1,1],
    [1,0,1,1],
  ]));
  // console.log(largestIsland([
  //   [1,0],
  //   [0,1]
  // ]));
  // console.log(largestIsland([
  //   [1,1],
  //   [1,0]
  // ]));
  // console.log(largestIsland([
  //   [1,1],
  //   [1,1]
  // ]));
};
