"use strict";
/**
 * Grokking the Coding Interview
*/
Object.defineProperty(exports, "__esModule", { value: true });
const Utilities_1 = require("../utils/Utilities");
let Deque = require('collections/Deque');
const allTasksSchedulingOrdersRef = (tasks, prerequisites) => {
    const inDegree = {};
    const graph = {};
    const nonSource = new Set();
    for (let edge of prerequisites) {
        let [parent, child] = edge;
        nonSource.add(child);
        inDegree[child] = (inDegree[child] || 0) + 1;
        if (graph[parent])
            graph[parent].push(child);
        else
            graph[parent] = [child];
    }
    let sources = [];
    for (let edge of prerequisites) {
        let parent = edge[0];
        if (!nonSource.has(parent)) {
            sources.push(parent);
            nonSource.add(parent);
        }
    }
    let sortedOrder = [];
    const matrix = [];
    const addAllTopologicalSorts = (sources, sortedOrder) => {
        if (sortedOrder.length === 6) {
            matrix.push([...sortedOrder]);
            return;
        }
        for (let i = 0; i < sources.length; i++) {
            let vertex = sources[i];
            sortedOrder.push(vertex);
            let nextSources = [...sources];
            nextSources.splice(nextSources.indexOf(vertex), 1);
            let childrenVertices = graph[vertex];
            if (childrenVertices) {
                for (let child of childrenVertices) {
                    inDegree[child]--;
                    if (!inDegree[child])
                        nextSources.push(child);
                }
            }
            addAllTopologicalSorts(nextSources, sortedOrder);
            sortedOrder.splice(sortedOrder.indexOf(vertex), 1);
            if (childrenVertices) {
                for (let child of childrenVertices) {
                    inDegree[child]++;
                }
            }
        }
    };
    addAllTopologicalSorts(sources, sortedOrder);
    return matrix;
};
const allTasksSchedulingOrders = (tasks, prerequisites) => {
    const inDegrees = {};
    const graph = {};
    const nonSource = new Set();
    for (let edge of prerequisites) {
        let [parent, child] = edge;
        nonSource.add(child);
        inDegrees[child] = (inDegrees[child] || 0) + 1;
        if (graph[parent])
            graph[parent].push(child);
        else
            graph[parent] = [child];
    }
    let initialSources = [];
    for (let edge of prerequisites) {
        let parent = edge[0];
        if (!nonSource.has(parent)) {
            nonSource.add(parent);
            initialSources.push(parent);
        }
    }
    let allSortedOrders = [];
    const getAllTopologicalOrders = (sources, sortedOrder) => {
        if (sortedOrder.length === tasks) {
            allSortedOrders.push([...sortedOrder]);
            return;
        }
        for (let i = 0; i < sources.length; i++) {
            let vertex = sources[i];
            sortedOrder.push(vertex);
            let nextSources = [...sources];
            nextSources.splice(nextSources.indexOf(vertex), 1);
            let childrenVertices = graph[vertex];
            if (childrenVertices) {
                for (let child of childrenVertices) {
                    inDegrees[child]--;
                    if (!inDegrees[child])
                        nextSources.push(child);
                }
            }
            getAllTopologicalOrders(nextSources, sortedOrder);
            sortedOrder.splice(sortedOrder.indexOf(vertex), 1);
            if (childrenVertices) {
                for (let child of childrenVertices) {
                    inDegrees[child]++;
                }
            }
        }
    };
    getAllTopologicalOrders(initialSources, []);
    return allSortedOrders;
};
exports.default = () => {
    // PrintMatrix(allTasksSchedulingOrders(3, [[0, 1], [1, 2]]))
    // PrintMatrix(allTasksSchedulingOrders(4, [[3, 2], [3, 0], [2, 0], [2, 1]]))
    (0, Utilities_1.PrintMatrix)(allTasksSchedulingOrders(6, [[2, 5], [0, 5], [0, 4], [1, 4], [3, 2], [1, 3]]));
};
