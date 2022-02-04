"use strict";
/**
*/
Object.defineProperty(exports, "__esModule", { value: true });
const tandemBicycle = (red, blue, fastest) => {
    let len = red.length;
    red = red.sort((a, b) => a - b);
    blue = blue.sort((a, b) => a - b);
    let sum = 0;
    if (fastest) {
        let redL = 0;
        let redR = len - 1;
        let blueL = 0;
        let blueR = len - 1;
        while (redL <= redR) {
            if (red[redR] > blue[blueR]) {
                sum += red[redR];
                redR--;
                blueL++;
            }
            else {
                sum += blue[blueR];
                blueR--;
                redL++;
            }
        }
    }
    if (!fastest) {
        for (let i = 0; i < len; i++) {
            sum += Math.max(red[i], blue[i]);
        }
    }
    return sum;
};
exports.default = () => {
    const red = [5, 5, 3, 9, 2];
    const blue = [3, 6, 7, 2, 1];
    console.log(tandemBicycle(red, blue, true));
};
