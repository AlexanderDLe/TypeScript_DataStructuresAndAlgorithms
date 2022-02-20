"use strict";
/**
 * Algo Expert
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
const indexEqualsValue = (array) => {
    for (let i = 0; i < array.length; i++) {
        let curr = array[i];
        if (curr < 0)
            continue;
        if (curr === i)
            return i;
    }
    return -1;
};
exports.default = () => {
    let array = [-5, -3, 0, 3, 4, 5, 9];
    console.log(indexEqualsValue(array));
};
