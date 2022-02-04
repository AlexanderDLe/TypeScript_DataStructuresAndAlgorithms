/**
 */

const reverseWordsInStringA = (string: string): string => {
    let result: string[] = [];
    let word: string[] = [];

    for (let i = string.length - 1; i >= 0; i--) {
        let char = string[i];

        if (!word.length) {
            word.unshift(char);
            continue;
        }

        let transitioning = (char !== ' ' && word[0] === ' ') 
                         || (char === ' ' && word[0] !== ' ');

        if (transitioning) {
            result.push(word.join(''));
            word = [];
        }

        word.unshift(char);
    }

    result.push(word.join(''));
    return result.join('');
};

const reverseWordsInString = (string: string): string => {
    let result: string[] = [];
    let i = string.length - 1;

    while (i >= 0) {
        let char = string[i];
        let end = i;

        if (char !== ' ') {
            while (i > 0 && string[i - 1] !== ' ') i--;
            result.push(string.substring(i, end + 1));
        }
        if (char === ' ') {
            while (i > 0 && string[i - 1] === ' ') i--;
            result.push(string.substring(i, end + 1));
        }

        i--;
    }

    return result.join('');
}

export default () => {
    const s = "AlgoExpert is the  best!";
    console.log(reverseWordsInString(s));
};
