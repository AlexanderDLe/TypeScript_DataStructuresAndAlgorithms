/**
 */

import { PrintArray } from "../utils/Utilities";

const underscorifySubstringDOESNTWORK = (string: string, substring: string): string => {
    let result: string = ''
    let i = 0;
    let canBlend = substring.length > 1 
                && substring[0] === substring[substring.length - 1];


    const getCandidate = (index: number): string => {
        return string.substring(index, index + substring.length);
    }

    const resultEndsWithUnderscore = (): boolean => {
        if (!result.length) return false;
        return result[result.length - 1] === '_';
    }

    while (i < string.length) {
        if (getCandidate(i) === substring) {
            result += '_';
            
            if (!canBlend) {
                result += substring;
                i += substring.length - 1;
            } else {
                result += substring[0];
                while (getCandidate(i) === substring) {
                    result += (substring.substring(1, substring.length))
                    i += substring.length - 1;
                }
            }

            result += '_';
        } else {
            result += string[i];
        }
        i++;
    }

    // result = result.replace(/__/g, '');
    return result;
}

const underscorifySubstringDOESNTWORK2 = (string: string, substring: string): string => {
    const matchArr = new Array(string.length).fill(0);

    const validSubstring = (index: number): boolean => {
        return substring === string.substring(index, index + substring.length);
    }
    const foundSubstringBehind = (index: number): boolean => {
        if (index === 0) return false;
        
        for (let i = index - 1; i >= index - substring.length - 1; i--) {
            if (matchArr[i] > 0) return true;
            if (i === 0) return false;
        }
        return false;
    }

    for (let i = 0; i < string.length - substring.length; i++) {
        if (!validSubstring(i)) continue;
        matchArr[i] = 1;
        matchArr[i + substring.length - 1] = 2;
    }
    PrintArray(matchArr)
    let result = '';
    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        let match = matchArr[i];

        if (match === 1) {
            if (!foundSubstringBehind(i)) result += '_';
        }
        if (match === 2 && i === 0) result += '_';
        
        result += char;

        if (match === 2) {
            if (matchArr[i + 1]  === 0 || i === string.length - 1) result += '_';
        }
    }
    
    return result;
}

const underscorifySubstring = (string: string, substring: string): string => {
    const intervals: number[][] = [];

    const buildIntervals = () => {
        const validSubstr = (index: number): boolean => {
            return substring === string.substring(index, index + substring.length);
        }
        for (let i = 0; i < string.length; i++) {
            if (validSubstr(i)) intervals.push([i, i + substring.length])
        }
    }

    const mergedIntSet = new Set();
    const mergeIntervals = () => {
        let prev = intervals.length ? intervals[0] : [];

        for (let i = 1; i < intervals.length; i++) {
            let curr = intervals[i];

            if (curr[0] <= prev[1]) {
                prev[1] = curr[1];
            } else {
                mergedIntSet.add(prev[0]);
                mergedIntSet.add(prev[1]);
                prev = curr;
            }
        }
        mergedIntSet.add(prev[0]);
        mergedIntSet.add(prev[1]);
    }

    const buildString = (): string => {
        let result = '';

        for (let i = 0; i < string.length; i++) {
            if (mergedIntSet.has(i)) result += '_';
            result += string[i];
        }

        // Don't forget the last underscore!
        if (substring === string.substring(string.length - substring.length, string.length)) {
            result += '_';
        }

        return result;
    }

    buildIntervals();
    mergeIntervals();
    return buildString();
}

export default () => {
    const string = "testthis is a testtest to see if testestest it works";
                   [1002000000000010021002000000000001001001002000000000]
    const substring = 'test'

    const string2 = "aa aaaa a a";
    const substring2 = 'a'

    const string3 = "ttttb";
    const substring3 = 'ttt'
    
    console.log(underscorifySubstring(string, substring));
    console.log(underscorifySubstring(string2, substring2));
    console.log(underscorifySubstring(string3, substring3));
};
