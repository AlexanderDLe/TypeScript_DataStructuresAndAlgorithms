import { decode } from 'querystring';

/**
 * 394. Decode String
 */

/*  Decode Analysis

    Time Complexity: O(n) - O(n * # of products/length of substr * recursion tree length)

    Space Complexty: Similar to Time Complexity

    Strategy: When we encounter a digit, we use recursion to call the encoded
    substr within the brackets. We use index pointers to determine the inner substr.
*/

const decodeString = (s: string): string => {
    const getRepeats = (i: number): number => {
        let repeats = '';
        while (s[i].match(/[0-9]/)) {
            repeats += s[i];
            i++;
        }
        return parseInt(repeats);
    }

    const getStart = (i: number): number => {
        while (s[i] != '[') i++;
        return i + 1;
    }

    let stack: string[] = [];
    const getEnd = (i: number): number => {
        stack.push('[');
        while (stack.length) {
            if (s[i] === '[') stack.push('[');
            else if (s[i] === ']') stack.pop();
            i++;
        }
        return i - 1;
    }

    const decode = (repeat: number, start: number, end: number): string => {
        let substr = '';

        for (let i = start; i < end; i++) {
            if (s[i].match(/[a-z]/)) substr += s[i];
            if (s[i].match(/[1-9]/)) {
                let repeats = getRepeats(i);
                let s = getStart(i);
                let e = getEnd(s);
                
                i = e;
                substr += decode(repeats, s, e);
            }
        }
        
        return substr.repeat(repeat);
    }

    return decode(1, 0, s.length);
}

const decodeStringB = (s: string): string => {
    let stack: string[] = [];

    const decode = (repeats: number, encoded: string): string => {
        let substr = '';

        for (let i = 0; i < encoded.length; i++) {
            if (!isNaN(Number(encoded[i]))) {
                // Is a number
                // 1. Get the entire number
                let index = i;
                while (!isNaN(Number(encoded[index]))) index++;
                let num = Number(encoded.slice(i, index));

                // 2. Get inner substring
                let innerSubstr = '';
                stack.push(encoded[index++]);
                while (stack.length) {
                    if (encoded[index] === ']') {
                        stack.pop();
                        if (!stack.length) break;
                    }
                    if (encoded[index] === '[') stack.push('[');
                    innerSubstr += encoded[index++];
                }
                substr += decode(num, innerSubstr);
                i = index;
            } else {
                // Is not a number
                substr += encoded[i];
            }
        }

        return substr.repeat(repeats);
    };

    return decode(1, s);
};

export default () => {
    const s = '2[abc]3[cd]ef';
    console.log(decodeString(s));
};
