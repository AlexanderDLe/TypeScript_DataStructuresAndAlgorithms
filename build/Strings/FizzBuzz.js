"use strict";
/**
 *  412. Fizz Buzz
 */
Object.defineProperty(exports, "__esModule", { value: true });
const fizzBuzz = (n) => {
    const result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            result.push('FizzBuzz');
        }
        else if (i % 5 === 0) {
            result.push('Buzz');
        }
        else if (i % 3 === 0) {
            result.push('Fizz');
        }
        else {
            result.push(i.toString());
        }
    }
    return result;
};
exports.default = () => {
    console.log(fizzBuzz(15));
};
