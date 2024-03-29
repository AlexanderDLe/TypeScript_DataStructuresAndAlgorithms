"use strict";
/**
 * 160. Intersection of Two Linked Lists
 */
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedListClass_1 = require("../DataStructures/LinkedListClass");
const getIntersectionNodeA = (headA, headB) => {
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
const getIntersectionNode = (headA, headB) => {
    let lenA = 0;
    let lenB = 0;
    let currA = headA;
    let currB = headB;
    while (currA || currB) {
        if (currA) {
            lenA++;
            currA = currA.next;
        }
        if (currB) {
            lenB++;
            currB = currB.next;
        }
    }
    while (lenA > lenB) {
        headA = headA.next;
        lenA--;
    }
    while (lenA < lenB) {
        headB = headB.next;
        lenB--;
    }
    while (headA !== headB) {
        headA = headA.next;
        headB = headB.next;
    }
    return headA;
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
