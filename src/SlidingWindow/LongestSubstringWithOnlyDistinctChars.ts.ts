/**
 * Grokking the Coding Interview
 * Given a string with lowercase letters only, if you are allowed to 
 * replace no more than k letters with any letter, find the length of
 * the longest substring having the same letters after replacement.
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
