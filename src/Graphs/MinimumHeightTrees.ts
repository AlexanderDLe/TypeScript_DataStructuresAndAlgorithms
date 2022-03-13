/**
 * 310. Minimum Height Trees
 */

import { PrintObject } from "../utils/Utilities";

const findMinHeight_BFSFromEachNode_TOOSLOW = (n: number, edges: number[][]): number[] => {
  const map: any = {};

  for (let [n1, n2] of edges) {
    if (!map[n1]) map[n1] = [];
    if (!map[n2]) map[n2] = [];
    map[n1].push(n2);
    map[n2].push(n1);
  }

  const getHeightFromNode = (n: number) => {
    const visited = new Set();
    let height = 0;
    let queue: number[] = [];
    queue.push(n);

    while (queue.length) {
      height++;

      let nextQueue: number[] = [];
      while (queue.length) {
        let node = queue.shift();
        visited.add(node);
        
        let connections = map[node];
        if (!connections) continue;

        for (let connection of connections) {
          if (visited.has(connection)) continue;
          nextQueue.push(connection);
        }
      }

      queue = nextQueue;
    }

    return height;
  }

  const heightMap:any = {};
  for (let i = 0; i < n; i++) {
    heightMap[i] = getHeightFromNode(i);
  }

  let sorted = Object.entries(heightMap).sort((a:any, b:any) => a[1] - b[1]);
  let minHeight = sorted[0][1];
  const result: number[] = [];

  for (let [node, height] of sorted) {
    if (height > minHeight) break;
    result.push(Number(node));
  }
  return result;
}

const findMinHeightRef = (n: number, edges: number[][]): number[] => {
  // Start at the leaf nodes, and BFS inward until you reach only 1/2 nodes .
  // Those 1/2 nodes will be the mid-most of longest paths, which means they cover all nodes;
  // Therefore they are the minimum height roots.


  if (n === 1) return [0];

  const map: any = {};

  for (let i = 0; i < n; i++) map[i] = [];
  for (let [n1, n2] of edges) {
    map[n1].push(n2);
    map[n2].push(n1);
  }

  let leaves: number[] = [];
  for (let key in map) {
    if (map[key].length === 1) leaves.push(Number(key));
  }
  
  while (n > 2) {
    n -= leaves.length;
    let nextLeaves: number[] = [];

    for (let leaf of leaves) {
      let next = map[leaf].pop();
      
      let indexToRemove = map[next].indexOf(leaf);
      map[next].splice(indexToRemove, 1);

      if (map[next].length === 1) nextLeaves.push(next);
    }

    leaves = nextLeaves;
  }
  return leaves;
}

const findMinHeight = (n: number, edges: number[][]): number[] => {
  const map: any = {};

  for (let i = 0; i < n; i++) map[i] = [];
  for (let [n1, n2] of edges) {
    map[n1].push(n2)
    map[n2].push(n1)
  }

  let leaves: number[] = [];
  for (let key in map) if (map[key].length === 1) leaves.push(Number(key));
  
  while (n > 2) {
    n -= leaves.length;
    let nextLeaves: number[] = [];

    for (let leaf of leaves) {
      let next = map[leaf].pop();

      let indexToRemove = map[next].indexOf(leaf);
      map[next].splice(indexToRemove, 1);

      if (map[next].length === 1) nextLeaves.push(next);
    }
    leaves = nextLeaves;
  }
  
  return leaves;
}

export default () => {
  console.log(findMinHeight(4, [[1,0],[1,2],[1,3]]));
  console.log(findMinHeight(6, [[3,0],[3,1],[3,2],[3,4],[5,4]]));
};
