/**
 * 20. Valid Parentheses
 */
import { PrintArray } from '../utils/Utilities';


const isValid = (s: string): boolean => {
  const map: any = { ')': '(', ']': '[', '}': '{' }
  const stack: string[] = [];

  for (let char of s) {
    if (!map[char]) stack.push(char);
    else if (stack.pop() !== map[char]) return false;
  }
  
  return stack.length === 0;
}

export default () => {
  console.log(isValid('()('));
  console.log(isValid('[()[]{}]'));
};
