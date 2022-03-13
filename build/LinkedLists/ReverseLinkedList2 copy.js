"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedListClass_1 = require("../DataStructures/LinkedListClass");
const reverseBetween = (head, left, right) => {
    if (!head || !head.next)
        return head;
    let dummy = new LinkedListClass_1.ListNode(0);
    dummy.next = head;
    let prev = null;
    let startOfEnd = head;
    while (right) {
        right--;
        prev = startOfEnd;
        startOfEnd = startOfEnd.next;
    }
    prev.next = null;
    prev = null;
    let startOfBetween = dummy;
    while (left) {
        left--;
        prev = startOfBetween;
        startOfBetween = startOfBetween.next;
    }
    prev.next = null;
    let p = startOfBetween;
    let q = null;
    let r = null;
    while (p) {
        r = q;
        q = p;
        p = p.next;
        q.next = r;
    }
    prev.next = q;
    startOfBetween.next = startOfEnd;
    return dummy.next;
};
exports.default = () => {
    let nums = [1, 2, 3, 4, 5];
    let list = new LinkedListClass_1.LinkedList(nums);
    (0, LinkedListClass_1.PrintList)(reverseBetween(list.head, 1, 3));
};
