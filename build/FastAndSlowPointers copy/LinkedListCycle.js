"use strict";
/**
 * Grokking the Coding Interview
*/
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedListClass_1 = require("../DataStructures/LinkedListClass");
const LinkedListCycle = (head) => {
    let s = head;
    let f = head;
    while (f) {
        s = s.next;
        f = f.next;
        if (f)
            f = f.next;
        if (s === f)
            return true;
    }
    return false;
};
exports.default = () => {
    let head = new LinkedListClass_1.ListNode(1);
    head.next = new LinkedListClass_1.ListNode(2);
    head.next.next = new LinkedListClass_1.ListNode(3);
    head.next.next.next = new LinkedListClass_1.ListNode(4);
    head.next.next.next.next = new LinkedListClass_1.ListNode(5);
    head.next.next.next.next.next = new LinkedListClass_1.ListNode(6);
    (0, LinkedListClass_1.PrintList)(head);
    console.log(`LinkedList has cycle: ${LinkedListCycle(head)}`);
    head.next.next.next.next.next.next = head.next.next;
    console.log(`LinkedList has cycle: ${LinkedListCycle(head)}`);
    head.next.next.next.next.next.next = head.next.next.next;
    console.log(`LinkedList has cycle: ${LinkedListCycle(head)}`);
};
