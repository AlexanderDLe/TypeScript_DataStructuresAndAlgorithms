/**
 * 141. Linked List Cycle
 */
import { ListNode } from '../DataStructures/LinkedListClass';

type Node = ListNode<number> | null;

const hasCycleA = (head: Node): boolean => {
    if (!head || !head.next) return false;
    let s = head;
    let f = head;

    while (f) {
        s = s.next;
        f = f.next;
        if (f) f = f.next;
        if (s === f) return true;
    }

    return false;
};

const hasCycle = (head: Node): boolean => {
    let s: Node = head;
    let f: Node = head;

    while (f) {
        s = s.next;
        f = f.next;
        if (f) f = f.next;

        if (f && s === f) return true;
    }

    return false;
}

export default () => {
    let n = new ListNode(3);
    n.next = new ListNode(2);
    n.next.next = new ListNode(0);
    n.next.next.next = new ListNode(-4);
    // n.next.next.next.next = n.next;

    console.log(hasCycle(n));
};
