"use strict";
/**
 * 472 Concatenated Words
 *
 * Use trie to keep track of valid chars?
 * 1. You can use the same word multiple times.
 * 2. If different words have overlap - how do you account for different combinations?
 *    For ex: ca, cat, and cats are valid prefixes of catsdogs
 * 3. Word cannot use itself.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// Solution came close but it doesn't prevent the repeating of
// substrings. Use the memoized function below
const findAllWRONG = (words) => {
    const buildTrie = () => {
        let trie = {};
        for (let i = 0; i < words.length; i++) {
            let word = words[i];
            let node = trie;
            for (let char of word) {
                if (!node[char])
                    node[char] = {};
                node = node[char];
            }
            node.index = i;
        }
        return trie;
    };
    const trie = buildTrie();
    const result = [];
    const search = (word, wordIndex, index, node) => {
        while (index < word.length) {
            let char = word[index];
            if (!(char in node))
                return;
            node = node[char];
            // Mistake1: When making next recursive call, you must start
            // at the beginning of the trie (not current node) to account for all words.
            // Mistake2: When making next recursive call, don't recurse if you're using the same word
            if ('index' in node && node.index !== wordIndex)
                search(word, wordIndex, index + 1, trie);
            index++;
        }
        // Mistake: When 
        if (index === word.length && 'index' in node && node.index !== wordIndex) {
            // console.log(`index:${index} ${word} ${node.index} ${wordIndex} ${node.index !== wordIndex}`);
            result.push(word);
        }
    };
    for (let i = 0; i < words.length; i++) {
        search(words[i], i, 0, trie);
    }
    return result;
};
const findAllRef = (words) => {
    const buildTrie = () => {
        let trie = {};
        for (let i = 0; i < words.length; i++) {
            let word = words[i];
            let node = trie;
            for (let char of word) {
                node = (node[char] = node[char] || {});
            }
            node.end = word.length;
        }
        return trie;
    };
    const result = [];
    const trie = buildTrie();
    const traverse = (remaining, word = remaining, node = trie, count = 0, memo = new Set()) => {
        console.log('Word:', word, '| Remaining:', remaining, '| Count: ', count);
        if (memo.has(remaining))
            return;
        if (!remaining.length && count > 1)
            return result.push(word);
        for (let char of remaining) {
            node = node[char];
            if (!node)
                return;
            if (!node.end)
                continue;
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
            console.log('add next to memo:', memo);
        }
    };
    for (let word of words)
        traverse(word);
    return result;
};
const findAllA = (words) => {
    if (!words.length)
        return [];
    const buildTrie = () => {
        let root = {};
        for (let word of words) {
            let node = root;
            for (let char of word) {
                node = (node[char] = node[char] || {});
            }
            node.end = word.length;
        }
        return root;
    };
    const result = [];
    const trie = buildTrie();
    const search = (remaining, word = remaining, count = 0, node = trie, memo = new Set()) => {
        if (memo.has(remaining))
            return;
        if (!remaining.length && count > 1)
            return result.push(word);
        for (let i = 0; i < remaining.length; i++) {
            let char = remaining[i];
            node = node[char];
            if (!node)
                return;
            if (!node.end)
                continue;
            let next = remaining.slice(i + 1);
            search(next, word, count + 1, trie, memo);
            memo.add(next);
        }
    };
    for (let word of words)
        search(word);
    return result;
};
const findAll = (words) => {
    if (!words.length)
        return [];
    const buildTrie = () => {
        const root = {};
        for (let word of words) {
            let node = root;
            for (let char of word) {
                node = (node[char] = node[char] || {});
            }
            node.end = word.length;
        }
        return root;
    };
    const trie = buildTrie();
    const result = [];
    const search = (remaining, word = remaining, count = 0, node = trie, memo = new Set()) => {
        if (memo.has(remaining))
            return;
        if (!remaining.length && count > 1)
            return result.push(word);
        for (let char of remaining) {
            node = node[char];
            if (!node)
                return;
            if (!node.end)
                continue;
            let nextRemaining = remaining.slice(node.end);
            search(nextRemaining, word, count + 1, trie, memo);
            memo.add(nextRemaining);
        }
    };
    for (let word of words) {
        search(word);
    }
    return result;
};
exports.default = () => {
    console.log(findAll(["cat", "cats", "catsdogcats", "dog", "dogcatsdog", "hippopotamuses", "rat", "ratcatdogcat"]));
    console.log(findAll(["cat", "dog", "catdog"]));
    console.log(findAll(['a', 'aa', 'aaa', 'aaaa']));
    console.log(findAll(["rfkqyuqfjkx", "", "vnrtysfrzrmzl", "gfve", "qfpd", "lqdqrrcrwdnxeuo", "q", "klaitgdphcspij", "hbsfyfv", "adzpbfudkklrw", "aozmixr", "ife", "feclhbvfuk", "yeqfqojwtw", "sileeztxwjl", "ngbqqmbxqcqp", "khhqr", "dwfcayssyoqc", "omwufbdfxu", "zhift", "kczvhsybloet", "crfhpxprbsshsjxd", "ilebxwbcto", "yaxzfbjbkrxi", "imqpzwmshlpj", "ta", "hbuxhwadlpto", "eziwkmg", "ovqzgdixrpddzp", "c", "wnqwqecyjyib", "jy", "mjfqwltvzk", "tpvo", "phckcyufdqml", "lim", "lfz"]));
};
