/**
 *  425. Word Squares
 */

import { PriorityQueue } from "@datastructures-js/priority-queue";
import { timeStamp } from "console";

const wordSquaresRef = (words:string[]) : string[][] => {
  const buildTrie = () => {
    const trie: any = {};
    for (let word of words) {
      let node = trie;
      for (let char of word) {
        node = (node[char] = node[char] || {});
        if (!node.words) node.words = [];
      }
      node.word = word;
    }
    return trie;
  }
  
  const findWords = (prefix:string, trie:any):string[] => {
    const DFS = (node:any, res:string[]) => {
      if (node.word) res.push(node.word);
      for (let key in node) {
        if (key === 'word') continue;
        DFS(node[key], res);
      }
    }

    let node = trie;
    const res: string[] = [];
    for (let p of prefix) {
      node = node[p];
      if (!node) return res;
    }

    DFS(node, res);
    return res;
  }

  const generate = (temp:string[], result:string[][], trie:any) => {
    if (temp.length && temp[0].length === temp.length) {
      result.push(temp);
      return;
    }
    let prefix = '';
    let j = temp.length;
    
    for (let i = 0; i < temp.length; i++) {
      prefix += temp[i][j];
    }
    
    const words = findWords(prefix, trie);
    console.log('----')
    console.log(temp);
    console.log(prefix);
    console.log(words);
    for (let word of words) {
      temp.push(word);
      generate(temp.slice(), result, trie);
      temp.pop();
    }
  }

  const trie = buildTrie();
  const result: string[][] = [];
  generate([], result, trie);
  return result;
}

const wordSquares = (words:string[]) : string[][] => {
  const wordLen = words[0].length;

  const buildTrie = () => {
    const trie: any = {};
    for (let word of words) {
      let node = trie;
      for (let char of word) {
        node = (node[char] = node[char] || {});
      }
      node.word = word;
    }
    return trie;
  }

  const getWordsStartingWithPrefix = (prefix:string, trie:any):string[] => {
    const DFS = (node:any, res:string[]) => {
      if (node.word) res.push(node.word);
      for (let char in node) {
        if (char === 'word') continue;
        DFS(node[char], res);
      }
    }

    let node = trie;
    for (let char of prefix) {
      node = node[char];
      if (!node) return [];
    }
    let res:string[] = []
    DFS(node, res)
    return res;
  }

  const generate = (temp:string[], result:string[][], trie:any) => {
    if (temp.length && temp.length === wordLen) {
      result.push(temp);
      return;
    }

    let prefix = '';
    let column = temp.length;
    for (let row = 0; row < column; row++) {
      prefix += temp[row][column];
    }

    const candidateWords = getWordsStartingWithPrefix(prefix, trie);
    for (let word of candidateWords) {
      temp.push(word);
      generate([...temp], result, trie);
      temp.pop();
    }
  }

  const trie = buildTrie();
  const result: string[][] = [];
  generate([], result, trie);
  return result;
}

export default () => {
  // console.log(wordSquares(["area","lead","wall","lady","ball"]))
  console.log(wordSquares(["abat","baba","atan","atal"]))
};
