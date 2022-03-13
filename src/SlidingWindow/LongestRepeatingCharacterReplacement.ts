/**
 * 424. Longest Repeating Character Replacement
 * 
 * 
 * AABABBA  k = 1
 * 
 * keep track of most-occured char.
 * 
 * 
 * 
 * AABABBA
 *   ^
 * A:2
 * B:1
 * 
 * len = 3
 * longestRepeat = 2
 * k = 1
 * 
 ******************************************************* 
 * 
 * AABABBA
 *     ^
 * A:3
 * B:2
 * 
 * len = 5
 * longestRepeat = 3
 * k = 1
 * 
 * 5 - 3 = 2.
 * 2 > k(1), therefore we are using more replacements than we can afford.
 * Contract window until we meet the condition of using replacements we can afford.
 * 
 * That will mean adjusting the most common char and comparing the length.
*/

const longestRepeat = (s: string, k: number): number => {
  let maxRepeat = 0;
  let mostCommonCharCount = 0;
  let map: any = {};
  
  let L = 0;
  for (let R = 0; R < s.length; R++) {
    let Rchar = s[R];

    map[Rchar] = (map[Rchar] || 0) + 1;
    mostCommonCharCount = Math.max(mostCommonCharCount, map[Rchar]);

    let currlen = R - L + 1;
    let replacementsUsed = currlen - mostCommonCharCount;

    if (replacementsUsed > k) {
      let Lchar = s[L];
      map[Lchar]--;
      L++;
    }
    
    maxRepeat = Math.max(maxRepeat, R - L + 1);
  }

  return maxRepeat;
}

export default () => {
  let s = "ABAB";
  let s2 = "AABABBA";
  let s3 = "EQQEJDOBDPDPFPEIAQLQGDNIRDDGEHJIORMJPKGPLCPDFMIGHJNIIRSDSBRNJNROBALNSHCRFBASTLRMENCCIBJLGAITBFCSMPRO"

  console.log(longestRepeat(s, 1));
  console.log(longestRepeat(s, 2));
  console.log(longestRepeat(s2, 1));
  console.log(longestRepeat(s2, 2));
  console.log(longestRepeat(s3, 2));
};
