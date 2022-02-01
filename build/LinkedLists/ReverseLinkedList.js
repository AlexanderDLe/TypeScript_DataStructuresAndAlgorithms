"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 206. Reverse Linked List
 */
const LinkedListClass_1 = require("../DataStructures/LinkedListClass");
const reverseListA = (head) => {
    if (!head)
        return null;
    let p = head;
    let q = null;
    let r = null;
    while (p) {
        r = q;
        q = p;
        p = p.next;
        q.next = r;
    }
    return q;
};
const reverseListRecursively = (head) => {
    if (!head || !head.next)
        return null;
    let p = reverseListRecursively(head.next);
    head.next.next = head;
    head.next = null;
    return p;
};
const reverseListB = (head) => {
    let p = head;
    let q = null;
    let r = null;
    while (p) {
        r = q;
        q = p;
        p = p.next;
        q.next = r;
    }
    return q;
};
const reverseList = (head) => {
    let p = head;
    let q = null;
    let r = null;
    while (p) {
        r = q;
        q = p;
        p = p.next;
        q.next = r;
    }
    return q;
};
exports.default = () => {
    let nums = [1, 2, 3, 4, 5];
    let list = new LinkedListClass_1.LinkedList(nums);
    (0, LinkedListClass_1.PrintList)(reverseList(list.head));
};
