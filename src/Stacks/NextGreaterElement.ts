/**
 * 
 * 
 */
import { PrintArray } from '../utils/Utilities';

const nextGreaterElement = (array: number[]): number[] => {
    const maxVal = Math.max(...array);
    const maxIndex = array.indexOf(maxVal);
    
    const stack: number[] = [];
    const result = new Array(array.length).fill(0);

    result[maxIndex] = -1;
    stack.push(maxVal);

    const process = (index: number) => {
        let curr = array[index];
        
        while (stack.length && curr >= stack[stack.length - 1]) {
            stack.pop();
        }
        result[index] = stack.length ? stack[stack.length - 1] : -1;
        stack.push(curr);
    }

    for (let i = maxIndex - 1; i >= 0; i--) {
        process(i);
    }

    for (let i = array.length - 1; i > maxIndex; i--) {
        process(i);
    }

    return result;
}

export default () => {
    let array = [2, 5, -3, -4, 6, 7, 2];
    PrintArray(nextGreaterElement(array));
};
