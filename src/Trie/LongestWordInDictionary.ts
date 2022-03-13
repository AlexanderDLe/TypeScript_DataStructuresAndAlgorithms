/**
 * 720. Longest Word In Dictionary
 */

const longestWordTrie = (words: string[]): string => {
  const buildTrie = () => {
    let map: any = {};
    for (let word of words) {
      let curr = map;
      for (let char of word) {
        if (!curr[char]) curr[char] = {};
        curr = curr[char];
      }
      curr.word = word;
    }
    return map;
  }

  const trie = buildTrie();
  const queue: any[] = [trie];
  let result: string[] = [];
  let count = 1;

  while (queue.length) {
    let res: string[] = [];
    
    while (count) {
      let n = queue.shift();

      for (let key in n) {
        if (!n[key].word) continue;
        res.push(n[key].word);
        queue.push(n[key]);
      }
      count--;  
    }
    count = queue.length;
    
    if (!res.length) break;
    else result = res;
  }
  
  return result.length ? result.sort()[0] : '';
}

const longestWord = (words: string[]): string => {
  words.sort();
  let set = new Set();
  let res = '';

  for (let word of words) {
    let prefix = word.slice(0, word.length - 1);
    
    if (word.length === 1 || set.has(prefix)) {
      set.add(word);
      if (word.length > res.length) {
        res = word;
      }
    }
  }
  return res;
}

export default () => {
  console.log(longestWord(["w", "wo","wor","worl","world"]))
  console.log(longestWord(["a","banana","app","appl","ap","apply","apple"]))
};
