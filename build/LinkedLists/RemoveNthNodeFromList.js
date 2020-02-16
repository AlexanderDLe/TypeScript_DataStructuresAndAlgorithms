"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *  19. Remove Nth Node From End Of List
 */
const LinkedListClass_1 = require("../DataStructures/LinkedListClass");
const removeNthFromEnd = (head, n) => {
    if (!head)
        return head;
    let dummy = new LinkedListClass_1.ListNode(0);
    dummy.next = head;
    let p = dummy;
    let q = dummy;
    while (n) {
        p = p.next;
        n--;
    }
    while (p && p.next) {
        p = p.next;
        q = q.next;
    }
    q.next = q.next.next;
    return dummy.next;
};
exports.default = () => {
    const nums = [1, 2, 3, 4, 5];
    const list = new LinkedListClass_1.LinkedList(nums);
    const target = 2;
    LinkedListClass_1.PrintList(list.head);
    LinkedListClass_1.PrintList(removeNthFromEnd(list.head, target));
};
