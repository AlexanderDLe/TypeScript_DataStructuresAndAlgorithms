/**
 * Algo Expert
 */
import { PrintArray, PrintObject } from '../utils/Utilities';

const monotonicArray = (array:number[]): boolean => {
    if (array.length < 2) return true;

    let shouldAscend = array[0] <= array[array.length - 1];

    for (let i = 0; i < array.length - 1; i++) {
        if (shouldAscend && array[i] > array[i + 1]) return false;
        if (!shouldAscend && array[i] < array[i + 1]) return false;
    }

    return true;
}

export default () => {
    let arr1 = [-1, -5, -10, -1100, -4500];
    console.log(monotonicArray(arr1));
};
