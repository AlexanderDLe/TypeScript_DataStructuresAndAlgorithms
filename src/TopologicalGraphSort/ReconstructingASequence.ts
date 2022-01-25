/**
 * Grokking the Coding Interview
*/

import WordsConcatenation from "../SlidingWindow/WordsConcatenation";
import ConstructBSTFromPreorderAndInorder from "../Trees/ConstructBSTFromPreorderAndInorder";
import { PrintArray, PrintMatrix, PrintObject } from "../utils/Utilities";
let Deque = require('collections/Deque');


const reconstructingASequence = (original:number[], sequences: number[][]): boolean => {
    const inDegrees: any = {};
    const graph: any = {};
    const nonSource = new Set();

    for (let sequence of sequences) {
        for (let i = 0; i < sequence.length - 1; i++) {
            let parent = sequence[i];
            let child = sequence[i + 1];

            inDegrees[child] = (inDegrees[child] || 0) + 1;
            nonSource.add(child);

            if (graph[parent]) graph[parent].push(child);
            else graph[parent] = [child];
        }
    }
    
    let queue: number[] = [];
    for (let parent in graph) {
        if (!nonSource.has(Number(parent))) {
            nonSource.add(Number(parent));
            queue.push(Number(parent));
        }
    }
    
    while (queue.length) {
        if (queue.length > 1) return false;

        let vertex = queue.shift();

        let childrenVertices = graph[vertex];
        if (!childrenVertices) continue;

        for (let child of childrenVertices) {
            inDegrees[child]--;
            if (!inDegrees[child]) queue.push(child);
        }
    }

    return true;
}

export default () => {
    console.log(reconstructingASequence([1, 2, 3, 4], [[1, 2], [2, 3], [3, 4]]))
    console.log(reconstructingASequence([1, 2, 3, 4], [[1, 2], [2, 3], [2, 4]]))
    console.log(reconstructingASequence([3, 1, 4, 2, 5], [[3, 1, 5], [1, 4, 2, 5]]))
};
