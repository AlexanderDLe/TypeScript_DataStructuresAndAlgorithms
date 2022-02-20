/**
 * Algo Expert
 * 
 */

import { PrintArray, PrintObject } from '../utils/Utilities';

const indexEqualsValue = (array:number[]): number => {
    for (let i = 0; i < array.length; i++) {
        let curr = array[i];

        if (curr < 0) continue;
        if (curr === i) return i;
    }
    
    return -1;
}

export default () => {
    let array = [-5, -3, 0, 3, 4, 5, 9];
    console.log(indexEqualsValue(array));
};
