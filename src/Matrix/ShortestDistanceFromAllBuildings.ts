/**
 * 317. Shortest Distance from All Buildings
 */

import { PrintMatrix } from "../utils/Utilities";


const shortestDistance = (grid: number[][]): number => {
  if (!grid || !grid.length || !grid[0].length) return -1;

  const rows = grid.length;
  const cols = grid[0].length;
  const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  const OBSTACLE = 2;
  const BUILDING = 1;

  const getBuildingPositions = () => {
    const positions: number[][] = [];
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        if (grid[row][col] === BUILDING) positions.push([row, col]);
      }
    }
    return positions;
  }

  const validPosition = (row:number,col:number,visited:any) => {
    if (row < 0 || row >= rows) return false;
    if (col < 0 || col >= cols) return false;
    if (grid[row][col] === OBSTACLE) return false;
    if (grid[row][col] === BUILDING) return false;
    if (visited.has(`${row}-${col}`)) return false;
    return true;
  }

  const BFSfromAllBuildingPositions = (buildingPositions:number[][], distances:number[][]) => {
    for (let [startRow, startCol] of buildingPositions) {
      const visited = new Set();
      visited.add(`${startRow}-${startCol}`)
      const queue:number[][] = [[startRow, startCol]];
      let count = 1;
      let distance = 1;

      while (queue.length) {
        while (count) {
          const [currRow, currCol] = queue.shift();
          
          for (let [xDir, yDir] of dirs) {
            let nextRow = currRow + xDir;
            let nextCol = currCol + yDir;

            if (!validPosition(nextRow, nextCol, visited)) continue;

            visited.add(`${nextRow}-${nextCol}`);
            distances[nextRow][nextCol] += distance;
            grid[nextRow][nextCol] -= 1;
            queue.push([nextRow, nextCol]);
          }          
          count--;
        }
        distance++;
        count = queue.length;
      }
    }
  }

  const getShortestDistance = (buildingPositions:number[][]) => {
    let minDistance = Infinity;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        let distance = distances[row][col];
        let buildingsReached = Math.abs(grid[row][col])

        if (grid[row][col] <= 0 && buildingsReached === buildingPositions.length) {
          minDistance = Math.min(distance, minDistance);
        }
      }
    }
    return minDistance === Infinity ? -1 : minDistance;
  }

  const distances:number[][] = new Array(rows).fill(0).map(() => new Array(cols).fill(0));
  const buildingPositions = getBuildingPositions();
  BFSfromAllBuildingPositions(buildingPositions, distances);
  return getShortestDistance(buildingPositions);
}


export default () => {
  console.log(shortestDistance([[1,0,2,0,1],[0,0,0,0,0],[0,0,1,0,0]]));
  console.log(shortestDistance([
    [1,1,1,1,1,0],
    [0,0,0,0,0,1],
    [0,1,1,0,0,1],
    [1,0,0,1,0,1],
    [1,0,1,0,0,1],
    [1,0,0,0,0,1],
    [0,1,1,1,1,0]
  ]));
  console.log(shortestDistance([[1,0]]));
  console.log(shortestDistance([[1]]));
  console.log(shortestDistance([]));
  console.log(shortestDistance([[1,2,0]]));
  console.log(shortestDistance([
    [0,2,1],
    [1,0,2],
    [0,1,0]
  ]));
};
