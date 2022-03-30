"use strict";
/**
 *  642. Design Search Autocomplete System
 *
 * t1, t2, t3 t4 t5 t6
 *
 * t5
 *
 * t3
 * t4
 * t4
 */
Object.defineProperty(exports, "__esModule", { value: true });
const priority_queue_1 = require("@datastructures-js/priority-queue");
// Works but code is long and full of terrors
class CustomPriorityQueue extends priority_queue_1.PriorityQueue {
}
class AutocompleteSystemTooWordy {
    constructor(sentences, times) {
        this.getTopThreeResults = (wordIndexes) => {
            let heap = new CustomPriorityQueue({
                compare: (parent, curr) => {
                    if (parent.times === curr.times) {
                        return parent.sentence > curr.sentence ? -1 : 1;
                    }
                    return parent.times > curr.times ? 1 : -1;
                }
            });
            for (let index of wordIndexes) {
                let curr = this.indexMap[index];
                if (heap.size() < 3)
                    heap.enqueue(curr);
                else {
                    let qItem = heap.front();
                    if (curr.times === qItem.times) {
                        if (curr.sentence < qItem.sentence) {
                            heap.dequeue();
                            heap.enqueue(curr);
                        }
                    }
                    else if (curr.times > qItem.times) {
                        heap.dequeue();
                        heap.enqueue(curr);
                    }
                }
            }
            const result = [];
            console.log(`------------`);
            while (heap.size()) {
                console.log(heap.front());
                result.unshift(heap.dequeue().sentence);
            }
            return result;
        };
        this.endInput = () => {
            // Check if input already exists, then increment times the sentence was entered
            if (this.inputStr in this.sentenceMap) {
                let index = this.sentenceMap[this.inputStr];
                this.indexMap[index].times++;
                this.inputStr = '';
                return;
            }
            // If it doesn't exist, then build new.
            let index = this.size;
            this.indexMap[index] = {
                sentence: this.inputStr,
                times: 1
            };
            this.sentenceMap[this.inputStr] = index;
            this.addSentenceToTrie(index, this.inputStr);
            this.size++;
            this.inputStr = '';
        };
        this.buildIndexMap = (sentences, timesArr) => {
            this.indexMap = {};
            for (let i = 0; i < sentences.length; i++) {
                this.indexMap[i] = {
                    sentence: sentences[i],
                    times: timesArr[i]
                };
            }
        };
        this.buildSentenceMap = (sentences) => {
            this.sentenceMap = {};
            for (let i = 0; i < sentences.length; i++) {
                const sentence = sentences[i];
                this.sentenceMap[sentence] = i;
            }
        };
        this.buildTrie = (sentences) => {
            this.trie = { wordsOnPath: [] };
            for (let i = 0; i < sentences.length; i++) {
                const sentence = sentences[i];
                this.addSentenceToTrie(i, sentence);
            }
        };
        this.addSentenceToTrie = (index, sentence) => {
            let node = this.trie;
            for (let char of sentence) {
                node.wordsOnPath.push(index);
                node = (node[char] = node[char] || { wordsOnPath: [] });
            }
            node.wordsOnPath.push(index);
            node.end = index;
        };
        this.buildIndexMap(sentences, times);
        this.buildSentenceMap(sentences);
        this.buildTrie(sentences);
        this.inputStr = '';
        this.size = sentences.length;
    }
    input(c) {
        if (c === '#') {
            this.endInput();
            return [];
        }
        this.inputStr += c;
        let node = this.trie;
        for (let char of this.inputStr) {
            node = node[char];
            if (!node)
                return [];
        }
        return this.getTopThreeResults(node.wordsOnPath);
    }
}
class AutocompleteSystem {
    constructor(sentences, times) {
        this.trie = {};
        this.inputStr = '';
        for (let i = 0; i < sentences.length; i++) {
            this.insert(sentences[i], times[i]);
        }
    }
    input(c) {
        if (c === '#') {
            this.insert(this.inputStr, 1);
            this.inputStr = '';
            return [];
        }
        this.inputStr += c;
        let node = this.trie;
        let result = [];
        for (let char of this.inputStr) {
            node = node[char];
            if (!node)
                return [];
        }
        let DFS = (root, str) => {
            for (let key in root) {
                if (key === 'isEnd') {
                    if (!result[root.times])
                        result[root.times] = [];
                    result[root.times].push(str);
                    result[root.times].sort();
                }
                DFS(root[key], str + key);
            }
        };
        DFS(node, this.inputStr);
        let sorted = [];
        let sortedTimes = [...Object.keys(result)].sort((a, b) => b - a);
        for (let key of sortedTimes)
            sorted.push(...result[Number(key)]);
        return sorted.slice(0, 3);
    }
    insert(sentence, time) {
        let node = this.trie;
        for (let char of sentence) {
            node = (node[char] = node[char] || {});
        }
        node.isEnd = true;
        node.times = node.times + 1 || time;
    }
}
exports.default = () => {
    const obj = new AutocompleteSystem(["i love you", "island", "iroman", "i love leetcode"], [5, 3, 2, 2]);
    console.log(obj.input("i")); // return ["i love you", "island", "i love leetcode"]. There are four sentences that have prefix "i". Among them, "ironman" and "i love leetcode" have same hot degree. Since ' ' has ASCII code 32 and 'r' has ASCII code 114, "i love leetcode" should be in front of "ironman". Also we only need to output top 3 hot sentences, so "ironman" will be ignored.
    console.log(obj.input(" ")); // return ["i love you", "i love leetcode"]. There are only two sentences that have prefix "i ".
    console.log(obj.input("a")); // return []. There are no sentences that have prefix "i a".
    console.log(obj.input("#")); // return []. The user finished the input, the sentence "i a" should be saved as a historical sentence in system. And the following input will be counted as a new search.
    console.log(obj.input("i")); // return []. The user finished the input, the sentence "i a" should be saved as a historical sentence in system. And the following input will be counted as a new search.
    console.log(obj.input(" ")); // return []. The user finished the input, the sentence "i a" should be saved as a historical sentence in system. And the following input will be counted as a new search.
    console.log(obj.input("a")); // return []. The user finished the input, the sentence "i a" should be saved as a historical sentence in system. And the following input will be counted as a new search.
    console.log(obj.input("#")); // return []. The user finished the input, the sentence "i a" should be saved as a historical sentence in system. And the following input will be counted as a new search.
    console.log(obj.input("i")); // return []. The user finished the input, the sentence "i a" should be saved as a historical sentence in system. And the following input will be counted as a new search.
    console.log(obj.input(" ")); // return []. The user finished the input, the sentence "i a" should be saved as a historical sentence in system. And the following input will be counted as a new search.
    console.log(obj.input("a")); // return []. The user finished the input, the sentence "i a" should be saved as a historical sentence in system. And the following input will be counted as a new search.
};
