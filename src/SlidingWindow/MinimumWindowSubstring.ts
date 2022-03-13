/**
 * 239. Sliding Window Maximum
 * 
 *                    L     R
 *  A D O B E C O D E B A N C
 * 
 * count = 0
 * {
 *   A: 0
 *   B: 0
 *   C: 0
 * }
*/

import { PrintArray } from "../utils/Utilities";

const minWindow = (s:string, t:string): string => {
  const map: any = {};
  for (let char of t) map[char] = (map[char] || 0) + 1;
  let count = Object.keys(map).length;
  let result = '';
  let minLen = Infinity;
  
  let L = 0;
  let R = 0;
  while (R < s.length) {
    let Rval = s[R++];
    if (Rval in map) {
      map[Rval]--;
      if (map[Rval] === 0) count--;
    }

    while (!count && L < R) {
      let len = R - L + 1;
      if (len < minLen) {
        result = s.substring(L, R);
        minLen = len;
      }
      let Lval = s[L++];
      if (Lval in map) {
        map[Lval]++;
        if (map[Lval] === 1) count++;
      }
    }
  }

  return result;
}


export default () => {
  console.log(minWindow("ADOBECODEBANC", 'ABC'));
  console.log(minWindow("ab", 'a'));
  console.log(minWindow("a", 'aa'));
};
