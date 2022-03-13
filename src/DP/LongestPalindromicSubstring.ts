/**
 * 5. Longest Palindromic Substring
 * 
 */

import { PrintMatrix } from "../utils/Utilities";

const longestPalindromicSubstringMatrix = (s: string): string => {
  let DP: number[][] = []
  
  for (let i = 0; i < s.length; i++) {
    DP.push(new Array(s.length).fill(0));
    DP[i][i] = 1;
  }
  
  let result = s[0];
  
  for (let col = 1; col < DP.length; col++) {
    for (let row = 0; row < col; row++) {
      // If cell is right above col OR bot-left cell is 1, then checkPalindrome
      if (col - row === 1 || DP[row + 1][col - 1]) {
        if (s[row] === s[col]) {
          DP[row][col] = 1;
          if (Math.abs(row - col) + 1 > result.length) result = s.substring(row, col + 1);
        }
      }
    }
  } 
  return result;
}

const longestPalindromicSubstring = (s: string): string => {
  let result = '';

  const checkPalindrome = (L:number, R:number) => {
    while (L >= 0 && R < s.length) {
      if (s[L] !== s[R]) break;
      L--, R++;
    }
    L++, R--;
    if (R - L + 1 > result.length) {
      result = s.substring(L, R + 1);
    }
  }

  for (let i = 0; i < s.length; i++) {
    checkPalindrome(i, i);
    if (i < s.length - 1) checkPalindrome(i, i + 1);
  }

  return result;
}

export default () => {
    const s = "babad";
    console.log(longestPalindromicSubstring(s));
};
