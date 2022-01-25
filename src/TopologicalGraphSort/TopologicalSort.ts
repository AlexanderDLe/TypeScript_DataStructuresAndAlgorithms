/**
 * Grokking the Coding Interview
*/

import { PrintArray, PrintMatrix, PrintObject } from "../utils/Utilities";
let Heap = require('collections/heap');
let Deque = require('collections/Deque');

const topologicalSortArrays = (vertices:number, edges:number[][]): number[] => {
    const sortedOrder: any = [];

    // Initialize the graph
    const inDegree = Array(vertices).fill(0);                   // Count of incoming edges
    const graph = Array(vertices).fill(0).map(() => Array());   // Adjacency List

    // Build the graph
    for (let edge of edges) {
        let parent = edge[0];
        let child = edge[1];

        inDegree[child]++;
        graph[parent].push(child)
    }

    // Find all sources i.e. all vertices with 0 in-degrees
    let sources = new Deque();
    for (let i = 0; i < inDegree.length; i++) {
        if (!inDegree[i]) sources.push(i);
    }

    // For each source, add it to sortedOrder and subract 1 from all of its children's in-degrees
    // If a child's in-degree becomes zero, add it to the sources queue
    while (sources.length > 0) {
        const vertex = sources.shift();
        sortedOrder.push(vertex);

        let childrenList = graph[vertex];
        for (let childVertex of childrenList) {
            inDegree[childVertex]--;

            // Important takeaway: A node becomes a source when it no longer has
            // incoming nodes - it is it's turn to become the outgoing node.
            if (!inDegree[childVertex]) sources.push(childVertex);
        }
    }

    return sortedOrder;
}

const topologicalSortObjects = (vertices:number, edges:number[][]): number[] => {
    let result: number[] = [];

    let inDegrees: any = {};
    let adjList: any = {};
    let nonSource = new Set();
    
    for (let edge of edges) {
        let [parent, child] = edge;
        
        inDegrees[child] = (inDegrees[child] || 0) + 1;

        nonSource.add(child);

        if (adjList[parent]) adjList[parent].push(child);
        else adjList[parent] = [child];
    }

    let queue = new Deque();

    for (let edge of edges) {
        let vertex = edge[0];
        if (!nonSource.has(vertex)) {
            queue.push(vertex);
            nonSource.add(vertex);
        }
    }

    while (queue.length) {
        let vertex = queue.shift();
        let childrenVertices = adjList[vertex];
        result.push(vertex);

        if (!childrenVertices) continue;
        for (let childVertex of childrenVertices) {
            inDegrees[childVertex]--;
            if (!inDegrees[childVertex]) queue.push(childVertex);
        }
    }

    return result;
}

export default () => {
    PrintArray(topologicalSortObjects(4, [
        [3, 2], 
        [3, 0], 
        [2, 0], 
        [2, 1]
    ]))

    PrintArray(topologicalSortObjects(5, [
        [4, 2], 
        [4, 3], 
        [2, 0], 
        [2, 1], 
        [3, 1]
    ]))

    PrintArray(topologicalSortObjects(7, [
        [6, 4], 
        [6, 2], 
        [5, 3], 
        [5, 4], 
        [3, 0], 
        [3, 1], 
        [3, 2], 
        [4, 1]
    ]))
};
