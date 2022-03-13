"use strict";
/**
 * 328. Odd Even Linked List
 */
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedListClass_1 = require("../DataStructures/LinkedListClass");
const LinkedListClass_2 = require("../DataStructures/LinkedListClass");
const oddEvenListA = (head) => {
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
/*
                               h
   1 > 2 > 3 > 4 > 5 > 6 > 7

                p    o
  odds > 1 > 3 > 5 > 7
                 e
  even > 2 > 4 > 6
*/
const oddEvenList = (head) => {
    let odds = new LinkedListClass_1.ListNode(0);
    let even = new LinkedListClass_1.ListNode(0);
    let o = odds;
    let e = even;
    while (head) {
        o.next = head;
        o = o.next;
        head = head.next;
        if (!head)
            break;
        e.next = head;
        e = e.next;
        head = head.next;
    }
    e.next = null;
    o.next = even.next;
    return odds.next;
};
exports.default = () => {
    const n = new LinkedListClass_1.ListNode(1);
    n.next = new LinkedListClass_1.ListNode(2);
    n.next.next = new LinkedListClass_1.ListNode(3);
    n.next.next.next = new LinkedListClass_1.ListNode(4);
    n.next.next.next.next = new LinkedListClass_1.ListNode(5);
    n.next.next.next.next.next = new LinkedListClass_1.ListNode(6);
    n.next.next.next.next.next.next = new LinkedListClass_1.ListNode(7);
    (0, LinkedListClass_2.PrintList)(oddEvenList(n));
};
