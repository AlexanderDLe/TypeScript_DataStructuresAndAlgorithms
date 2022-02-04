"use strict";
/**
 * Grokking the Coding Interview
 *
 * [1, 2, 2, 3, 6]
 *
 *
 * [1, 2, 2, 3, 6]
 *  ^
 *
 * Waiting Time = 0
 *
 *********************
 *
 * [1, 2, 2, 3, 6]
 *     ^
 *
 * Waiting Time = 1
 *
 *********************
 *
 * [1, 2, 2, 3, 6]
 *        ^
 *
 * Waiting Time = 1 + 2
 *
 *
*/
Object.defineProperty(exports, "__esModule", { value: true });
const minimumWaitingTime = (queries) => {
    queries = queries.sort((a, b) => a - b);
    let sum = 0;
    let prev = queries[0];
    for (let i = 1; i < queries.length; i++) {
        let curr = queries[i];
        sum += prev;
        prev += curr;
    }
    return sum;
};
exports.default = () => {
    const queries = [3, 2, 1, 2, 6];
    [1, 2, 2, 3, 6];
    console.log(minimumWaitingTime(queries));
};
