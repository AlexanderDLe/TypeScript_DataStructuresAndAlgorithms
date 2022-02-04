/**
 * Grokking the Coding Interview
 * 
 * Given a string, find the length of the longest substring 
 * in it with no more than K distinct characters.
 * 
Time Complexity#
The above algorithm’s time complexity will be O(N), 
where NN is the number of characters in the input string. 
The outer for loop runs for all characters, and the inner 
while loop processes each character only once; therefore, 
the time complexity of the algorithm will be O(N+N), 
which is asymptotically equivalent to O(N).

Space Complexity#
The algorithm’s space complexity is O(K), as we will 
be storing a maximum of K+1 characters in the HashMap.
*/

const LongestSubstringWithMaxKDistinctChars = (str: string, k: number): number => {
    let longestSubstr = 0;
    let uniqueChars = 0;
    let map: any = {};
    let L = 0;

    for (let R = 0; R < str.length; R++) {
        let Rchar = str[R];
        
        if (!map[Rchar]) {
            uniqueChars++;
            map[Rchar] = 1;
        } else {
            map[Rchar]++;
        }
        
        while (L < R && uniqueChars > k) {
            let Lchar = str[L];
            map[Lchar]--;
            if (!map[Lchar]) uniqueChars--;
            L++;
        }
        longestSubstr = Math.max(longestSubstr, R - L + 1);
    }

    return longestSubstr;
}

export default () => {
    let str1 = 'araaci';
    let str2 = 'cbbebi';
    console.log(LongestSubstringWithMaxKDistinctChars(str1, 2));
    console.log(LongestSubstringWithMaxKDistinctChars(str1, 1));
    console.log(LongestSubstringWithMaxKDistinctChars(str2, 3));
    console.log(LongestSubstringWithMaxKDistinctChars(str2, 10));
};
