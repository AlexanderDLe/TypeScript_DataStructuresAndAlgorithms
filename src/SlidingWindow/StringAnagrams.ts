/**
 * Grokking the Coding Interview
*/

const FindStringAnagrams = (str: string, pattern: string): number[] => {
    let result: number[] = [];
    let patternMap: any = {};
    let currentMap: any = {};
    let count = pattern.length;

    for (let char of pattern) {
        patternMap[char] = (patternMap[char] || 0) + 1;
    }

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
    let str2 = 'abbcabc', pattern2 = 'abc';
    console.log(FindStringAnagrams(str1, pattern1));
    console.log(FindStringAnagrams(str2, pattern2));
};

// currMap: {a: 1, b: 2}
// pattMap: {a: 1, b: 1, c: 1}
// count = 2