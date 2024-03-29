/**
 *  19. Remove Nth Node From End Of List
 */
import {
    ListNode,
    LinkedList,
    PrintList
} from '../DataStructures/LinkedListClass';

type Node = ListNode<number> | null;
const removeNthFromEndA = (head: Node, n: number): Node => {
    if (!head) return head;

    let dummy = new ListNode(0);
    dummy.next = head;
    let p = dummy;
    let q = dummy;

    while (n) {
        p = p.next;
        n--;
    }
    while (p && p.next) {
        p = p.next;
        q = q.next;
    }
    q.next = q.next.next;

    return dummy.next;
};

const removeNthFromEndB = (head: Node, n: number): Node => {
    let dummy: Node = new ListNode(0);
    dummy.next = head;

    let p: Node = null;
    let s: Node = dummy;
    let f: Node = dummy;

    while (n) {
        f = f.next;
        n--;
    }

    while (f) {
        p = s;
        s = s.next;
        f = f.next;
    }
    
    p.next = s.next;
    
    return dummy.next;
}

/*
    n = 2

                q       p                   
    D > 1 > 2 > 3 > 4 > 5
*/
const removeNthFromEnd = (head: Node, n: number): Node => {
  let dummy = new ListNode(0);
  dummy.next = head;

  let p = dummy;
  let q = dummy;
  
  while (n) {
    p = p.next;
    n--;
  }

  while (p && p.next) {
    p = p.next;
    q = q.next;
  }

  q.next = q.next.next;

  return dummy.next;
}

export default () => {
    const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const list = new LinkedList(nums);
    const N = 10;
    PrintList(list.head);
    PrintList(removeNthFromEnd(list.head, N));
};
