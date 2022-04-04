/**
 * 780. Insert into a Sorted Circular Linked List
    
    val = 5

    p   
    3 > 4 > 6
    ^       v
    ---------

    1. If it's the greatest or smallest val in the list, it should be inserted
      at the same position (start/end of sort).
    2. if it's a number between two nodes, it should be sorted between them.
    3. For every iteration check for both of these things.

 */

import { ListNode } from '../DataStructures/LinkedListClass';

type Node = ListNode<number> | null;

const insert = (head: Node, insertVal: number): Node => {
  const node = new ListNode(insertVal);

  if (!head) {
    node.next = node;
    return node;
  }

  if (!head.next) {
    head.next = node;
    node.next = head;
    return head;
  }

  let curr = head;

  while (curr) {
    let next = curr.next;

    if (
      // If insertVal sits between nodes
      curr.val <= node.val && node.val <= next.val ||
      // If insertsVal sits beyond min/max
      curr.val <= node.val && node.val >= next.val && curr.val > next.val ||
      curr.val >= node.val && node.val <= next.val && curr.val > next.val ||
      // If all values are the same
      next === head
    ) {
      curr.next = node;
      node.next = next;
      break;
    }
    curr = curr.next;
  }

  return head;
}

export default () => {
  let n = new ListNode(3);
  n.next = new ListNode(3);
  n.next.next = new ListNode(5);
  n.next.next.next = n;

  console.log(insert(n, 4));
};
