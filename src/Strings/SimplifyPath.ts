/**
 *  71. Simplify Path
 * 
 * https://leetcode.com/problems/simplify-path/discuss/1847526/Best-Explanation-Ever-Possible-oror-Not-a-ClickBait
 * 
 * 
 */

const simplifyPath = (path: string): string => {
  path = path.replace(/\/+/g, '/');
  let arr = path.split('/');
  const stack:string[] = [];
  
  for (let s of arr) {
    if (s === '' || s === '.') continue;
    if (s === '..') {
      if (stack.length) stack.pop();
      continue;
    } 
    stack.push(s);
  }

  let result = '/';
  for (let i = 0; i < stack.length; i++) {
    result += stack[i];
    if (i < stack.length - 1) result += '/';
  }

  return result;
};

export default () => {
  console.log(simplifyPath("/home/"));
  console.log(simplifyPath("/../"));
  console.log(simplifyPath("/./"));
  console.log(simplifyPath("/home//foo/"));
  console.log(simplifyPath("/a/./b/../../c/d/../"));
};
