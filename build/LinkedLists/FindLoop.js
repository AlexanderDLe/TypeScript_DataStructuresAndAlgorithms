"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 */
const LinkedListClass_1 = require("../DataStructures/LinkedListClass");
const hasCycle = (head) => {
    let s = head.next;
    let f = head.next.next;
    while (s !== f) {
        s = s.next;
        f = f.next.next;
    }
    let len = 1;
    s = s.next;
    f = f.next.next;
    while (s !== f) {
        len++;
        s = s.next;
        f = f.next.next;
    }
    s = head;
    f = head;
    while (len) {
        f = f.next;
        len--;
    }
    while (s !== f) {
        s = s.next;
        f = f.next;
    }
    return s;
};
exports.default = () => {
    let n = new LinkedListClass_1.ListNode(0);
    n.next = new LinkedListClass_1.ListNode(1);
    n.next.next = new LinkedListClass_1.ListNode(2);
    n.next.next.next = new LinkedListClass_1.ListNode(3);
    n.next.next.next.next = new LinkedListClass_1.ListNode(4);
    n.next.next.next.next.next = new LinkedListClass_1.ListNode(5);
    n.next.next.next.next.next.next = new LinkedListClass_1.ListNode(6);
    n.next.next.next.next.next.next.next = new LinkedListClass_1.ListNode(7);
    n.next.next.next.next.next.next.next.next = new LinkedListClass_1.ListNode(8);
    n.next.next.next.next.next.next.next.next.next = new LinkedListClass_1.ListNode(9);
    let startCycle = n.next.next.next.next;
    let endCycle = n.next.next.next.next.next.next.next.next.next;
    endCycle.next = startCycle;
    // console.log(endCycle);
    console.log(hasCycle(n));
};
