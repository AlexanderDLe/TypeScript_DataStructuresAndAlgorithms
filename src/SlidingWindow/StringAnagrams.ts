/**
 * Grokking the Coding Interview
 * 
 * Given a string and a pattern, find all anagrams of the pattern in the given 
 * string.

Every anagram is a permutation of a string. As we know, when we are not allowed 
to repeat characters while finding permutations of a string, we get N!N!
 permutations (or anagrams) of a string having NN characters. For example,
  here are the six anagrams of the string “abc”:
*/

const FindStringAnagrams = (str: string, pattern: string): number[] => {
    let result: number[] = [];
    let patternMap: any = {};
    let currentMap: any = {};
    
    for (let char of pattern) {
        patternMap[char] = (patternMap[char] || 0) + 1;
    }
    
    let count = Object.keys(patternMap).length;
    let L = 0;

    for (let R = 0; R < str.length; R++) {
        let Rchar = str[R];
        currentMap[Rchar] = (currentMap[Rchar] || 0) + 1;

        if (patternMap[Rchar] && patternMap[Rchar] === currentMap[Rchar]) {
            count--;
        }

        let currLen = R - L + 1;
        if (currLen === pattern.length) {
            if (count === 0) result.push(L);

            let Lchar = str[L];
            if (patternMap[Lchar] === currentMap[Lchar]) {
                count++;
            }
            currentMap[Lchar]--;
            L++;
        }
    }

    return result;
}

export default () => {
    let str1 = 'ppqp', pattern1 = 'pq';
    let str2 = 'abbcabc', pattern2 = 'abbc';
    console.log(FindStringAnagrams(str1, pattern1));
    console.log(FindStringAnagrams(str2, pattern2));
};

// currMap: {a: 1, b: 2}
// pattMap: {a: 1, b: 1, c: 1}
// count = 2