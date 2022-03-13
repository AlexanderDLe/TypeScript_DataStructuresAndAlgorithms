/**
 * 22. Generate Parentheses
 */
import { PrintArray } from '../utils/Utilities';

const generateParenthesesOld = (n: number): string[] => {
    let result: string[] = [];

    const recurse = (opens: number, closes: number, str: string): void => {
        if (str.length === n * 2) result.push(str);
        else {
            if (opens > 0) recurse(opens - 1, closes, str + '(');
            if (closes > opens) recurse(opens, closes - 1, str + ')');
        }
    }
    recurse(n, n, '');
    return result;
}

const generateParenthesesA = (n: number): string[] => {
    let result: string[] = [];

    const recurse = (opens:number, closes:number, str:string) => {
        if (str.length === n * 2) {
            result.push(str);
            return;
        }

        if (opens > 0) recurse(opens - 1, closes, str + '(');
        if (closes > 0 && closes > opens) recurse(opens, closes - 1, str + ')');
    }

    recurse(n, n, '');

    return result;
}

const generateParentheses = (n: number): string[] => {
  let result: string[] = [];

  const recurse = (opens:number, closes:number, substr:string) => {
    if (!opens && !closes) {
      result.push(substr);
      return;
    }

    if (opens) recurse(opens - 1, closes, substr + '(');
    if (closes > opens) recurse(opens, closes - 1, substr + ')');
  }

  recurse(n, n, '');
  return result;
}

export default () => {
    PrintArray(generateParentheses(3));
};
