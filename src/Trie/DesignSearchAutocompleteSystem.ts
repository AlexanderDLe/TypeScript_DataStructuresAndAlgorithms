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

import { PriorityQueue } from "@datastructures-js/priority-queue";
import { timeStamp } from "console";

// Works but code is long and full of terrors
class CustomPriorityQueue extends PriorityQueue<any> {}
class AutocompleteSystemTooWordy {
  indexMap: any;
  sentenceMap: any;
  trie: any;
  inputStr: string;
  size: number;

  constructor(sentences: string[], times: number[]) {
    this.buildIndexMap(sentences, times);
    this.buildSentenceMap(sentences);
    this.buildTrie(sentences);
    this.inputStr = '';
    this.size = sentences.length;
  }

  input(c: string): string[] {
    if (c === '#') {
      this.endInput();
      return [];
    }

    this.inputStr += c;
    let node = this.trie;

    for (let char of this.inputStr) {
      node = node[char];
      if (!node) return [];
    }

    return this.getTopThreeResults(node.wordsOnPath);
  }
  
  getTopThreeResults = (wordIndexes:number[]):string[] => {
    let heap = new CustomPriorityQueue({
      compare: (parent:any, curr:any):number => {
        if (parent.times === curr.times) {
          return parent.sentence > curr.sentence ? -1 : 1;
        }
        return parent.times > curr.times ? 1 : -1;
      }
    })
    
    for (let index of wordIndexes) {
      let curr = this.indexMap[index];

      if (heap.size() < 3) heap.enqueue(curr);
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

    const result: string[] = [];
    console.log(`------------`);
    while (heap.size()) {
      console.log(heap.front());
      result.unshift(heap.dequeue().sentence);
    }
    return result;
  }

  endInput = () => {
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
  }

  buildIndexMap = (sentences:string[], timesArr:number[]) => {
    this.indexMap = {};

    for (let i = 0; i < sentences.length; i++) {
      this.indexMap[i] = {
        sentence: sentences[i],
        times: timesArr[i]
      }
    }
  }

  buildSentenceMap = (sentences:string[]) => {
    this.sentenceMap = {};
    for (let i = 0; i < sentences.length; i++) {
      const sentence = sentences[i];
      this.sentenceMap[sentence] = i;
    }
  }

  buildTrie = (sentences:string[]) => {
    this.trie = {wordsOnPath: []};

    for (let i = 0; i < sentences.length; i++) {
      const sentence = sentences[i];
      this.addSentenceToTrie(i, sentence);
    }
  }

  addSentenceToTrie = (index:number, sentence:string) => {  
    let node = this.trie;
    for (let char of sentence) {
        node.wordsOnPath.push(index);
        node = (node[char] = node[char] || {wordsOnPath: []});
      
    }
    node.wordsOnPath.push(index);
    node.end = index;
  }
}

class AutocompleteSystem {
  trie: any;
  inputStr: string;

  constructor(sentences: string[], times: number[]) {
    this.trie = {};
    this.inputStr = '';

    for (let i = 0; i < sentences.length; i++) {
      this.insert(sentences[i], times[i]);
    }
  }

  input(c: string): string[] {
    if (c === '#') {
      this.insert(this.inputStr, 1);
      this.inputStr = '';
      return [];
    }

    this.inputStr += c;
    let node = this.trie;
    let result: string[][] = []

    for (let char of this.inputStr) {
      node = node[char];
      if (!node) return [];
    }

    let DFS = (root:any, str:string) => {
      for (let key in root) {
        if (key === 'isEnd') {
          if (!result[root.times]) result[root.times] = [];
          result[root.times].push(str);
          result[root.times].sort();
        }
        DFS(root[key], str + key);
      }
    }

    DFS(node, this.inputStr);

    let sorted = [];
    let sortedTimes = [...Object.keys(result)].sort((a:any, b:any) => b - a)
    for (let key of sortedTimes) sorted.push(...result[Number(key)]);

    return sorted.slice(0, 3);
  }

  insert(sentence:string, time:number) {
    let node = this.trie;
    for (let char of sentence) {
      node = (node[char] = node[char] || {});
    }
    node.isEnd = true;
    node.times = node.times + 1 || time;
  }
}

export default () => {
  const obj = new AutocompleteSystem(["i love you", "island", "iroman", "i love leetcode"], [5, 3, 2, 2]);
  console.log(obj.input("i")) // return ["i love you", "island", "i love leetcode"]. There are four sentences that have prefix "i". Among them, "ironman" and "i love leetcode" have same hot degree. Since ' ' has ASCII code 32 and 'r' has ASCII code 114, "i love leetcode" should be in front of "ironman". Also we only need to output top 3 hot sentences, so "ironman" will be ignored.
  console.log(obj.input(" ")) // return ["i love you", "i love leetcode"]. There are only two sentences that have prefix "i ".
  console.log(obj.input("a")) // return []. There are no sentences that have prefix "i a".
  console.log(obj.input("#")) // return []. The user finished the input, the sentence "i a" should be saved as a historical sentence in system. And the following input will be counted as a new search.
  console.log(obj.input("i")) // return []. The user finished the input, the sentence "i a" should be saved as a historical sentence in system. And the following input will be counted as a new search.
  console.log(obj.input(" ")) // return []. The user finished the input, the sentence "i a" should be saved as a historical sentence in system. And the following input will be counted as a new search.
  console.log(obj.input("a")) // return []. The user finished the input, the sentence "i a" should be saved as a historical sentence in system. And the following input will be counted as a new search.
  console.log(obj.input("#")) // return []. The user finished the input, the sentence "i a" should be saved as a historical sentence in system. And the following input will be counted as a new search.
  console.log(obj.input("i")) // return []. The user finished the input, the sentence "i a" should be saved as a historical sentence in system. And the following input will be counted as a new search.
  console.log(obj.input(" ")) // return []. The user finished the input, the sentence "i a" should be saved as a historical sentence in system. And the following input will be counted as a new search.
  console.log(obj.input("a")) // return []. The user finished the input, the sentence "i a" should be saved as a historical sentence in system. And the following input will be counted as a new search.
};
