/**
 * 472 Concatenated Words
 * 
 * Use trie to keep track of valid chars?
 * 1. You can use the same word multiple times.
 * 2. If different words have overlap - how do you account for different combinations?
 *    For ex: ca, cat, and cats are valid prefixes of catsdogs
 * 3. Word cannot use itself.
 */

// Solution came close but it doesn't prevent the repeating of
// substrings. Use the memoized function below
const findAllWRONG = (words:string[]): string[] => {
  const buildTrie = () => {
    let trie: any = {};
    
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      let node = trie;
      for (let char of word) {
        if (!node[char]) node[char] = {};
        node = node[char];
      }
      node.index = i;
    }

    return trie;
  }
  
  const trie: any = buildTrie();
  const result: string[] = []
  
  const search = (word:string, wordIndex:number, index:number, node:any) => {
    while (index < word.length) {
      let char = word[index];
      if (!(char in node)) return;
      node = node[char];
      // Mistake1: When making next recursive call, you must start
      // at the beginning of the trie (not current node) to account for all words.
      // Mistake2: When making next recursive call, don't recurse if you're using the same word
      if ('index' in node && node.index !== wordIndex) search(word, wordIndex, index + 1, trie);
      index++;
    }

    // Mistake: When 
    if (index === word.length && 'index' in node && node.index !== wordIndex) {
      // console.log(`index:${index} ${word} ${node.index} ${wordIndex} ${node.index !== wordIndex}`);
      result.push(word);
    }
  }

  for (let i = 0; i < words.length; i++) {
    search(words[i], i, 0, trie);
  }

  return result;
}

const findAllRef = (words:string[]): string[] => {
  const buildTrie = () => {
    let trie: any = {};    
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      let node = trie;
      for (let char of word) {
        node = (node[char] = node[char] || {});
      }
      node.end = word.length;
    }    
    return trie;
  }
  
  const result: string[] = []
  const trie = buildTrie();

  const traverse = (remaining:string, word = remaining, node = trie, count = 0, memo = new Set()) => {
    console.log('Word:', word, '| Remaining:', remaining, '| Count: ', count)
    if (memo.has(remaining)) return;
    if (!remaining.length && count > 1) return result.push(word);
    
    for (let char of remaining) {
      node = node[char];
      if (!node) return;
      if (!node.end) continue;
      let nextRemaining = remaining.slice(node.end);
      traverse(nextRemaining, word, trie, count + 1, memo);
      // Why memo? Because there can be multiple paths to get to a certain point.
      //
      // For example, take 'a', 'aa', aaa', 'ab', 'aaab'
      //
      // To get to ab, you can take 'a'+'a'+'ab'
      //                         or 'aa'+'ab'
      //
      // In both situations, you arrive at 'ab' separately - HOWEVER, you need to memoize that 'ab'
      // string to prevent repeating work AND pushing repeated words into the result.
      memo.add(nextRemaining);
      console.log('add next to memo:', memo)
    }
  }

  for (let word of words) traverse(word);
  return result;
}

const findAllA = (words:string[]): string[] => {
  if (!words.length) return [];

  const buildTrie = () => {
    let root: any = {};
    for (let word of words) {
      let node = root;
      for (let char of word) {
        node = (node[char] = node[char] || {});
      }
      node.end = word.length;
    }
    return root;
  }

  const result:string [] = [];
  const trie = buildTrie();

  const search = (remaining:string, word = remaining, count = 0, node = trie, memo = new Set()) => {
    if (memo.has(remaining)) return;
    if (!remaining.length && count > 1) return result.push(word);

    for (let i = 0; i < remaining.length; i++) {
      let char = remaining[i];
      node = node[char];
      if (!node) return;
      if (!node.end) continue;
      let next = remaining.slice(i + 1);
      search(next, word, count + 1, trie, memo);
      memo.add(next);
    }
  }

  for (let word of words) search(word);

  return result;
}

const findAllB = (words:string[]): string[] => {
  if (!words.length) return [];

  const buildTrie = () => {
    const root: any = {};
    for (let word of words) {
      let node = root;
      for (let char of word) {
        node = (node[char] = node[char] || {});
      }
      node.end = word.length;
    }
    return root;
  }
  const trie = buildTrie();
  const result: string[] = [];

  const search = (remaining:string, word = remaining, count = 0, node = trie, memo = new Set()) => {
    if (memo.has(remaining)) return;
    if (!remaining.length && count > 1) return result.push(word);

    for (let char of remaining) {
      node = node[char];
      if (!node) return;
      if (!node.end) continue;
      let nextRemaining = remaining.slice(node.end);
      search(nextRemaining, word, count + 1, trie, memo);
      memo.add(nextRemaining)
    }
  }

  for (let word of words) {
    search(word);
  }

  return result;
}

const findAll = (words:string[]): string[] => {
  if (!words.length) return [];

  const buildTrie = () => {
    const root: any = {};
    for (let word of words) {
      let node = root;
      for (let char of word) {
        node = (node[char] = node[char] || {});
      }
      node.word = word;
    }
    return root;
  }
  
  const trie = buildTrie();
  const result: string[] = [];

  const search = (remaining:string, word:string, count:number, node:any, memo:any) => {
    if (memo.has(remaining)) return;
    if (!remaining.length && count > 1) {
      result.push(word);
      return;
    }

    for (let char of remaining) {
      node = node[char];
      // Mistake: Check if !node - NOT !node[char].
      // You've already assigned to next node - so check current.
      if (!node) return;
      if (!node.word) continue;

      // Mistake: You want to slice "remaining" - because that is
      // the working substring - "word" is just a reference to the entire
      // word for the result.
      let nextRemaining = remaining.slice(node.word.length);

      // Mistake: Recurse with TRIE not the ending node.
      // We want to start over with all possible word again.
      search(nextRemaining, word, count + 1, trie, memo);
      memo.add(nextRemaining);
    }
  }
  
  for (let word of words) {
    search(word, word, 0, trie, new Set());
  }

  return result;
}

export default () => {
  console.log(findAll(["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]))
  console.log(findAll(["cat","dog","catdog"]))
  console.log(findAll(['a','aa','aaa','aaaa']))
  console.log(findAll(["rfkqyuqfjkx","","vnrtysfrzrmzl","gfve","qfpd","lqdqrrcrwdnxeuo","q","klaitgdphcspij","hbsfyfv","adzpbfudkklrw","aozmixr","ife","feclhbvfuk","yeqfqojwtw","sileeztxwjl","ngbqqmbxqcqp","khhqr","dwfcayssyoqc","omwufbdfxu","zhift","kczvhsybloet","crfhpxprbsshsjxd","ilebxwbcto","yaxzfbjbkrxi","imqpzwmshlpj","ta","hbuxhwadlpto","eziwkmg","ovqzgdixrpddzp","c","wnqwqecyjyib","jy","mjfqwltvzk","tpvo","phckcyufdqml","lim","lfz"]))
};
