"use strict";
/**
 * 131. Palindrome Partitioning
 *
 *                              'aab'
 *                      [a]ab   [aa]b   [aab]
 *                  [a,a]b                      X
 */
Object.defineProperty(exports, "__esModule", { value: true });
const partitionRef = (s) => {
    const result = [];
    const partition = [];
    const isPalindrome = (str) => (str === str.split('').reverse().join(''));
    const DFS = (str) => {
        console.log(`Incoming String: ${str}`);
        // Base Case: Empty string must be palindrome
        if (str.length === 0) {
            result.push([...partition]);
            return;
        }
        // General case
        for (let i = 1; i <= str.length; i++) {
            let prefix = str.substring(0, i);
            let postfix = str.substring(i);
            console.log(`prefix: ${prefix} | postfix: ${postfix}`);
            console.log('-----');
            // Current prefix is a palindrome, keep trying to make more partition in postfix by DFS
            if (isPalindrome(prefix)) {
                partition.push(prefix);
                DFS(postfix);
                partition.pop();
            }
        }
    };
    DFS(s);
    return result;
};
const partition = (s) => {
    const isPalindrome = (str) => {
        return str === (str.split('').reverse().join(''));
    };
    let result = [];
    let parts = [];
    const backtrack = (str) => {
        if (str.length === 0) {
            result.push([...parts]);
            return;
        }
        for (let i = 1; i <= str.length; i++) {
            let prefix = str.substring(0, i);
            let postfix = str.substring(i);
            if (isPalindrome(prefix)) {
                parts.push(prefix);
                backtrack(postfix);
                parts.pop();
            }
        }
    };
    backtrack(s);
    return result;
};
exports.default = () => {
    let str = 'aab';
    console.log(partition(str));
};
