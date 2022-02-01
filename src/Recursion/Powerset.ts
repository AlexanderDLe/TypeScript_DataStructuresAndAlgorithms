/**
 * 46. Permutations
 */
import { PrintMatrix } from '../utils/Utilities';
import Subsets from './Subsets';

const powersetRecursion = (array: number[]): number[][] => {
    let result: number[][] = [];

    const recurse = (index: number, subarr: number[]): void => {
        if (index === array.length) {
            result.push([...subarr]);
            return;
        }
        recurse(index + 1, subarr);
        recurse(index + 1, [...subarr, array[index]]);
    }

    recurse(0, []);
    return result;
}

const powerset = (array: number[]): number[][] => {
    let result: number[][] = [[]];

    for (let num of array) {
        let len = result.length;

        for (let i = 0; i < len; i++) {
            let subset = result[i];
            result.push([...subset, num])
        }
    }

    return result;
}

export default () => {
    const array = [1, 2, 3];
    console.log(powerset(array));
};
