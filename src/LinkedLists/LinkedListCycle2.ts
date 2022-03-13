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

import { ListNode } from '../DataStructures/LinkedListClass';

type Node = ListNode<number> | null;

const detectCycleA = (head: Node): Node => {
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


/*

          sf              
  1 > 2 > 3 > 4 > 5
          ^       v
            <   <

*/
const detectCycle = (head: Node): Node => {
  let s = head;
  let f = head;

  while (f) {
    s = s.next;
    f = f.next;

    if (f) f = f.next;
    if (s === f) break;
  }
  if (!f) return null;

  let len = 0;
  while (f) {
    s = s.next;
    f = f.next.next;
    len++;
    if (s === f) break;
  }

  s = head;
  while (s !== f) {
    s = s.next;
    f = f.next;
  }
  
  return s;
}

export default () => {
    const n = new ListNode(3);
    n.next = new ListNode(2);
    n.next.next = new ListNode(0);
    n.next.next.next = new ListNode(-4);
    n.next.next.next.next = n.next;

    const m = new ListNode(1);
    m.next = new ListNode(2);
    m.next.next = m;

    console.log(detectCycle(n).value);
};
