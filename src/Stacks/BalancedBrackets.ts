/**
 */
import { PrintArray } from '../utils/Utilities';

const balancedBrackets = (string: string): boolean => {
    const opens = new Set(['(', '[', '{'])
    const map: any = {
        ')': '(',
        ']': '[',
        '}': '{'
    }

    const stack: string[] = [];

    for (let char of string) {
        if (!opens.has(char) && !(char in map)) continue;
        if (opens.has(char)) {
            stack.push(char);
            continue;
        }
        if (!stack.length) return false;
        let top = stack[stack.length - 1];
        if (top !== map[char]) return false;
        else stack.pop();
        
    }
    
    return stack.length === 0;
}

export default () => {
    let string = "([])(){}(())()()";
    console.log(balancedBrackets(string));
};
