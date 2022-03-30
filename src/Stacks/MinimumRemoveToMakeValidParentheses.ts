/**
 * 1249. Minimum Remvoe to Make Valid Parentheses
 * 
 * "l)ee(t(c)o)de)"
 * 
 * 1. Split into array
 * 
 * l ) e e ( t ( c ) o ) d e )
 * 
 * 2. Use stack to keep track of valid parentheses.
 * 
 * Stack = [];
 * 
 * 3. Begin operation from left to right.
 * 
 ******************************************************* 
 * 
 * l ) e e ( t ( c ) o ) d e )
 * ^
 * i
 * 
 * > pointer is char, we can ignore.
 * 
 ******************************************************* 
 * 
 * l ) e e ( t ( c ) o ) d e )
 *   ^
 *   i
 * 
 * > pointer is ) but stack is empty.
 * > Therefore this is invalid. We can set to empty string.
 * 
 * l   e e ( t ( c ) o ) d e )
 *   ^
 *   i
 * 
 * > pointer is ) but stack is empty.
 * > Therefore this is invalid. We can set to empty string.
 * 
 */
import { PrintArray } from '../utils/Utilities';


const minRemoveVerySlow = (s: string): string => {
  let stack: string[] = [];
  let arr = s.split('');
  let pre = [];

  for (let char of arr) {
    if (char === '(') {
      stack.push(char);
      pre.push(char);
      continue;
    }
    if (char === ')') {
      if (stack.length && stack[stack.length - 1] === '(') {
        stack.pop();
        pre.push(char);
      }
      continue;
    }
    pre.push(char);
  }

  let result:string[] = [];
  for (let i = pre.length - 1; i >= 0; i--) {
    let char = pre[i];

    if (char === ')') {
      stack.push(char);
      result.unshift(char);
      continue;
    }
    if (char === '(') {
      if (stack.length && stack[stack.length - 1] === ')') {
        stack.pop();
        result.unshift(char);
      }
      continue;
    }
    result.unshift(char);
  }

  return result.join('');
}

const minRemove= (s: string): string => {
  const stack:number[] = []
  const arr = s.split('');

  for (let i = 0; i < arr.length; i++) {
    let char = arr[i];

    if (char === '(') {
      stack.push(i);
    }
    if (char === ')') {
      if (stack.length && arr[stack[stack.length - 1]] === '(') {
        stack.pop();
        // Mistake: Forgot to contine - which always caused empty string assignment
        continue;
      }
      // Mistake: Accidentally used === instead of =
      arr[i] = '';
    }
  }

  while (stack.length) {
    arr[stack.pop()] = '';
  }

  return arr.join('');
}

export default () => {
  console.log(minRemove("lee(t(c)o)de)"));
  console.log(minRemove("a)b(c)d"));
  console.log(minRemove("))(("));
  console.log(minRemove("())()((("));
};
