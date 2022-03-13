"use strict";
/**
 * 261. Graph Valid Tree
 *
 * Requires for valid tree:
 *
 * 1. There can only be one source node.
 * 2. Trees can only branch outward, and not cycle.
 *
 * 1 --- 2        0
 *  \   /       /   \
 *    0        1     2
 *
 * [1,0] [2,0]
 *
 *
 * {
 *  0: [1, 2]
 *  1: [0, 2]
 *  2: [0, 1]
 * }
 *
 * visited = [0]
 * queue = [2]
 *
 * n = 2
 * children =
 */
Object.defineProperty(exports, "__esModule", { value: true });
const validTree_WorksOnlyFromTopToBottom = (n, edges) => {
    let parents = {};
    let nodes = [];
    for (let i = 0; i < n; i++)
        nodes.push(i);
    let source = new Set(nodes);
    for (let edge of edges) {
        let [parent, child] = edge;
        source.delete(child);
        if (!parents[parent])
            parents[parent] = [];
        parents[parent].push(child);
    }
    if (source.size !== 1)
        return false;
    const visited = new Set();
    const queue = [];
    source.forEach(n => {
        visited.add(n);
        queue.push(n);
    });
    while (queue.length) {
        let n = queue.shift();
        let childrenNodes = parents[n];
        if (!childrenNodes)
            continue;
        for (let child of childrenNodes) {
            if (visited.has(child))
                return false;
            queue.push(child);
            visited.add(child);
        }
    }
    return visited.size === n;
};
const validTree = (n, edges) => {
    const map = {};
    for (let edge of edges) {
        let [nA, nB] = edge;
        if (!map[nA])
            map[nA] = [];
        if (!map[nB])
            map[nB] = [];
        map[nA].push(nB);
        map[nB].push(nA);
    }
    const visited = new Set();
    const queue = [0];
    while (queue.length) {
        let n = queue.shift();
        if (visited.has(n))
            return false;
        visited.add(n);
        let children = map[n];
        if (!children)
            continue;
        for (let child of children) {
            if (!visited.has(child))
                queue.push(child);
        }
    }
    return visited.size === n;
};
exports.default = () => {
    console.log(validTree(5, [[0, 1], [0, 2], [0, 3], [1, 4]]));
    console.log(validTree(5, [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]]));
    console.log(validTree(3, [[1, 0], [2, 0]]));
};
