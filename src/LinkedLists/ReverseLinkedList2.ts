/**
 * 92. Reverse Linked List 2
 * 
 * 
 * p  s                
 * d > 1 > 2
 */
import { start } from 'repl';
import { ListNode,LinkedList,PrintList } from '../DataStructures/LinkedListClass';

type Node = ListNode<number> | null;
const reverseBetween = (head: Node, left:number, right:number): Node => {
  if (!head || !head.next) return head;
  let dummy = new ListNode(0);
  dummy.next = head;

  let prev = null;
  let startOfEnd = head;

  while (right) {
    right--;
    prev = startOfEnd;
    startOfEnd = startOfEnd.next;
  }

  prev.next = null;
  prev = null;

  let startOfBetween = dummy;
  while (left) {
    left--;
    prev = startOfBetween;
    startOfBetween = startOfBetween.next;
  }
  
  prev.next = null;
  
  let p = startOfBetween;
  let q = null;
  let r = null;

  while (p) {
    r = q;
    q = p;
    p = p.next;
    q.next = r;
  }
  
  prev.next = q;
  startOfBetween.next = startOfEnd;

  return dummy.next;
}

export default () => {
    let nums = [1, 2, 3, 4, 5];
    let list = new LinkedList(nums);
    PrintList(reverseBetween(list.head, 1, 3));
};
