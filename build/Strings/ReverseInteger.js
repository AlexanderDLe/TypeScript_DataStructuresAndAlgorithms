"use strict";
/**
 *  7. Reverse Integer
 */
Object.defineProperty(exports, "__esModule", { value: true });
const reverse = (x) => {
    let str = Math.abs(x).toString();
    let arr = str.split('').reverse();
    let res = parseInt(arr.join(''));
    if (Math.abs(res) > Math.pow(2, 31))
        return 0;
    return res * Math.sign(x);
};
exports.default = () => {
    const x = -123;
    console.log(reverse(x));
};
