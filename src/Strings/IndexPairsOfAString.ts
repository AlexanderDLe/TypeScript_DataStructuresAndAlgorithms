/**
 *  1065. Index Pairs of a String
 */

import ReverseSublist from "../LinkedListReversal/ReverseSublist";

const indexPairs = (text: string, words: string[]): number[][] => {
  const buildTrie = () => {
    const trie: any = {};
    for (let word of words) {
      let curr = trie;
      for (let char of word) {
        if (!curr[char]) curr[char] = {};
        curr = curr[char];
      }
      curr.word = true;
    }
    return trie;
  }

  const trie = buildTrie();
  const result:number[][] = []
  const len = text.length;

  for (let start = 0; start < len; start++) {
    let node = trie;

    for (let i = start; i < len; i++) {
      let char = text[i];
      if (!node[char]) break;

      node = node[char];
      if (node.word) result.push([start, i]);
    }
  }

  return result;
};

export default () => {
  const text = 'thestoryofleetcodeandme'
  const words = ["story","fleet","leetcode"];
  console.log(indexPairs(text, words));
};
