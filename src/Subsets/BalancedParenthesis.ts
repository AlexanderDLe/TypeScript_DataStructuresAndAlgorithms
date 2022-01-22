/**
 * Grokking the Coding Interview
 * 
 * 
 * Each parenthesis has an open and a close: ( and )
 * If we have 3 parenthesis, we have 3 opens and 3 closes.
 * 
 * N = 3 ( ( ( ) ) )
 * 
 * You can only close a parenthesis when you have at least one more open.
 * You can only open when opens > 0.
 * 
 * (    <-- You can close
 * ((   <-- You can close.
 * ()   <-- You cannot close
 * ()() <-- You cannot close
 * 
 * You have to find every variation in which you can close legally.
 * 
 ****************************************************************** 
 * 
 * Take N = 3
 * 
 * Opens: 3 | Closes: 3
 * 
 * Since closes === open, you cannot close.
 * Since open > 0, you can open.
 * 
 * [
 *  '('     <-- 2 opens and 3 closes left
 * ]
 * 
 ****************************************************************** 
 *
 * Every previous substr has to make a decsion based on its opens and closes. 
 * The previous substring has two outcomes:
 * 
 * [
 *  '(('    <-- 1 opens and 3 closes left
 *  '()'    <-- 1 opens and 3 closes left
 * ]
 * 
 ****************************************************************** 
 *
 *  Every previous substr has to make a decsion based on its opens and closes. 
 *  The previous substring has two outcomes:
 * 
 *  '(('     <-- Can open AND close.
 *  '()'     <-- Can open but NOT close.
 * 
 * [
 *  '((('    <-- 0 opens and 3 closes left
 *  '(()'    <-- 1 opens and 2 closes left
 *  '()('    <-- 1 opens and 2 closes left
 * ]
 * 
*/

import { PrintArray } from "../utils/Utilities";


    
class ParenString {
    substr: string;
    opens: number;
    closes: number;

    constructor(str:string, opens:number, closes:number) {
        this.substr = str;
        this.opens = opens;
        this.closes = closes;
    }
}
const balancedParenthesis = (num: number): string[] => {
    let result: string[] = [];
    let queue: ParenString[] = [];

    queue.push(new ParenString('(', num - 1, num));

    while (queue.length) {
        let ps = queue.shift();
        if (!ps.opens && !ps.closes) {
            result.push(ps.substr);
            continue;
        }
        if (ps.opens > 0) {
            queue.push(new ParenString(ps.substr + '(', ps.opens - 1, ps.closes));
        }
        if (ps.closes > ps.opens) {
            queue.push(new ParenString(ps.substr + ')', ps.opens, ps.closes - 1));
        }
    }

    return result;
}

const balancedParenthesisRecursion = (num: number): string[] => {
    let result: string[] = [];

    const recurse = (substr:string, opens:number, closes:number):void => {
        if (!opens && !closes) {
            result.push(substr);
            return;
        }
        if (opens > 0) recurse(substr + '(', opens - 1, closes);
        if (closes > opens) recurse(substr + ')', opens, closes - 1);
    }

    recurse('', num, num);
    return result;
}

export default () => {
    console.log(balancedParenthesis(2));
    console.log(balancedParenthesis(3));
};
