"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *  1290. Convert Binary Number in a Linked List to Integer
 */
const LinkedListClass_1 = require("../DataStructures/LinkedListClass");
const SolutionA = (head) => {
    let n = head;
    let binaries = [];
    while (n) {
        binaries.push(n.val);
        n = n.next;
    }
    let power = 0;
    let result = 0;
    for (let i = binaries.length - 1; i >= 0; i--) {
        result += Math.pow(2, power) * binaries[i];
        power++;
    }
    return result;
};
const SolutionB = (head) => {
    let result = 0;
    while (head) {
        result = result * 2 + head.val;
        head = head.next;
    }
    return result;
};
exports.default = () => {
    const list = new LinkedListClass_1.LinkedList([1, 0, 1]);
    console.log(SolutionB(list.head));
};
