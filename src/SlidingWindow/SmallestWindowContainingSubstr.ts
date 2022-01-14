/**
 * Grokking the Coding Interview
*/

const SmallestWindowContainingSubstr = (str: string, pattern: string): string => {
    let result = '';
    let resultMax = Infinity;
    let currMap: any = {};
    let pattMap: any = {};
    
    for (let char of pattern) {
        pattMap[char] = (pattMap[char] || 0) + 1;
    }
    let count = Object.keys(pattMap).length;
    let L = 0;

    for (let R = 0; R < str.length; R++) {
        let Rchar = str[R];

        currMap[Rchar] = (currMap[Rchar] || 0) + 1;
        if (currMap[Rchar] === pattMap[Rchar]) {
            count--;
        }

        while (L < R && count === 0) {
            let currLen = R - L + 1;
            
            if (currLen < resultMax) {
                resultMax = currLen;
                result = str.substring(L, L + currLen);
            }
            
            let Lchar = str[L];
            if (currMap[Lchar] === pattMap[Lchar]) {
                count++;
            }
            currMap[Lchar]--;
            L++;
        }
    }

    return result;
}

export default () => {
    let str1 = 'aabdec', pattern1 = 'abc';
    let str2 = 'abdbca', pattern2 = 'abc';
    let str3 = 'adcad', pattern3 = 'abc';
    console.log(SmallestWindowContainingSubstr(str1, pattern1));
    console.log(SmallestWindowContainingSubstr(str2, pattern2));
    console.log(SmallestWindowContainingSubstr(str3, pattern3));
};

// currMap: {a: 1, b: 2}
// pattMap: {a: 1, b: 1, c: 1}
// count = 2