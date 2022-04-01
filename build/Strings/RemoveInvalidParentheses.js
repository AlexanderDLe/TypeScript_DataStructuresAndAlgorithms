"use strict";
/**
 *  301. Remove Invalid Parentheses
Concept:
    -- Since we have to remove minimum number of invalid parentheses,
        the problem can be looked at as considering every invalid string and trying to remove a parentheses at each
        position and trying to see if all those strings are valid. This can be thought as similar to BFS.
    -- Every time an invalid string is present, we repeat the above process.
    -- If a valid string is found, that's the string with minimum removes. We should be looking
        for more such valid strings in our queue, but not creating substrings anymore.

Approach:
    -- Push input string on a queue and also mark it as seen, so we don't look at it again.
    -- For each string removed from queue front, check if it is a valid string.
        -- If valid, keep looking for other valid strings in the queue.
        -- If invalid and a valid string is already found, don't do anything.
        -- If invalid and no valid string is found, do the following:
          -- For each character of the string, create a substring with all characters but that.
          -- If the substring is not seen before, add it to seen and push to queue
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Utilities_1 = require("../utils/Utilities");
const minRemovesRef = (s) => {
    const isValid = (str) => {
        let opens = 0;
        for (let char of str) {
            if (char === '(')
                opens++;
            else if (char === ')') {
                if (!opens)
                    return false;
                opens--;
            }
        }
        return opens === 0;
    };
    if (!s || !s.length)
        return [''];
    const queue = [s];
    const seen = new Set();
    const result = [];
    let validFound = false;
    // We use a queue to analyze all invalid substrings one string at a time.
    while (queue.length) {
        console.log('-------------------------');
        (0, Utilities_1.PrintArray)(queue);
        console.log(seen);
        let expression = queue.shift();
        console.log(`Current Expression: ${expression}`);
        if (isValid(expression)) {
            result.push(expression);
            console.log(`Added valid: ${expression}`);
            validFound = true;
        }
        // Once we found our first valid string, we dont' want to continue
        // break down the strings because we found the MINIMUM removal.
        if (validFound)
            continue;
        // For invalid strings.
        console.log('Invalid Expression:', expression);
        for (let i = 0; i < expression.length; i++) {
            let char = expression[i];
            if (char !== '(' && char !== ')')
                continue;
            // Calculate next string for consideration
            let next = expression.substring(0, i) + expression.substring(i + 1);
            if (!seen.has(next)) {
                console.log(`Adding unseen: ${next}`);
                seen.add(next);
                queue.push(next);
            }
            else {
                console.log(`${next} already seen`);
            }
        }
    }
    return result;
};
const minRemoves = (s) => {
    const isValid = (str) => {
        let opens = 0;
        for (let char of str) {
            if (char === '(')
                opens++;
            if (char === ')') {
                if (!opens)
                    return false;
                opens--;
            }
        }
        return opens === 0;
    };
    if (!s || !s.length)
        return [];
    const queue = [s];
    const result = [];
    const seen = new Set();
    let minRemovalFound = false;
    while (queue.length) {
        let expression = queue.shift();
        if (isValid(expression)) {
            minRemovalFound = true;
            result.push(expression);
        }
        // If we encounter a valid string, we only want to work with
        // the existing substrings currently in the queue.
        // We don't want to further break down the string because we've already
        // found the MINIMAL VALID removals (if minRemovalFound is true).
        if (minRemovalFound)
            continue;
        // If we haven't yet found a valid substring, we can continue to break down
        // the substring until we find a valid substring.
        for (let i = 0; i < expression.length; i++) {
            let char = expression[i];
            if (char !== '(' && char !== ')')
                continue;
            let substr = expression.substring(0, i) + expression.substring(i + 1);
            if (!seen.has(substr)) {
                seen.add(substr);
                queue.push(substr);
            }
        }
    }
    return result;
};
exports.default = () => {
    console.log(minRemoves("()())()"));
    // console.log(minRemoves("(a)())()"));
};
