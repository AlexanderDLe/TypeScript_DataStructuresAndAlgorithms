/**
 * 20. Valid Parentheses
 */
type Parens = {
    [key: string]: string;
};
const isValid = (s: string): boolean => {
    const stack: string[] = [];
    const map: Parens = { '(': ')', '{': '}', '[': ']' };

    for (let c of s) {
        if (map[c]) stack.push(c);
        else if (map[stack.pop()] !== c) return false;
    }

    return stack.length ? false : true;
};

export default () => {
    const s1 = '([)]';
    const s2 = '{[]}';
    const s3 = '()[]{}';
    if (isValid(s3)) console.log('True');
    else console.log('False');
};
