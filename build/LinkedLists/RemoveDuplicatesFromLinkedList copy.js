"use strict";
/**
 * 328. Odd Even Linked List
 */
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedListClass_1 = require("../DataStructures/LinkedListClass");
const LinkedListClass_2 = require("../DataStructures/LinkedListClass");
const removeDuplicates = (head) => {
    let n = head;
    while (n) {
        while (n && n.next && n.value === n.next.value) {
            n.next = n.next.next;
        }
        n = n.next;
    }
    return head;
};
exports.default = () => {
    const n = new LinkedListClass_1.ListNode(1);
    n.next = new LinkedListClass_1.ListNode(1);
    n.next.next = new LinkedListClass_1.ListNode(3);
    n.next.next.next = new LinkedListClass_1.ListNode(4);
    n.next.next.next.next = new LinkedListClass_1.ListNode(4);
    n.next.next.next.next.next = new LinkedListClass_1.ListNode(4);
    n.next.next.next.next.next.next = new LinkedListClass_1.ListNode(5);
    n.next.next.next.next.next.next.next = new LinkedListClass_1.ListNode(6);
    n.next.next.next.next.next.next.next.next = new LinkedListClass_1.ListNode(6);
    (0, LinkedListClass_2.PrintList)(removeDuplicates(n));
};
