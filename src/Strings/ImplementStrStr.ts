/**
 *  28. Implement strStr()
 */

const strStr = (haystack: string, needle: string): number => {
    if (!needle.length) return 0;
    if (needle.length > haystack.length) return -1;

    const tryMatch = (num: number): boolean => {
        for (let h = num, n = 0; n < needle.length; h++, n++) {
            if (haystack[h] !== needle[n]) return false;
        }
        return true;
    }

    for (let i = 0; i < haystack.length - needle.length + 1; i++) {
        if (tryMatch(i)) return i;
    }

    return -1;
};

export default () => {
    const haystack = 'hello'
    const needle = 'o';
    console.log(strStr(haystack, needle));
};
