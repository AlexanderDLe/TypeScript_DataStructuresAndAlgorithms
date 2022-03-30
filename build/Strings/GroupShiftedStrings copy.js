"use strict";
/**
 * 249. Group Shifted
 *
 *  To get the circular difference, add and mode 26.
 *
 *    ab                      b - a
 *    1       2   distance => 2 - 1 = 1
 *    a ----> b            => 1 + 26 = 27
 *                         => 27 % 26 = 1
 *
 *    za                      a - z
 *    1       26  distance => 1 - 26 = -25
 *    a  ...  z            =>-25 + 26 = 1
 *    ^ _____/
 */
Object.defineProperty(exports, "__esModule", { value: true });
const minFlips = (strings) => {
    const getDistance = (curr, next) => {
        let currCode = curr.charCodeAt(0);
        let nextCode = next.charCodeAt(0);
        // Normalize by adding 26 the modding 26
        return (26 + currCode - nextCode) % 26;
    };
    const map = {};
    for (let str of strings) {
        let code = '';
        for (let i = 0; i < str.length - 1; i++) {
            code += getDistance(str[i], str[i + 1]);
        }
        map[code] ? map[code].push(str) : map[code] = [str];
    }
    return Object.values(map);
};
exports.default = () => {
    console.log(minFlips(["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z", 'al']));
    console.log(minFlips(["a"]));
};
