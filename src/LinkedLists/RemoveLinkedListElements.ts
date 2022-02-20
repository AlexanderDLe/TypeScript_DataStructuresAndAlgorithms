/**
 * 328. Odd Even Linked List
 * 
 * dum > 1 > 2 > 3 > 4 > 5 > 6 > null
 *                       n
 *  
 * dum > 7 > null
 */

import { ListNode, LinkedList } from '../DataStructures/LinkedListClass';
import { PrintList } from '../DataStructures/LinkedListClass';

type Node = ListNode<number> | null;

const removeElements = (head: Node, val: number): Node => {
  let dummy = new ListNode(0);
  dummy.next = head;

  let p = dummy;

  while (p && p.next) {
    while (p.next && p.next.val === val) {
      p.next = p.next.next;
    }

    p = p.next;
  }

  return dummy.next;
};

export default () => {
  let n = new LinkedList([7, 7, 7])
  PrintList(removeElements(n.head, 7));
};
