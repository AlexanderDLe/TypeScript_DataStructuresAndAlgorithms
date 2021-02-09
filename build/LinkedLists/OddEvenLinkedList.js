"use strict";
/**
 * 328. Odd Even Linked List
 */
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedListClass_1 = require("../DataStructures/LinkedListClass");
const LinkedListClass_2 = require("../DataStructures/LinkedListClass");
const oddEvenList = (head) => {
    if (!head)
        return head;
    let d1 = new LinkedListClass_1.ListNode(0);
    let d2 = new LinkedListClass_1.ListNode(0);
    let p = head;
    let q = head.next;
    let r = d1;
    let t = d2;
    while (p && q) {
        r.next = p;
        t.next = q;
        r = p;
        t = q;
        if (q)
            p = q.next;
        if (p)
            q = p.next;
    }
    if (p) {
        r.next = p;
        r = r.next;
    }
    t.next = null;
    r.next = d2.next;
    return d1.next;
};
exports.default = () => {
    const n = new LinkedListClass_1.ListNode(2);
    n.next = new LinkedListClass_1.ListNode(1);
    n.next.next = new LinkedListClass_1.ListNode(3);
    n.next.next.next = new LinkedListClass_1.ListNode(5);
    n.next.next.next.next = new LinkedListClass_1.ListNode(6);
    n.next.next.next.next.next = new LinkedListClass_1.ListNode(4);
    n.next.next.next.next.next.next = new LinkedListClass_1.ListNode(7);
    LinkedListClass_2.PrintList(oddEvenList(n));
};
