/**
 * 921. Minimum Add to Make Parentheses Valid
 * 
 * ())
 */
import { PrintArray } from '../utils/Utilities';


const minAdd = (s: string): number => {
  const stack: string[] = []
  let count = 0;

  for (let char of s) {
    if (char === '(') stack.push(char);
    else {
      let top = stack[stack.length - 1] || null;
      if (top && top === '(') stack.pop();
      else count++;
    }
  }

  return stack.length + count;
}

export default () => {
  console.log(minAdd('()('));
  console.log(minAdd('())'));
  console.log(minAdd('((('));
};
