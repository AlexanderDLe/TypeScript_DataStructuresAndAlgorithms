"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const topologicalSort = (jobs, deps) => {
    const sourceSet = new Set(jobs);
    const inDegrees = {};
    const parents = {};
    for (let dep of deps) {
        let [parent, child] = dep;
        inDegrees[child] = (inDegrees[child] || 0) + 1;
        if (!parents[parent])
            parents[parent] = [];
        parents[parent].push(child);
        if (sourceSet.has(child))
            sourceSet.delete(child);
    }
    const sources = Array.from(sourceSet);
    const result = [];
    while (sources.length) {
        let vertex = sources.shift();
        result.push(vertex);
        let childrenVertices = parents[vertex] || null;
        if (!childrenVertices)
            continue;
        for (let child of childrenVertices) {
            inDegrees[child]--;
            if (!inDegrees[child])
                sources.push(child);
        }
    }
    if (result.length !== jobs.length)
        return [];
    return result;
};
exports.default = () => {
    const test = {
        "jobs": [1, 2, 3, 4, 5, 6, 7, 8],
        "deps": [
            [3, 1],
            [8, 1],
            [8, 7],
            [5, 7],
            [5, 2],
            [1, 4],
            [1, 6],
            [1, 2],
            [7, 6],
            [4, 6],
            [6, 2],
            [2, 3]
        ],
    };
    console.log(topologicalSort(test.jobs, test.deps));
};
