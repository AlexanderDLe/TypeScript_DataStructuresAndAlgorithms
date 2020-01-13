/**
 * 160. Intersection of Two Linked Lists
 */

import { ListNode, PrintList } from '../DataStructures/LinkedListClass';

type Node = ListNode<number> | null;

const getLength = (head: Node): number => {
    let count = 0;
    let n = head;
    while (n) {
        count++;
        n = n.next;
    }
    return count;
};
const getIntersectionNode = (headA: Node, headB: Node): Node => {
    if (!headA || !headB) return null;

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
