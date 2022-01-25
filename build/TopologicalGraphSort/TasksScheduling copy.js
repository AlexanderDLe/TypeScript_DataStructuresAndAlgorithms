"use strict";
/**
 * Grokking the Coding Interview
*/
Object.defineProperty(exports, "__esModule", { value: true });
let Heap = require('collections/heap');
let Deque = require('collections/Deque');
const tasksScheduling = (tasks, prerequisites) => {
    // Initialized graph and in-order
    let inDegrees = {};
    let adjList = {};
    let nonSources = new Set();
    for (let task of prerequisites) {
        let [parent, child] = task;
        nonSources.add(child);
        inDegrees[child] = (inDegrees[child] || 0) + 1;
        adjList[parent] = adjList[parent] || [];
        adjList[parent].push(child);
    }
    let sources = new Deque();
    for (let task of prerequisites) {
        let parent = task[0];
        if (!nonSources.has(parent)) {
            sources.push(parent);
            nonSources.add(parent);
        }
    }
    let finishedTasks = new Set();
    while (sources.length) {
        let vertex = sources.shift();
        if (finishedTasks.has(vertex))
            break;
        finishedTasks.add(vertex);
        tasks--;
        let childrenList = adjList[vertex];
        // IMPORTANT: The final children nodes will not have
        // its value as a key in the adjList - therefore it will return
        // undefined and you won't be able to iterate over it. CHECK IT.
        if (!childrenList)
            continue;
        for (let child of childrenList) {
            inDegrees[child]--;
            if (!inDegrees[child])
                sources.push(child);
        }
    }
    return tasks === 0;
};
exports.default = () => {
    console.log(tasksScheduling(3, [[0, 1], [1, 2]]));
    console.log(tasksScheduling(3, [[0, 1], [1, 2], [2, 0]]));
    console.log(tasksScheduling(6, [[2, 5], [0, 5], [0, 4], [1, 4], [3, 2], [1, 3]]));
};
