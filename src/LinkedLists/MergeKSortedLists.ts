/**
 * 23. Merge K Sorted Lists
 *
 */
import { MinPriorityQueue } from '@datastructures-js/priority-queue';
import { ListNode,LinkedList,PrintList } from '../DataStructures/LinkedListClass';

type Node = ListNode<number> | null;
const mergeLists = (lists: Node[]): Node => {
  if (!lists.length) return null;
  let heap = new MinPriorityQueue({priority: (x:Node) => x.val});
  for (let head of lists) if (head) heap.enqueue(head);

  let dummy = new ListNode(0);
  let curr = dummy;

  while (heap.size()) {
    let n = heap.dequeue().element;
    curr.next = n;
    curr = curr.next;
    n = n.next;
    if (n) heap.enqueue(n);
  }

  return dummy.next;
}

export default () => {
  let list1 = new LinkedList([1, 4, 5]);
  let list2 = new LinkedList([1, 3, 4]);
  let list3 = new LinkedList([2, 6]);
  PrintList(mergeLists([list1.head, list2.head, list3.head]));
  PrintList(mergeLists([null]));
};
