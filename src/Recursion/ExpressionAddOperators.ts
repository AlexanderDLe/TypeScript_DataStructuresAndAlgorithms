/**
 * 282. Expression Add Operators
 * 
 * 
 * 1 2 3
 * 
 *               1      
 *         .     .      .
 *     -2       +2       *2
 *  .  .  .   .  .  .   .  . . 
 * -3 +3 *3  -3 +3 *3  -3 +3 *3
 * 
 */
import { PrintMatrix } from '../utils/Utilities';

const addOperators = (num: string, target:number): string[] => {
  const result: string[] = []

  const DFS = (str:string, arr:any[], total:number, prev:number) => {
    if (!str.length && total === target) result.push(arr.join(''));

    let len = str.length;
    if (str[0] === '0') len = 1;

    for (let i = 1; i <= len; i++) {
      const curr = +str.slice(0, i);
      const rest = str.slice(i);

      if (!arr.length) DFS(rest, [curr], curr, curr);
      else {
        DFS(rest, [...arr, '+', curr], total + curr, curr);
        DFS(rest, [...arr, '-', curr], total - curr, 0 - curr);
        const prod = prev * curr;
        DFS(rest, [...arr, '*', curr], total - prev + prod, prod);
      }
    }
  }

  DFS(num, [], 0, 0);
  return result;
}

export default () => {
  console.log(addOperators("123", 6));
  // console.log(addOperators("232", 8));
  // console.log(addOperators("3456237490", 9191));
};
