/**
 * 22. Generate Parentheses
 */
import { PrintArray } from '../utils/Utilities';

const generateParentheses = (n: number): string[] => {
    let result: string[] = [];

    const recurse = (str: string, opens: number, closes: number) => {
        if (str.length === n * 2) {
            result.push(str);
            return;
        }
        if (opens > 0) recurse(str + '(', opens - 1, closes);
        if (closes > opens) recurse(str + ')', opens, closes - 1);
    };
    recurse('', n, n);
    return result;
};

export default () => {
    PrintArray(generateParentheses(3));
};
