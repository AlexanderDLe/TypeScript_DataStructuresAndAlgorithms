"use strict";
/**
 * 160. Intersection of Two Linked Lists
 */
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedListClass_1 = require("../DataStructures/LinkedListClass");
const getIntersectionNode = (headA, headB) => {
    if (!headA || !headB)
        return null;
    const getLength = (head) => {
        let count = 0;
        let n = head;
        while (n) {
            count++;
            n = n.next;
        }
        return count;
    };
    let aLen = getLength(headA);
    let bLen = getLength(headB);
    let diff = Math.abs(aLen - bLen);
    while (diff) {
        diff--;
        if (aLen > bLen)
            headA = headA.next;
        if (bLen > aLen)
            headB = headB.next;
    }
    while (headA && headB) {
        if (headA === headB)
            return headA;
        headA = headA.next;
        headB = headB.next;
    }
    return null;
};
exports.default = () => {
    let n = new LinkedListClass_1.ListNode(4);
    n.next = new LinkedListClass_1.ListNode(1);
    n.next.next = new LinkedListClass_1.ListNode(8);
    n.next.next.next = new LinkedListClass_1.ListNode(4);
    n.next.next.next.next = new LinkedListClass_1.ListNode(5);
    let m = new LinkedListClass_1.ListNode(5);
    m.next = new LinkedListClass_1.ListNode(0);
    m.next.next = new LinkedListClass_1.ListNode(1);
    m.next.next.next = n.next.next;
    console.log(getIntersectionNode(n, m));
};
