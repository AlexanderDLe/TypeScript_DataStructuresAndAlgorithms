"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *  1290. Convert Binary Number in a Linked List to Integer
 */
var LinkedListClass_1 = require("../DataStructures/LinkedListClass");
var SolutionA = function (head) {
    var n = head;
    var binaries = [];
    while (n) {
        binaries.push(n.val);
        n = n.next;
    }
    var power = 0;
    var result = 0;
    for (var i = binaries.length - 1; i >= 0; i--) {
        result += Math.pow(2, power) * binaries[i];
        power++;
    }
    return result;
};
var SolutionB = function (head) {
    var result = 0;
    while (head) {
        result = result * 2 + head.val;
        head = head.next;
    }
    return result;
};
exports.default = (function () {
    var list = new LinkedListClass_1.LinkedList([1, 0, 1]);
    console.log(SolutionB(list.head));
});
