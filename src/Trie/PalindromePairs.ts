/**
 *  336. Palindrome Pairs
 */

const palindromePairsWRONG = (words: string[]): number[][] => {
  if (!words.length) return [];

  const buildTrie = () => {
    const trie: any = {indexes:[]};

    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      if (word === '') continue;
      let node = trie;
      node.indexes.push(i);
      
      for (let j = word.length - 1; j >= 0; j--) {
        let char = word[j];
        if (!node[char]) node[char] = {indexes: []};
        node = node[char];
        node.indexes.push(i);
      }
    }
    return trie;
  }

  const checkPalindrome = (word:string): boolean => {
    let L = 0, R = word.length - 1;
    while (L < R) if (word[L++] !== word[R--]) return false;
    return true;
  }

  const checkEmpty = (result:number[][]) => {
    for (let i = 0; i < words.length; i++) {
      if (words[i] !== '') continue;
      for (let j = 0; j < words.length; j++) {
        if (j === i) continue;
        if (checkPalindrome(words[j])) {
          result.push([i, j])
          result.push([j, i])
        }
      }
    }
  }

  const result: number[][] = [];
  const trie = buildTrie();
  checkEmpty(result);

  for (let i = 0; i < words.length; i++) {
    if (words[i] === '') continue;
    let node = trie;
    for (let char of words[i]) {
      node = node[char];
      if (!node) break;
    }
    if (!node) continue;
    
    let indexes = node.indexes;
    for (let j = 0; j < indexes.length; j++) {
      let index = indexes[j];
      if (i === index) continue;
      
      let combined = words[i] + words[index];
      if (checkPalindrome(combined)) result.push([i, index]);
    }
  }

  return result;
};

const palindromePairs = (words: string[]): number[][] => {
  const buildWordMap = () => {
    const wordMap = new Map();
    for (let i = 0; i < words.length; i++) {
      wordMap.set(words[i], i);
    }
    return wordMap;
  }
  const isPal = (word:string, L:number, R:number): boolean => {
    while (L < R) if (word[L++] !== word[R--]) return false;
    return true;
  }
  const handleEmptyString = (result:number[][]) => {
    for (let i = 0; i < words.length; i++) {
      if (words[i] !== '') continue;
      for (let j = 0; j < words.length; j++) {
        if (j === i) continue;
        if (isPal(words[j], 0, words[j].length - 1)) {
          result.push([i, j])
          result.push([j, i])
        }
      }
    }
  }
  
  const wordMap = buildWordMap();
  let result:number[][] = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i] === '') {
      handleEmptyString(result);
      continue;
    }
    
    let bw = words[i].split('').reverse().join('');
    let res = wordMap.get(bw);
    if (res !== undefined && res !== i) {
      result.push([i, res]);
    }

    for (let j = 1; j < bw.length; j++) {
      if (isPal(bw, 0, j - 1)) {
        let index = wordMap.get(bw.slice(j));
        if (index !== undefined && i !== index) result.push([i, index]);
      }
      if (isPal(bw, j, bw.length - 1)) {
        let index = wordMap.get(bw.slice(0, j));
        if (index !== undefined && i !== index) result.push([index, i]);
      }
    }
  }
  
  return result;
}

export default () => {
  // console.log(palindromePairs(["lls","s", "sssll"]));
  // console.log(palindromePairs(["abcd","dcba","lls","s","sssll"]));
  console.log(palindromePairs(["a","b","c","ab","ac","aa"]));
  // console.log(palindromePairs(["bat","tab","cat"]));
  // console.log(palindromePairs(["a",""]));
};
