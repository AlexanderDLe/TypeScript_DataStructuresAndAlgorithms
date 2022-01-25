/**
 * Grokking the Coding Interview
*/

import WordsConcatenation from "../SlidingWindow/WordsConcatenation";
import ConstructBSTFromPreorderAndInorder from "../Trees/ConstructBSTFromPreorderAndInorder";
import { PrintArray, PrintMatrix, PrintObject } from "../utils/Utilities";
let Deque = require('collections/Deque');


const alienDictionaryFirstTry = (dictionary:string[]): string => {
    const inDegrees: any = {};
    const graph: any = {};
    const nonSource = new Set<string>();

    const callGetLayerOrder = (sameFirstLetters: string[]) => {
        for (let i = 0; i < sameFirstLetters.length; i++) {
            sameFirstLetters[i] = sameFirstLetters[i].substring(1);
        }
        getLayerOrder(sameFirstLetters);
    }

    const getLayerOrder = (words: string[]) => {
        console.log(words);
        if (words.length < 2) return;

        let currWord = words[0];
        let sameFirstLetters = [currWord]
        
        for (let i = 1; i < words.length; i++) {
            let nextWord = words[i]
            let nextFirstLetter = nextWord[0];
            let currFirstLetter = currWord[0];

            // console.log(currFirstLetter, nextFirstLetter)
            if (currFirstLetter === nextFirstLetter) {
                sameFirstLetters.push(nextWord);
                if (i === words.length - 1) callGetLayerOrder(sameFirstLetters)
            } else {
                nonSource.add(nextFirstLetter);
                inDegrees[nextFirstLetter] = (inDegrees[nextFirstLetter] || 0) + 1;

                if (graph[currFirstLetter]) graph[currFirstLetter].push(nextFirstLetter);
                else graph[currFirstLetter] = [nextFirstLetter];

                callGetLayerOrder(sameFirstLetters)
                sameFirstLetters = [nextWord];
            }
            currWord = nextWord;
        }
    }
    
    getLayerOrder(dictionary);
    // PrintObject(inDegrees)
    // PrintObject(graph)

    let queue: string[] = [];
    for (let parent in graph) {
        if (!nonSource.has(parent)) {
            nonSource.add(parent);
            queue.push(parent);
        }
    }

    let result = '';
    while (queue.length) {
        let vertex = queue.shift();
        result += vertex;

        let childrenVertices = graph[vertex];
        if (!childrenVertices) continue;
        for (let child of childrenVertices) {
            inDegrees[child]--;
            if (!inDegrees[child]) queue.push(child);
        }
    }

    return result;
}

const alienDictionary = (dictionary:string[]): string => {
    const inDegrees: any = {};
    const graph: any = {};
    const nonSource = new Set<string>();

    for (let i = 0; i < dictionary.length - 1; i++) {
        let leftWord = dictionary[i];
        let rightWord = dictionary[i + 1];

        for (let j = 0; j < Math.min(leftWord.length, rightWord.length); j++) {
            let parent = leftWord[j];
            let child = rightWord[j];

            if (parent !== child) {
                inDegrees[child] = (inDegrees[child] || 0) + 1;
                nonSource.add(child);
                
                if (graph[parent]) graph[parent].push(child);
                else graph[parent] = [child];
                break;
            }
        }
    }

    let queue: string[] = [];
    for (let parent in graph) {
        if (!nonSource.has(parent)) {
            nonSource.add(parent);
            queue.push(parent);
        }
    }

    let result = '';
    while (queue.length) {
        let vertex = queue.shift();
        result += vertex;

        let childrenVertices = graph[vertex];
        if (!childrenVertices) continue;
        for (let child of childrenVertices) {
            inDegrees[child]--;
            if (!inDegrees[child]) queue.push(child);
        }
    }
    
    
    return result;
}

export default () => {
    console.log(alienDictionary(["ba", "bc", "ac", "cab"]))
    console.log(alienDictionary(["cab", "aaa", "aab"]))
    console.log(alienDictionary(["ywx", "wz", "xww", "xz", "zyy", "zwz"]))
};
