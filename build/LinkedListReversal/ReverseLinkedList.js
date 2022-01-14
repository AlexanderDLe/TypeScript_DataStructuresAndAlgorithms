"use strict";
/**
 * Grokking the Coding Interview
*/
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedListClass_1 = require("../DataStructures/LinkedListClass");
const reverseLinkedList = (head) => {
    let p = head;
    let q = null;
    let r = null;
    while (p) {
        r = q;
        q = p;
        p = p.next;
        q.next = r;
    }
    return q;
};
exports.default = () => {
    let list = new LinkedListClass_1.LinkedList([2, 4, 6, 8, 10]);
    list.print();
    (0, LinkedListClass_1.PrintList)(reverseLinkedList(list.head));
};
