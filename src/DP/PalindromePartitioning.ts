/**
 * 131. Palindrome Partitioning
 *      
 *                  aab
 *              
 */

import DepthFirstSearch from "../Graphs/DepthFirstSearch";

const partitionRef = (s: string): string[][] => {
  const result: string[][] = [];
  const partition:any = [];

  const isPalindrome = (str:string) => ( str === str.split('').reverse().join('') );

  const DFS = (str: string) => {
    console.log(`Incoming String: ${str}`)
    // Base Case: Empty string must be palindrome
    if (str.length === 0) {
      result.push([...partition]);
      return;
    }

    // General case
    for (let i = 1; i <= str.length; i++) {
      let prefix = str.substring(0, i);
      let postfix = str.substring(i);
      console.log(`prefix: ${prefix} | postfix: ${postfix}`)
      console.log('-----')
      // Current prefix is a palindrome, keep trying to make more partition in postfix by DFS
      if (isPalindrome(prefix)) {
        partition.push(prefix);
        DFS(postfix)
        partition.pop();
      }
    }
  }

  DFS(s);
  return result;
}

const partition = (s: string): string[][] => {
  const isPalindrome = (str:string):boolean => {
    return str === (str.split('').reverse().join(''));
  }

  let result: string[][] = [];
  let parts: string[] = [];

  const backtrack = (str:string) => {
    if (str.length === 0) {
      console.log('success: ', [...parts])
      result.push([...parts]);
      return;
    }
    console.log('str: ', str)
    for (let i = 1; i <= str.length; i++) {
      let prefix = str.substring(0, i);
      let postfix = str.substring(i);
      console.log(`prefix: ${prefix} | postfix: ${postfix}`)


      if (isPalindrome(prefix)) {
        console.log('prefix is palindrome:', prefix)
        parts.push(prefix);
        backtrack(postfix);
        parts.pop();
      }
    }
  }
  backtrack(s);
  return result;
}

export default (): void => {
  let str = 'aab';
  console.log(partition(str));
};
