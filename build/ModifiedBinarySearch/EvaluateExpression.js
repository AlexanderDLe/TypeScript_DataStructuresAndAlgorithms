"use strict";
/**
 * Grokking the Coding Interview
 *
 * evaluate([1 + 2 * 3])
 *
 * 1 + 2 * 3
 * ^
 *
 **************************************************
 * (Outer Evaluation)
 *
 * 1 + 2 * 3
 *   ^
 *
 * left = evaluate([1]) = 1
 * right = evaluate([2 * 3]) = 6
 *
 * 1 + 6 = 7.
 * It will continue to loop.
 *
 **************************************************
 * (Outer Evaluation)
 *
 * 1 + 2 * 3
 *       ^
 *
 * left = evaluate([1 + 2]) = 3
 * right = evaluate([3]) = 3
 *
 * 3 * 3 = 9
 * It will continue to loop.
 *
 **************************************************
 * (Inner Evaluation)
 *
 * right = evaluate([2 * 3])
 *
 * 2 * 3
 *   ^
 *
 * left = evaluate([2]) = 2
 * right = evaluate([3]) = 3
 *
 * return 6
 *
 **************************************************
 *
*/
Object.defineProperty(exports, "__esModule", { value: true });
const evaluateExpressionRef = (input) => {
    let result = [];
    // Edge Case: If the input string is just a num, return the num
    if (!(input.includes('+')) && !(input.includes('-')) && !(input.includes('*'))) {
        return [parseInt(input)];
    }
    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        // If char is an operator
        if (isNaN(parseInt(char, 10))) {
            // Break the equation here into two parts and make recursive calls
            let left = evaluateExpression(input.substring(0, i));
            let right = evaluateExpression(input.substring(i + 1));
            console.log(char);
            console.log('left: ', left, ' right: ', right);
            console.log('');
            for (let l = 0; l < left.length; l++) {
                for (let r = 0; r < right.length; r++) {
                    let part1 = left[l];
                    let part2 = right[r];
                    if (char === '+')
                        result.push(part1 + part2);
                    else if (char === '-')
                        result.push(part1 - part2);
                    else if (char === '*')
                        result.push(part1 * part2);
                }
            }
        }
    }
    return result;
};
const evaluateExpression = (input) => {
    if (!input.includes('+') && !input.includes('-') && !input.includes('*')) {
        return [parseInt(input)];
    }
    let result = [];
    for (let i = 0; i < input.length; i++) {
        let char = input[i];
        // If char is a number, then continue
        if (!isNaN(parseInt(char)))
            continue;
        // Get all evaluation permutations of left and right
        // substrings and combine w/ operator
        let left = evaluateExpression(input.substring(0, i));
        let right = evaluateExpression(input.substring(i + 1));
        for (let L = 0; L < left.length; L++) {
            for (let R = 0; R < right.length; R++) {
                let Lval = left[L];
                let Rval = right[R];
                if (char === '+')
                    result.push(Lval + Rval);
                else if (char === '-')
                    result.push(Lval - Rval);
                else if (char === '*')
                    result.push(Lval * Rval);
            }
        }
    }
    return result;
};
exports.default = () => {
    let str1 = '1+2*3';
    let str2 = '2*3-4-5';
    console.log(evaluateExpression(str1));
    console.log(evaluateExpression(str2));
};
