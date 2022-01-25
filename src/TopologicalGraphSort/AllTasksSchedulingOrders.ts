/**
 * Grokking the Coding Interview
*/

import ConstructBSTFromPreorderAndInorder from "../Trees/ConstructBSTFromPreorderAndInorder";
import { PrintArray, PrintMatrix, PrintObject } from "../utils/Utilities";
let Deque = require('collections/Deque');

const allTasksSchedulingOrdersRef = (tasks:number, prerequisites:number[][]): number[][] => {
    const inDegree: {[key: number]: number} = {};
    const graph: {[key: number]: number[]} = {};
    const nonSource = new Set<number>();

    for (let edge of prerequisites) {
        let [parent, child] = edge;

        nonSource.add(child);
        inDegree[child] = (inDegree[child] || 0) + 1;

        if (graph[parent]) graph[parent].push(child);
        else graph[parent] = [child];
    }
    
    let sources: number[] = [];
    for (let edge of prerequisites) {
        let parent = edge[0];
        
        if (!nonSource.has(parent)) {
            sources.push(parent);
            nonSource.add(parent);
        }
    }

    let sortedOrder: number[] = [];
    const matrix: number[][] = [];

    const addAllTopologicalSorts = (sources: any, sortedOrder: any) => {
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
                    if (!inDegree[child]) nextSources.push(child);
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
    }

    addAllTopologicalSorts(sources, sortedOrder);
    return matrix;
}

const allTasksSchedulingOrders = (tasks:number, prerequisites:number[][]): number[][] => {
    const inDegrees: any = {};
    const graph: any = {};
    const nonSource = new Set<number>();

    for (let edge of prerequisites) {
        let [parent, child] = edge;

        nonSource.add(child);
        inDegrees[child] = (inDegrees[child] || 0) + 1;

        if (graph[parent]) graph[parent].push(child);
        else graph[parent] = [child];
    }

    let initialSources: number[] = [];
    for (let edge of prerequisites) {
        let parent = edge[0];
        if (!nonSource.has(parent)) {
            nonSource.add(parent);
            initialSources.push(parent);
        }
    }

    let allSortedOrders: number[][] = []
    const getAllTopologicalOrders = (sources: number[], sortedOrder: number[]) => {
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
                    if (!inDegrees[child]) nextSources.push(child);
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
    }
    
    getAllTopologicalOrders(initialSources, []);
    return allSortedOrders;
}

export default () => {
    // PrintMatrix(allTasksSchedulingOrders(3, [[0, 1], [1, 2]]))
    // PrintMatrix(allTasksSchedulingOrders(4, [[3, 2], [3, 0], [2, 0], [2, 1]]))
    PrintMatrix(allTasksSchedulingOrders(6, [[2, 5], [0, 5], [0, 4], [1, 4], [3, 2], [1, 3]]))
};
