"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const partition = (s) => {
    let result = [];
    const isPalindrome = (start, end) => {
        while (start <= end) {
            if (s[start] != s[end])
                return false;
            start++, end--;
        }
        return true;
    };
    const recurse = (start, subarr) => {
        if (start === s.length) {
            result.push([...subarr]);
            return;
        }
        for (let end = start; end < s.length; end++) {
            if (isPalindrome(start, end)) {
                let substr = s.substring(start, end + 1);
                recurse(end + 1, [...subarr, substr]);
            }
        }
    };
    recurse(0, []);
    return result;
};
const Slow = (s) => {
    let result = [];
    let matrix = [];
    let map = {};
    for (let i = 0; i < s.length; i++) {
        matrix.push(new Array(s.length).fill(0));
        matrix[i][i] = 1;
        map[`${i}-${i}`] = s[i];
    }
    for (let col = 1; col < s.length; col++) {
        for (let row = 0; row < col; row++) {
            if (row === col - 1 || matrix[row + 1][col - 1] === 1) {
                if (s[row] === s[col]) {
                    map[`${row}-${col}`] = s.substring(row, col + 1);
                    matrix[row][col] = 1;
                }
            }
        }
    }
    let tuples = [];
    Object.keys(map).forEach(key => {
        tuples.push([key, map[key]]);
    });
    tuples.sort();
    const recurse = (startIndex, subarr) => {
        if (startIndex === s.length) {
            result.push([...subarr]);
            return;
        }
        for (let tup of tuples) {
            if (tup[0][0] === startIndex.toString()) {
                let nextStartIndex = parseInt(tup[0][2]) + 1;
                recurse(nextStartIndex, [...subarr, tup[1]]);
            }
        }
    };
    recurse(0, []);
    return result;
};
exports.default = () => {
    let str = 'aab';
    console.log(partition(str));
};
