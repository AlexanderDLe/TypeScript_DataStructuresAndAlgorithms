/**
 * 203. Remove Linked List Elements
 * 
 * dum > 1 > 2 > 6 > 6 > 6 > 3 > 4 > 5 > 6
 *           p
 *  
 * When next element is one to remove, you can it using a while loop.
 * 
 * While (next element is to be removed), remove next element.
 * 
 * The while loop is necessary in case of adjacent removals.
 * 
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
