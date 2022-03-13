"use strict";
/**
 * 323. Number of Connected Components in an Undirected Graph
 *
 * {
 *  0: [1],
 *  1: [0, 2],
 *  2: [1],
 *  3: [4],
 *  4: [3],
 *  5:
 * }
 */
Object.defineProperty(exports, "__esModule", { value: true });
const countComponents = (n, edges) => {
    const map = {};
    for (let i = 0; i < n; i++)
        map[i] = [];
    for (let edge of edges) {
        let [nA, nB] = edge;
        map[nA].push(nB);
        map[nB].push(nA);
    }
    const visited = new Set();
    let count = 0;
    const DFS = (node) => {
        visited.add(node);
        let neighbors = map[node];
        for (let nb of neighbors) {
            if (!visited.has(nb))
                DFS(nb);
        }
    };
    for (let node in map) {
        if (visited.has(Number(node)))
            continue;
        count++;
        DFS(Number(node));
    }
    return count;
};
exports.default = () => {
    console.log(countComponents(5, [[0, 1], [1, 2], [3, 4]]));
    // console.log(countComponents(5, [[0,1],[1,2],[2,3],[3,4]]));
};
