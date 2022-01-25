"use strict";
/**
 * Grokking the Coding Interview
*/
Object.defineProperty(exports, "__esModule", { value: true });
const Utilities_1 = require("../utils/Utilities");
let Heap = require('collections/heap');
let Deque = require('collections/Deque');
const tasksSchedulingOrder = (tasks, prerequisites) => {
    const inDegrees = {};
    const adjList = {};
    const nonSource = new Set();
    for (let edge of prerequisites) {
        let [parent, child] = edge;
        inDegrees[child] = (inDegrees[child] || 0) + 1;
        nonSource.add(child);
        if (adjList[parent])
            adjList[parent].push(child);
        else
            adjList[parent] = [child];
    }
    const queue = [];
    for (let edge of prerequisites) {
        let parent = edge[0];
        if (!nonSource.has(parent)) {
            queue.push(parent);
            nonSource.add(parent);
        }
    }
    if (!queue.length)
        return [];
    const resultSet = new Set();
    while (queue.length) {
        let vertex = queue.shift();
        if (resultSet.has(vertex))
            return [];
        resultSet.add(vertex);
        let childrenVertices = adjList[vertex];
        if (!childrenVertices)
            continue;
        for (let child of childrenVertices) {
            inDegrees[child]--;
            if (!inDegrees[child])
                queue.push(child);
        }
    }
    return Array.from(resultSet);
};
exports.default = () => {
    (0, Utilities_1.PrintArray)(tasksSchedulingOrder(3, [[0, 1], [1, 2]]));
    (0, Utilities_1.PrintArray)(tasksSchedulingOrder(3, [[0, 1], [1, 2], [2, 0]]));
    (0, Utilities_1.PrintArray)(tasksSchedulingOrder(6, [[2, 5], [0, 5], [0, 4], [1, 4], [3, 2], [1, 3]]));
};
