/**
 *  3. Longest Substring Without Repeating Characters
 */

const lengthOfLongestSubstring = (s: string): number => {
    let mySet = new Set();
    let L = 0;
    let R = 0;
    let max = 0;

    while (R < s.length) {
        if (!mySet.has(s[R])) {
            mySet.add(s[R]);
            R++;
        } else {
            while (s[L] !== s[R]) {
                mySet.delete(s[L]);
                L++;
            }
            mySet.delete(s[L]);
            L++;
        }
        max = Math.max(max, mySet.size);
    }

    return max;
};

export default () => {
    const s = 'pwwkew';
    console.log(lengthOfLongestSubstring(s));
};
