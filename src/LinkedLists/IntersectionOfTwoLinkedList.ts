/**
 * 160. Intersection of Two Linked Lists
 */

import { ListNode } from '../DataStructures/LinkedListClass';

type Node = ListNode<number> | null;

const getIntersectionNodeA = (headA: Node, headB: Node): Node => {
    if (!headA || !headB) return null;

    const getLength = (head: Node): number => {
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
        if (aLen > bLen) headA = headA.next;
        if (bLen > aLen) headB = headB.next;
    }

    while (headA && headB) {
        if (headA === headB) return headA;
        headA = headA.next;
        headB = headB.next;
    }
    return null;
};

const getIntersectionNode = (headA: Node, headB: Node): Node => {
    let lenA = 0;
    let lenB = 0;

    let currA = headA;
    let currB = headB;

    while (currA || currB) {
        if (currA) {
            lenA ++;
            currA = currA.next;
        }
        if (currB) {
            lenB ++;
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
}

export default () => {
    let n = new ListNode(4);
    n.next = new ListNode(1);
    n.next.next = new ListNode(8);
    n.next.next.next = new ListNode(4);
    n.next.next.next.next = new ListNode(5);

    let m = new ListNode(5);
    m.next = new ListNode(0);
    m.next.next = new ListNode(1);
    m.next.next.next = n.next.next;

    console.log(getIntersectionNode(n, m));
};
