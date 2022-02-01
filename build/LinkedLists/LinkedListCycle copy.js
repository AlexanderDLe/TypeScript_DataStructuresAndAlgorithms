"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 141. Linked List Cycle
 */
const LinkedListClass_1 = require("../DataStructures/LinkedListClass");
const hasCycleA = (head) => {
    if (!head || !head.next)
        return false;
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
const hasCycle = (head) => {
    let s = head;
    let f = head;
    while (f) {
        s = s.next;
        f = f.next;
        if (f)
            f = f.next;
        if (f && s === f)
            return true;
    }
    return false;
};
exports.default = () => {
    let n = new LinkedListClass_1.ListNode(3);
    n.next = new LinkedListClass_1.ListNode(2);
    n.next.next = new LinkedListClass_1.ListNode(0);
    n.next.next.next = new LinkedListClass_1.ListNode(-4);
    // n.next.next.next.next = n.next;
    console.log(hasCycle(n));
};
