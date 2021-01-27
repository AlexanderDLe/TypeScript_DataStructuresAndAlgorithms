/**
 *  14. Longest Commong Prefix
 */

const longestCommonPrefix = (strs: string[]): string => {
    if (!strs.length) return '';

    let res = '';
    let i = 0;

    while (i < strs[0].length) {
        let valid = true;
        let char = strs[0][i];

        for (let j = 1; j < strs.length; j++) {
            if (char != strs[j][i]) {
                valid = false;
                break;
            }
        }

        if (valid) res += char;
        else break;
        i++;
    }
    return res;
};

export default () => {
    const strs = ["flower","flow","flight"];
    console.log(longestCommonPrefix(strs));
};
