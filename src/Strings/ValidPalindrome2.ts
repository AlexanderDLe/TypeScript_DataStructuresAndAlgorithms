/**
 * 680. Valid Palindrome 2
 * 
 * abbca
 * L   R
 * 
 * adbca
 *  LNR
 *  
 ***************
 *
 * abbbca
 *  LNNR
 */

const isPalindrome2 = (s: string): boolean => {
  const checkPalidnrome = (L:number, R:number): boolean => {
    while (L < R) {
      if (s[L] !== s[R]) return false;
      L++, R--;
    }
    return true;
  }

  let L = 0;
  let R = s.length - 1;

  while (L < R) {
    if (s[L] !== s[R]) {
      return checkPalidnrome(L + 1, R) || checkPalidnrome(L, R - 1);
    }
    L++, R--;
  }

  return true;
}

export default () => {
  console.log(isPalindrome2('aba'));
  console.log(isPalindrome2('abca'));
  console.log(isPalindrome2('abc'));
};
