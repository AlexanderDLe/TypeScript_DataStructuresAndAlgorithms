/**
 * 745. Prefix and Suffix Search
 * 
 * 'apple'
 * 'ale'
 * 
 * F_trie = a > p > p > l > e
 *           \
 *            > l > e
 * 
 * B_trie = e > l > p > p > a
 *           \
 *            > l > a
 * 
 * (['a', 'le'])
 *    ^    ^
 * prefix suffix  
 */

import { MaxPriorityQueue,PriorityQueue } from "@datastructures-js/priority-queue";

// Works but current PQ above does not account for index
class WordFilterRef {
  words:string[];
  trie:any;

  constructor(words: string[]) {
    this.words = words;
    this.buildTries(words);
  }

  f(prefix:string, suffix:string) {
    let node = this.trie;

    for (let char of prefix) {
      node = node[char];
      if (!node) return -1;
    }
    
    const maxHeap = this.buildHeapBFS(node);    
    while (maxHeap.size()) {
      let {word, index} = maxHeap.dequeue().element;
      console.log(word, index);
      console.log(word.length);
      if (this.checkValidSuffix(word, suffix)) return index;
    }
    return -1;
  }

  checkValidSuffix(word:string, suffix:string): boolean {
    if (suffix.length > word.length) return false;
    console.log(word, suffix);
    for (let i = 0; i < suffix.length; i++) {
      let suffixChar = suffix[suffix.length - i - 1];
      let wordChar = word[word.length - i - 1];
      console.log(wordChar, suffixChar);
      if (suffixChar !== wordChar) return false;
    }
    return true;
  }

  buildTries(words:string[]) {
    this.trie = {};
    for (let index = 0; index < words.length; index++) {
      let word = words[index];
      let node = this.trie;

      for (let i = 0; i < word.length; i++) {
        let F_char = word[i];

        node = (node[F_char] = node[F_char] || {});
      }
      node.end = {word, index};
    }
  }

  buildHeapBFS(node:any) {
    const maxHeap = new MaxPriorityQueue({
      priority: (x:any) => x.word.length
    });
    const queue = [node];
    let count = queue.length;
    
    while (queue.length) {
      while (count) {
        let n = queue.shift();

        if (n.end) {
          let {word, index} = n.end;
          maxHeap.enqueue({word, index});
        }
        for (let key in n) {
          if (key === 'end') continue;
          queue.push(n[key]);
        }
        count--;
      }
      count = queue.length;
    }
    
    return maxHeap;
  }
}

class WordFilterA {
  root:any;
  res:number;
  constructor(words:string[]) {
    this.root = {};
    this.res = -1;

    for (let i = 0; i < words.length; i++) {
      let node = this.root;
      for (let char of words[i]) {
        node = (node[char] = node[char] || {});
      }
      node.word = words[i];
      node.index = i;
    }
  }
  f(prefix:string, suffix:string) {
    let node = this.root;
    for (let char of prefix) {
      node = node[char];
      if (!node) return -1;
    }
    this.res = -1;
    this.DFS(node, suffix);
    return this.res;
  }

  DFS(node:any, suffix:string) {
    if (node.word) {
      let start = node.word.length - suffix.length;
      if (start >= 0 && node.word.substring(start) === suffix) {
        this.res = Math.max(this.res, node.index);
      }
    }

    for (let key in node) {
      if (key === 'word' || key === 'index') continue;
      if (node[key]) {
        this.DFS(node[key], suffix);
      }
    }
  }
}

class WordFilter {
  trie:any;
  result:number;

  constructor(words: string[]) {
    this.trie = this.buildTrie(words);
    this.result = -1;
  }

  f(prefix: string, suffix: string): number {
    let node = this.trie;
    
    for (let char of prefix) {
      node = node[char];
      if (!node) return -1;
    }
    
    this.result = -1;
    this.DFS(node, suffix);
    return this.result;
  }

  DFS = (node:any, suffix:string) => {
    if (!node) return;
    if (node.word) {
      let sLen = suffix.length;
      let wordEndSubstr = node.word.substring(node.word.length - sLen, node.word.length);

      if (suffix.length > node.word.length) return;
      if (wordEndSubstr === suffix) {
        if (node.index > this.result) this.result = node.index;
      }
    }

    for (let key in node) {
      if (key === 'word' || key === 'index') continue;
      this.DFS(node[key], suffix);
    }
  }

  buildTrie = (words:string[]) => {
    const trie: any = {};
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      let node = trie;

      for (let char of word) {
        node = (node[char] = node[char] || {});
      }
      node.word = word;
      node.index = i;
    }
    return trie;
  }
}

export default () => {
  // const wordFilter1 = new WordFilter(['apple', 'ale']);
  // console.log(wordFilter1.f('a', 'e'))
  const wordFilter2 = new WordFilter(
    ["cabaabaaaa","ccbcababac","bacaabccba","bcbbcbacaa","abcaccbcaa","accabaccaa","cabcbbbcca","ababccabcb","caccbbcbab","bccbacbcba"]
  );
  console.log(wordFilter2.f("bccbacbcba","a"));
  console.log(wordFilter2.f("ab","abcaccbcaa"));
  console.log(wordFilter2.f("a","aa"))
  // console.log(wordFilter2.f("cabaaba","abaaaa"))
  // console.log(wordFilter2.f("cacc","accbbcbab"))
  // console.log(wordFilter2.f("ccbcab","bac"))
  // console.log(wordFilter2.f("bac","cba"))
  // console.log(wordFilter2.f("ac","accabaccaa"))
  // console.log(wordFilter2.f("bcbb","aa"))
  // console.log(wordFilter2.f("ccbca","cbcababac"))

};
