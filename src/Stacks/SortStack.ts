/**
 * 
 * 
 * [6, 2, -2, 4, 1, 3];
 * Store 3, 
 * 
 * [6, 2, -2, 4, 1];
 * Store 1
 * 
 * [6, 2, -2, 4];
 * Store 4
 * 
 * [6, 2, -2];
 * Store -2
 * 
 * [6, 2];
 * Store 2
 * 
 * [6];
 * Store 6
 * 
 * [];
 * Base Case
 * 
 * Num = 6
 * []
 * 
 * Num = 2
 * [2, 6]
 * 
 * Num = -2
 * [2, 6]
 * Store 6
 * 
 * [2]
 * Store 2
 * 
 * []
 * Push -2
 */
import InsertInterval from '../Intervals/InsertInterval';
import { PrintArray } from '../utils/Utilities';

const sortStackRef = (stack: number[]): number[] => {
    const insert = (num: number) => {
        if (!stack.length || stack[stack.length - 1] < num) {
            stack.push(num);
            return;
        }

        let store = stack.pop();
        insert(num);
        stack.push(store);
    }

    const sort = () => {
        if (!stack.length) return;
        let store = stack.pop();
        sort();
        insert(store);
    }

    sort();
    return stack;
}

const sortStack = (stack: number[]): number[] => {
    const insert = (num:number) => {
        if (!stack.length || num > stack[stack.length - 1]) {
            stack.push(num);
            return;
        }

        let store = stack.pop();
        insert(num);
        stack.push(store);
    }

    const sort = () => {
        if (!stack.length) return;
        let store = stack.pop();
        sort();
        insert(store);
    }
    
    sort();
    return stack;
}

export default () => {
    let stack = [-5, 2, -2, 4, 3, 1];
    PrintArray(sortStack(stack));
};
