"use strict";
/**
 * Grokking the Coding Interview
 *
*/
Object.defineProperty(exports, "__esModule", { value: true });
const classPhotos = (red, blue) => {
    red = red.sort((a, b) => a - b);
    blue = blue.sort((a, b) => a - b);
    if (red[0] === blue[0])
        return false;
    let shorter = red[0] < blue[0] ? red : blue;
    let taller = blue[0] > red[0] ? blue : red;
    for (let i = 0; i < shorter.length; i++) {
        if (shorter[i] > taller[i])
            return false;
    }
    return true;
};
exports.default = () => {
    const red = [5, 8, 1, 3, 4];
    const blue = [6, 9, 2, 4, 5];
    console.log(classPhotos(red, blue));
};
