"use strict";
/**
 * AlgoExpert
 */
Object.defineProperty(exports, "__esModule", { value: true });
const cycleInGraph = (edges) => {
    const inDegrees = new Array(edges.length).fill(0);
    for (let i = 0; i < edges.length; i++) {
        for (let child of edges[i]) {
            inDegrees[child]++;
        }
    }
    let sourceQueue = [];
    inDegrees.forEach((vertex, i) => {
        if (!vertex)
            sourceQueue.push(i);
    });
    if (!sourceQueue.length)
        return true;
    while (sourceQueue.length) {
        let vertex = sourceQueue.shift();
        let childrenVertices = edges[vertex];
        for (let child of childrenVertices) {
            inDegrees[child]--;
            if (!inDegrees[child])
                sourceQueue.push(child);
        }
    }
    const leftoverSource = inDegrees.every(vertex => vertex === 0);
    return leftoverSource ? false : true;
};
exports.default = () => {
    const edges = [
        [1, 3],
        [2, 3, 4],
        [0],
        [],
        [2, 5],
        [],
    ];
    console.log(cycleInGraph(edges));
};
