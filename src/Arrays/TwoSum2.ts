/**
 * 1. Two Sum 2
 */
import { PrintArray } from '../utils/Utilities';

let twoSum = (numbers: number[], target: number): number[] => {
    let L = 0;
    let R = numbers.length - 1;
    let answer = [0, 0];

    while (L < R) {
        let sum = numbers[L] + numbers[R];
        if (sum === target) {
            answer[0] = L + 1;
            answer[1] = R + 1;
            break;
        } else if (sum > target) {
            R--;
        } else {
            L++;
        }
    }

    return answer;
};

export default () => {
    let numbers = [2, 7, 11, 15];
    PrintArray(twoSum(numbers, 9));
};
