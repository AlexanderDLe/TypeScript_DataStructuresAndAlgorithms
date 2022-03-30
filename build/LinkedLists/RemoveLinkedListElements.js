"use strict";
/**
 * 203. Remove Linked List Elements
 *
 * dum > 1 > 2 > 6 > 6 > 6 > 3 > 4 > 5 > 6
 *           p
 *
 * When next element is one to remove, you can it using a while loop.
 *
 * While (next element is to be removed), remove next element.
 *
 * The while loop is necessary in case of adjacent removals.
 *
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
