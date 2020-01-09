"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 206. Reverse Linked List
 */
const LinkedListClass_1 = require("../DataStructures/LinkedListClass");
const reverseList = (head) => {
    if (!head)
        return head;
    let p = head;
    let q = null;
    let r = null;
    while (p) {
        r = q;
        q = p;
        p = p.next;
        if (q)
            q.next = r;
    }
    head = q;
    return head;
};
exports.default = () => {
    let nums = [1, 2, 3, 4, 5];
    let list = new LinkedListClass_1.LinkedList(nums);
    LinkedListClass_1.PrintList(reverseList(list.head));
};
