/**
 * 46. Permutations
 */
import { PrintMatrix } from '../utils/Utilities';

type SpecialArray = Array<number | SpecialArray>;
const productSum = (array: SpecialArray, depth = 1): number => {
    let sum = 0;

    for (let item of array) {
        if (Array.isArray(item)) {
            sum += productSum(item, depth + 1);
        } else {
            sum += item;
        }
    }

    return sum * depth;

}
export default () => {
    const array = [5, 2, [7, -1], 3, [6, [-13, 8], 4]];
    console.log(productSum(array));
};
