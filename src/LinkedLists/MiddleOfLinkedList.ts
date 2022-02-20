/**
 * 876. Middle of the Linked List
 */
import {
  ListNode,
  LinkedList,
  PrintList
} from '../DataStructures/LinkedListClass';

type Node = ListNode<number> | null;

const middleOfLinkedList = (head: Node): Node => {
  let s = head;
  let f = head;

  while (f && f.next) {
    s = s.next;
    f = f.next;
    if (f) f = f.next;
  }

  return s;
}

export default () => {
  const numsA = [1, 2, 3, 4, 5];
  const numsB = [1, 2, 3, 4, 5, 6];
  const listA = new LinkedList(numsA);
  const listB = new LinkedList(numsB);

  PrintList(listA.head);
  PrintList(listB.head);
  console.log(middleOfLinkedList(listA.head).val);
  console.log(middleOfLinkedList(listB.head).val);
};
