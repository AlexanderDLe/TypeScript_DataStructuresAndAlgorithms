/**
 * 739. Daily Temperatures
 */
import { PrintArray } from '../utils/Utilities';

const dailyTemperaturesA = (T: number[]): number[] => {
    let stack: number[] = [];
    let result: number[] = new Array(T.length).fill(0);

    for (let i = T.length - 1; i >= 0; i--) {
        let currTemp = T[i];
        
        while (stack.length) {
            let prevTemp = T[stack[stack.length - 1]];
            
            if (currTemp < prevTemp) {
                result[i] = stack[stack.length - 1] - i;
                break;
            } else {
                stack.pop();
            }
        }
        stack.push(i);
    }

    return result;
}

type TempAndIndex = [number, number];
const dailyTemperaturesB = (T: number[]): number[] => {
    let result = new Array(T.length).fill(0);
    let stack: TempAndIndex[] = [];

    for (let i = T.length - 1; i >= 0; i--) {
        while (stack.length && T[i] >= stack[stack.length - 1][0]) {
            stack.pop();
        }
        if (stack.length && T[i] < stack[stack.length - 1][0]) {
            result[i] = stack[stack.length - 1][1] - i;
        }
        stack.push([T[i], i]);
    }

    return result;
};

const dailyTemperatures = (T: number[]): number[] => {
    let result: number[] = new Array(T.length).fill(0);
    let stack: number[] = [];

    for (let i = T.length - 1; i >= 0; i--) {
        let currTemp = T[i];

        while (stack.length) {
            let stackTopIndex = stack[stack.length - 1];
            let stackTopTemp = T[stackTopIndex]

            if (currTemp < stackTopTemp) {
                result[i] = stackTopIndex - i;
                break;
            } else {
                stack.pop();
            }
        }
        stack.push(i);
    }    

    return result; 
}

export default () => {
    let T = [73, 74, 75, 71, 69, 72, 76, 73];
    PrintArray(dailyTemperatures(T));
};
