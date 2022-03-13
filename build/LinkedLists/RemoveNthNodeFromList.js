"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *  19. Remove Nth Node From End Of List
 */
const LinkedListClass_1 = require("../DataStructures/LinkedListClass");
const removeNthFromEndA = (head, n) => {
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
const removeNthFromEndB = (head, n) => {
    let dummy = new LinkedListClass_1.ListNode(0);
    dummy.next = head;
    let p = null;
    let s = dummy;
    let f = dummy;
    while (n) {
        f = f.next;
        n--;
    }
    while (f) {
        p = s;
        s = s.next;
        f = f.next;
    }
    p.next = s.next;
    return dummy.next;
};
/*
    n = 2

                q       p
    D > 1 > 2 > 3 > 4 > 5
*/
const removeNthFromEnd = (head, n) => {
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
    const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const list = new LinkedListClass_1.LinkedList(nums);
    const N = 10;
    (0, LinkedListClass_1.PrintList)(list.head);
    (0, LinkedListClass_1.PrintList)(removeNthFromEnd(list.head, N));
};
