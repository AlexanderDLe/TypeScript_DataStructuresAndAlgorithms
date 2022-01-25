/**
 * Grokking the Coding Interview
*/

import WordsConcatenation from "../SlidingWindow/WordsConcatenation";
import ConstructBSTFromPreorderAndInorder from "../Trees/ConstructBSTFromPreorderAndInorder";
import { PrintArray, PrintMatrix, PrintObject } from "../utils/Utilities";
let Deque = require('collections/Deque');



function minimumHeightTree(nodes:number, edges:number[][]) {
    if (nodes <= 0) {
      return [];
    }
  
    // with only one node, since its in-degrees will be 0, therefore, we need to handle it separately
    if (nodes === 1) {
      return [0];
    }
  
    // a. Initialize the graph
    const inDegree = Array(nodes).fill(0); // count of incoming edges
    const graph = Array(nodes).fill(0).map(() => Array()); // adjacency list graph
  
    // b. Build the graph
    edges.forEach((edge) => {
      let n1 = edge[0],
        n2 = edge[1];
      // since this is an undirected graph, therefore, add a link for both the nodes
      graph[n1].push(n2);
      graph[n2].push(n1);
      // increment the in-degrees of both the nodes
      inDegree[n1] += 1;
      inDegree[n2] += 1;
    });
  
    // c. Find all leaves i.e., all nodes with 1 in-degrees
    const leaves = new Deque();
    for (let i = 0; i < inDegree.length; i++) {
      if (inDegree[i] === 1) {
        leaves.push(i);
      }
    }
  
    // d. Remove leaves level by level and subtract each leave's children's in-degrees.
    // Repeat this until we are left with 1 or 2 nodes, which will be our answer.
    // Any node that has already been a leaf cannot be the root of a minimum height tree, because
    // its adjacent non-leaf node will always be a better candidate.
    let totalNodes = nodes;
    while (totalNodes > 2) {
      let leavesSize = leaves.length;
      totalNodes -= leavesSize;
      for (let i = 0; i < leavesSize; i++) {
        let vertex = leaves.shift();
        // get the node's children to decrement their in-degrees
        graph[vertex].forEach((child) => { // get the node's children to decrement their in-degrees
          inDegree[child] -= 1;
          if (inDegree[child] === 1) {
            leaves.push(child);
          }
        });
      }
    }
  
    return leaves.toArray();
  }

export default () => {
    console.log(minimumHeightTree(5, [[0, 1], [1, 2], [1, 3], [2, 4]]))
    console.log(minimumHeightTree(4, [[0, 1], [0, 2], [2, 3]]))
    console.log(minimumHeightTree(4, [[1, 2], [1, 3]]))
};
