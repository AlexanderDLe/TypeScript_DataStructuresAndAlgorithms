"use strict";
/**
 * 328. Odd Even Linked List
 *
 * dum > 1 > 2 > 3 > 4 > 5 > 6 > null
 *                       n
 *
 * dum > 7 > null
 */
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedListClass_1 = require("../DataStructures/LinkedListClass");
const LinkedListClass_2 = require("../DataStructures/LinkedListClass");
const removeElements = (head, val) => {
    let dummy = new LinkedListClass_1.ListNode(0);
    dummy.next = head;
    let p = dummy;
    while (p && p.next) {
        while (p.next && p.next.val === val) {
            p.next = p.next.next;
        }
        p = p.next;
    }
    return dummy.next;
};
exports.default = () => {
    let n = new LinkedListClass_1.LinkedList([7, 7, 7]);
    (0, LinkedListClass_2.PrintList)(removeElements(n.head, 7));
};
