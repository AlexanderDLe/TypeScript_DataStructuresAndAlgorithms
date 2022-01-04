/**
 * Grokking the Coding Interview
 * 
*/

const LongestSubstringWithDistinctChars = (str: string): number => {
    let longestSubstr = 0;
    let set = new Set();
    let L = 0;

    for (let R = 0; R < str.length; R++) {
        let Rchar = str[R];
        console.log(set.has(Rchar));
        if (!set.has(Rchar)) set.add(Rchar);
        else {
            while (L < R) {
                let Lchar = str[L];
                set.delete(Lchar);
                L++;

                if (Lchar === Rchar) break;
            }
        }

        longestSubstr = Math.max(longestSubstr, R - L + 1);
    }

    return longestSubstr;
}

export default () => {
    let str1 = 'aabccbb';
    let str2 = 'abbbb';
    console.log(LongestSubstringWithDistinctChars(str1));
    console.log(LongestSubstringWithDistinctChars(str2));
};
