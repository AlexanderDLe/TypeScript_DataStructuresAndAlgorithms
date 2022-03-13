"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 133. Clone Graph
 *
 * 1 --------- 2
 * |           |
 * |           |
 * |           |
 * 4---------- 3
 *
 * Given node 1.
 *
 * Node = {
 *  val = 1,
 *  neighbors = [Node2 and Node4).
 * }
 *
 *
 */
class Node {
    constructor(val, neighbors) {
        this.val = (val === undefined ? 0 : val);
        this.neighbors = (neighbors === undefined ? [] : neighbors);
    }
}
const cloneQueue = (node) => {
    if (!node)
        return null;
    let toVisit = new Set();
    let queue = [node];
    let map = {};
    toVisit.add(node.val);
    while (queue.length) {
        let n = queue.shift();
        let newNode = new Node(n.val);
        map[n.val] = newNode;
        for (let neighbor of n.neighbors) {
            if (!toVisit.has(neighbor.val)) {
                toVisit.add(neighbor.val);
                queue.push(neighbor);
            }
        }
    }
    toVisit.clear();
    queue = [node];
    toVisit.add(node.val);
    while (queue.length) {
        let n = queue.shift();
        let copy = map[n.val];
        for (let neighbor of n.neighbors) {
            if (!toVisit.has(neighbor.val)) {
                toVisit.add(neighbor.val);
                queue.push(neighbor);
            }
            copy.neighbors.push(map[neighbor.val]);
        }
    }
    return map[node.val];
};
const clone = (node) => {
    const map = {};
    const DFS = (n) => {
        if (map[n.val])
            return map[n.val];
        const copy = new Node(n.val);
        map[n.val] = copy;
        for (let nb of n.neighbors) {
            copy.neighbors.push(DFS(nb));
        }
        return copy;
    };
    return DFS(node);
};
exports.default = () => {
    let node1 = new Node(1);
    let node2 = new Node(2);
    let node3 = new Node(3);
    let node4 = new Node(4);
    node1.neighbors = [node2, node4];
    node2.neighbors = [node1, node3];
    node3.neighbors = [node2, node4];
    node4.neighbors = [node1, node3];
    console.log(clone(node1));
};
