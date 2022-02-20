"use strict";
/**
 *  38. Count and Say
 */
Object.defineProperty(exports, "__esModule", { value: true });
const countAndSay = (n) => {
    let result = '1';
    const buildString = (str) => {
        let res = '';
        let value = str[0];
        let count = 1;
        for (let i = 1; i < str.length; i++) {
            if (str[i] === value)
                count++;
            else {
                res += `${count.toString()}${value}`;
                value = str[i];
                count = 1;
            }
        }
        res += `${count.toString()}${value}`;
        return res;
    };
    for (let i = 2; i <= n; i++) {
        result = buildString(result);
    }
    return result;
};
exports.default = () => {
    let n = 4;
    console.log(countAndSay(n));
};
