/**
 * Grokking the Coding Interview
*/

const PermutationInAString = (str: string, pattern: string): boolean => {
    let L = 0;
    let patternMap: any = {};
    let count = pattern.length;

    for (let i = 0; i < pattern.length; i++) {
        let char = pattern[i];
        patternMap[char] = (patternMap[char] || 0) + 1;
    }

    for (let R = 0; R < str.length; R++) {
        let Rchar = str[R];
        if (Rchar in patternMap) {
            patternMap[Rchar]--;
            count--;
        }

        if (R + 1 >= pattern.length) {
            if (count === 0) return true;
            
            let Lchar = str[L];
            if (Lchar in patternMap) {
                patternMap[Lchar]++;
                count++
            }
            L++;
        }
        console.log(patternMap);
    }

    return false;
}

export default () => {
    let str1 = 'oidbcaf';
    let pattern1 = 'abc';

    let str2 = 'odicf';
    let pattern2 = 'dc';
    
    let str3 = 'bcdxabcdy';
    let pattern3 = 'bcdyabcdx';
    
    let str4 = 'aaacb';
    let pattern4 = 'abc';

    console.log(PermutationInAString(str1, pattern1));
    console.log(PermutationInAString(str2, pattern2));
    console.log(PermutationInAString(str3, pattern3));
    console.log(PermutationInAString(str4, pattern4));
};
