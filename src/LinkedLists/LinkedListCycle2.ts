/**
 * 142. Linked List Cycle 2
 *
 * First, determine if there is a cycle.
 * If not, then return null.
 * If so, break out of the first loop.
 *
 * With extra memory: Check if node has been encountered before.
 *
 * Without extra memory: The distance from head to slow is the same
 * as the distance from fast to cycle head.
 */

import { ListNode } from '../DataStructures/LinkedListClass';

type Node = ListNode<number> | null;

const detectCycle = (head: Node): Node => {
    if (!head) return null;
    let slow = head;
    let fast = head;
    let isCycle = false;

    while (fast) {
        slow = slow.next;
        if (!fast.next) return null;
        fast = fast.next.next;
        if (slow === fast) {
            isCycle = true;
            break;
        }
    }

    if (!isCycle) return null;

    slow = head;
    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }

    return slow;
};

export default () => {
    const n = new ListNode(3);
    n.next = new ListNode(2);
    n.next.next = new ListNode(0);
    n.next.next.next = new ListNode(-4);
    n.next.next.next.next = n.next;

    const m = new ListNode(1);
    m.next = new ListNode(2);
    m.next.next = m;

    console.log(detectCycle(n));
};
