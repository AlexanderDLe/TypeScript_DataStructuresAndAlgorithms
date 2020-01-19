/**
 * 394. Decode String
 */

const decodeString = (s: string): string => {
    const decode = (num: number, encoded: string): string => {
        let str = '';
        for (let i = 0; i < encoded.length; i++) {
            if (!isNaN(Number(encoded[i]))) {
                // Is a number
                let index = i;
                let innerSubstr = '';
                let stack: string[] = [];

                // Get entire number
                while (!isNaN(Number(encoded[index]))) index++;
                let repeats = Number(encoded.slice(i, index));

                // Get encoded substring
                stack.push(encoded[index++]);

                while (stack.length) {
                    if (encoded[index] === ']') {
                        stack.pop();
                        if (!stack.length) break;
                    }
                    if (encoded[index] === '[') stack.push('[');
                    innerSubstr += encoded[index];
                    index++;
                }
                str += decode(repeats, innerSubstr);
                i = index;
            } else str += encoded[i];
        }
        return str.repeat(num);
    };
    return decode(1, s);
};

export default () => {
    const s = '2[abc]3[cd]ef';
    console.log(decodeString(s));
};
