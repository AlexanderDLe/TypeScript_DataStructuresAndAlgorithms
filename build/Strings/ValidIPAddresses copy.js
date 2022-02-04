"use strict";
/**
 *
 * Index 0 with 3 dots left
 *
 * 0, 3
 * 1921680
 *   ^
 *
 * 1, 2
 *
 * str = 1.
 * 1.921680
 *   ^
 *
 * 2, 2
 *
 * str = 19.
 * 19.21680
 *    ^
 *
 * 3, 2
 *
 * str = 192.
 * 192.1680
 *     ^
 *
 *************************************
 * 5, 0
 *
 * str = 192.1.
 * 192.1.6.80
 *         ^
 *
 * Recursively call a function and pass the next index, the number of dots left,
 * and a result string.
 *
 * Valid Integer:
 * 1. Integer must be below 255
 * 2. Integer must not have a leading 0.
 *
 * On the final call (where dots === 0), we must check if the final
 * integer is valid and push to result array.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
const validIPAddresses = (string) => {
    let result = [];
    const checkValidInteger = (numStr) => {
        if (numStr.length > 1 && numStr[0] === '0')
            return false;
        if (Number(numStr) > 255)
            return false;
        return true;
    };
    const recurse = (index, dots, str) => {
        if (index >= string.length)
            return;
        if (dots === 0) {
            let extractedInt = string.substring(index, string.length);
            if (checkValidInteger(extractedInt)) {
                result.push(`${str}.${extractedInt}`);
                return;
            }
        }
        let i = index;
        while (i < index + 3) {
            let extractedInt = string.substring(index, i + 1);
            if (checkValidInteger(extractedInt)) {
                let substr = str.length ? `${str}.${extractedInt}` : extractedInt;
                recurse(i + 1, dots - 1, substr);
                i++;
            }
            else
                break;
        }
    };
    recurse(0, 3, '');
    return result;
};
exports.default = () => {
    const s = "1921680";
    console.log(validIPAddresses(s));
};
