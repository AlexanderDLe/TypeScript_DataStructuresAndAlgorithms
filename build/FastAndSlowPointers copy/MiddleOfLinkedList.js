"use strict";
/**
 * Grokking the Coding Interview
*/
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedListClass_1 = require("../DataStructures/LinkedListClass");
const findMiddleOfLinkedList = (head) => {
    let s = head;
    let f = head;
    while (f && f.next) {
        s = s.next;
        f = f.next;
        if (f)
            f = f.next;
    }
    return s;
};
exports.default = () => {
    let head = new LinkedListClass_1.ListNode(1);
    head.next = new LinkedListClass_1.ListNode(2);
    head.next.next = new LinkedListClass_1.ListNode(3);
    head.next.next.next = new LinkedListClass_1.ListNode(4);
    head.next.next.next.next = new LinkedListClass_1.ListNode(5);
    (0, LinkedListClass_1.PrintList)(head);
    console.log(findMiddleOfLinkedList(head).val);
    head.next.next.next.next.next = new LinkedListClass_1.ListNode(6);
    (0, LinkedListClass_1.PrintList)(head);
    console.log(findMiddleOfLinkedList(head).val);
    head.next.next.next.next.next.next = new LinkedListClass_1.ListNode(7);
    (0, LinkedListClass_1.PrintList)(head);
    console.log(findMiddleOfLinkedList(head).val);
};
