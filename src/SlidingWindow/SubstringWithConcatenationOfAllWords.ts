/**
 * 30. Substring with Concatenation of All Words
 * 
*/

import { PrintArray } from "../utils/Utilities";

const findSubstring = (s:string, words:string[]): number[] => {
  const map: any = {};
  for (let word of words) map[word] = (map[word] || 0) + 1;

  const wordLen = words[0].length;
  const windowLen = wordLen * words.length;
  const result:number[] = []
  
  const tryPosition = (startIndex:number, map:any) => {
    let L = startIndex;
    let R = startIndex;
    // Made mistake: previously set count to length of words
    // which doesn't account for duplicates
    // Solution: set count to length of map. duplicates have 1 entry
    let count = Object.keys(map).length;

    while (R < s.length) {
      let nextSubstr = s.substring(R, R + wordLen);
      R += wordLen;
      if (nextSubstr in map) {
        map[nextSubstr]--;
        if (map[nextSubstr] === 0) count--;
      }
      
      if (count === 0) result.push(L);
      
      if (R - L === windowLen) {
        let prevSubstr = s.substring(L, L + wordLen);
        L += wordLen;
        
        if (prevSubstr in map) {
          map[prevSubstr]++;
          if (map[prevSubstr] === 1) count++;
        }
      }
    }
  }

  // Mistake: only started the window search at index 0 - not others
  // Solution: start the window search at all indexes up to wordLen
  for (let i = 0; i < wordLen; i++) {
    tryPosition(i, {...map});
  }

  return result;
}


export default () => {
  console.log(findSubstring("barfoothefoobarman", ["foo","bar"]));
  console.log(findSubstring("wordgoodgoodgoodbestword", ["word","good","best","word"]));
  console.log(findSubstring("barfoofoobarthefoobarman", ["bar","foo","the"]));
  console.log(findSubstring("wordgoodgoodgoodbestword", ["word","good","best","good"]));
  console.log(findSubstring("lingmindraboofooowingdingbarrwingmonkeypoundcake", ["fooo","barr","wing","ding","wing"]));

};
