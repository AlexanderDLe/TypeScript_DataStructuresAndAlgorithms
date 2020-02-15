"use strict";
/**
 * 142. Linked List Cycle 2
 *
 * First, determine if there is a cycle.
 * If not, then return null.
 * If so, break out of the first loop.
 *
 * With extra memory:
 * Store node in array.
 * Check if node has been encountered before.
 * Return that node.
 *
 * Without extra memory:
 * The distance from head to slow is the same
 * as the distance from fast to cycle-head.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedListClass_1 = require("../DataStructures/LinkedListClass");
const detectCycle = (head) => {
    if (!head)
        return null;
    let slow = head;
    let fast = head;
    let isCycle = false;
    while (fast) {
        slow = slow.next;
        if (!fast.next)
            return null;
        fast = fast.next.next;
        if (slow === fast) {
            isCycle = true;
            break;
        }
    }
    if (!isCycle)
        return null;
    slow = head;
    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }
    return slow;
};
exports.default = () => {
    const n = new LinkedListClass_1.ListNode(3);
    n.next = new LinkedListClass_1.ListNode(2);
    n.next.next = new LinkedListClass_1.ListNode(0);
    n.next.next.next = new LinkedListClass_1.ListNode(-4);
    n.next.next.next.next = n.next;
    const m = new LinkedListClass_1.ListNode(1);
    m.next = new LinkedListClass_1.ListNode(2);
    m.next.next = m;
    console.log(detectCycle(n));
};
