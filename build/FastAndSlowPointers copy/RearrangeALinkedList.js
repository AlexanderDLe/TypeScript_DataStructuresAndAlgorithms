"use strict";
/**
 * Grokking the Coding Interview
*/
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedListClass_1 = require("../DataStructures/LinkedListClass");
const rearrangeLinkedList = (head) => {
    let s = head;
    let f = head;
    let q = null;
    let r = null;
    // Find midpoint
    while (f && f.next) {
        r = q;
        q = s;
        s = s.next;
        f = f.next;
        if (f)
            f = f.next;
    }
    // If f is odd, then iterate one more time
    if (f) {
        r = q;
        q = s;
        s = s.next;
    }
    // Detach first half
    q.next = null;
    q = null;
    r = null;
    // Reverse the second half
    while (s) {
        r = q;
        q = s;
        s = s.next;
        q.next = r;
    }
    s = head;
    while (s && q) {
        let st = s.next;
        let qt = q.next;
        s.next = q;
        q.next = st;
        q = qt;
        s = s.next;
    }
    return head;
};
exports.default = () => {
    let t1 = new LinkedListClass_1.ListNode(2);
    t1.next = new LinkedListClass_1.ListNode(4);
    t1.next.next = new LinkedListClass_1.ListNode(6);
    t1.next.next.next = new LinkedListClass_1.ListNode(8);
    t1.next.next.next.next = new LinkedListClass_1.ListNode(10);
    t1.next.next.next.next.next = new LinkedListClass_1.ListNode(12);
    (0, LinkedListClass_1.PrintList)(t1);
    (0, LinkedListClass_1.PrintList)(rearrangeLinkedList(t1));
    let t2 = new LinkedListClass_1.ListNode(2);
    t2.next = new LinkedListClass_1.ListNode(4);
    t2.next.next = new LinkedListClass_1.ListNode(6);
    t2.next.next.next = new LinkedListClass_1.ListNode(8);
    t2.next.next.next.next = new LinkedListClass_1.ListNode(10);
    (0, LinkedListClass_1.PrintList)(t2);
    (0, LinkedListClass_1.PrintList)(rearrangeLinkedList(t2));
};
