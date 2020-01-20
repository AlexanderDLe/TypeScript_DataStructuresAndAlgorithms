"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 394. Decode String
 */
const decodeString = (s) => {
    let stack = [];
    const decode = (repeats, encoded) => {
        let substr = '';
        for (let i = 0; i < encoded.length; i++) {
            if (!isNaN(Number(encoded[i]))) {
                // Is a number
                // 1. Get the entire number
                let index = i;
                while (!isNaN(Number(encoded[index])))
                    index++;
                let num = Number(encoded.slice(i, index));
                // 2. Get inner substring
                let innerSubstr = '';
                stack.push(encoded[index++]);
                while (stack.length) {
                    if (encoded[index] === ']') {
                        stack.pop();
                        if (!stack.length)
                            break;
                    }
                    if (encoded[index] === '[')
                        stack.push('[');
                    innerSubstr += encoded[index++];
                }
                substr += decode(num, innerSubstr);
                i = index;
            }
            else {
                // Is not a number
                substr += encoded[i];
            }
        }
        return substr.repeat(repeats);
    };
    return decode(1, s);
};
exports.default = () => {
    const s = '2[abc]3[cd]ef';
    console.log(decodeString(s));
};
