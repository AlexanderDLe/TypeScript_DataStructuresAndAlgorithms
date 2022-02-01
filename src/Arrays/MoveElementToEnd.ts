/**
 * Algo Expert
 */
import { PrintArray, PrintObject } from '../utils/Utilities';

const moveElementToEnd = (array:number[], toMove:number): number[] => {
    let L = 0;
    let R = array.length - 1;

    while (L < R) {
        if (array[L] === toMove) {
            [array[L], array[R]] = [array[R], array[L]];
            R--;
        } else {
            L++;
        }
    }
    
    return array;
}

export default () => {
    let arr1 = [2, 1, 2, 2, 2, 3, 4, 2];
    PrintArray(moveElementToEnd(arr1, 2));
};
