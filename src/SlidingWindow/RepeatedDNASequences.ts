/**
 * 187. Repeated DNA Sequence
 */

import { PrintArray } from "../utils/Utilities";


const findRepeated = (s:string): string[] => {
  const result: string[] = [];
  const map: any = {};

  let L = 0;
  let R = 10;
  while (R < s.length) {
    let substr = s.substring(L, R);
    map[substr] = (map[substr] || 0) + 1;
    if (map[substr] === 2) result.push(substr);
    R++, L++;
  }

  return result;
}

export default () => {
  console.log(findRepeated("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"));
  console.log(findRepeated("AAAAAAAAAAAAA"));
};
