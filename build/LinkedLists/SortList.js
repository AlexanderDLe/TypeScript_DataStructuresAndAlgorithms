"use strict";
/**
 * 148. Sort List
 *
 * Split list in half, sort each half using custom merge algorithm, then merge together.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedListClass_1 = require("../DataStructures/LinkedListClass");
const merge = (l1, l2) => {
    let l = new LinkedListClass_1.ListNode(0);
    let p = l;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            p.next = l1;
            l1 = l1.next;
        }
        else {
            p.next = l2;
            l2 = l2.next;
        }
        p = p.next;
    }
    if (l1)
        p.next = l1;
    if (l2)
        p.next = l2;
    return l.next;
};
const sortList = (head) => {
    if (!head || !head.next)
        return head;
    // 1. Cut the list to two halves
    let prev = null;
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    prev.next = null;
    // 2. Sort each half
    let l1 = sortList(head);
    let l2 = sortList(slow);
    // 3. merge l1 and l2
    return merge(l1, l2);
};
exports.default = () => {
    const nums = [4, 2, 1, 3];
    const list = new LinkedListClass_1.LinkedList(nums);
    LinkedListClass_1.PrintList(list.head);
    LinkedListClass_1.PrintList(sortList(list.head));
};
