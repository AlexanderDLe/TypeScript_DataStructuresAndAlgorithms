/**
 * Grokking the Coding Interview
*/

const WordsConcatenation = (str: string, words: string[]): number[] => {
    let result: number[] = [];
    let windowLen = words.length * words[0].length;
    let wordMap: any = {};
    let currMap: any = {};

    for (let word of words) {
        wordMap[word] = (wordMap[word] || 0) + 1;
    }

    let count = Object.keys(wordMap).length;
    let L = 0;

    for (let R = 0; R < str.length; R += 3) {
        let Rword = str.substring(R, R + 3);
        currMap[Rword] = (currMap[Rword] || 0) + 1;

        if (wordMap[Rword] && wordMap[Rword] === currMap[Rword]) {
            count--;
        }

        let currLen = R + 3 - L;
        if (currLen === windowLen) {
            if (count === 0) {
                result.push(L);
            }

            let Lword = str.substring(L, L + 3);
            if (wordMap[Lword] === currMap[Lword]) {
                count++;
            }
            currMap[Lword]--;
            L += 3;
        }
    }

    return result;
}

export default () => {
    let str1 = 'catfoxcat';
    let str2 = 'catcatfoxfox';
    let words = ["cat", "fox"]
    console.log(WordsConcatenation(str1, words));
    console.log(WordsConcatenation(str2, words));
};
