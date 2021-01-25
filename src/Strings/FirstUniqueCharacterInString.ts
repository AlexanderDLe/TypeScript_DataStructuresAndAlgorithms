/**
 *  387. First Unique Character In A String
 */

type charMap = {
    [key: string]: number,
}

const firstUniqueChar = (s: string): number => {
    let result = -1;
    let map: charMap = {};

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        map[char] = (map[char] || 0) + 1;
    }


    for (let char in map) {
        if (map[char] == 1) {
            return s.indexOf(char);
        }
    }

    return result;
}

const firstUniqChar = (s: string): number => {
    let arr = new Array(26).fill(0);
    let test = 'a';

    for (let i = 0; i < s.length; i++) {
        arr[s.charCodeAt(i) - 97]++;
    }

    for (let i = 0; i < s.length; i++) {
        if (arr[s.charCodeAt(i) - 97] === 1) return i;
    }

    return -1;
};

export default () => {
    const str = 'leetcode';
    console.log(firstUniqueChar(str));
};
