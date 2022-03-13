/**
 * 328. Odd Even Linked List
 */

import { ListNode } from '../DataStructures/LinkedListClass';
import { PrintList } from '../DataStructures/LinkedListClass';

type Node = ListNode<number> | null;

const oddEvenListA = (head: Node): Node => {
    if (!head) return head;

    let d1: Node = new ListNode(0);
    let d2: Node = new ListNode(0);

    let p: Node = head;
    let q: Node = head.next;
    let r: Node = d1;
    let t: Node = d2;

    while (p && q) {
        r.next = p;
        t.next = q;

        r = p;
        t = q;

        if (q) p = q.next;
        if (p) q = p.next;
    }
    if (p) {
        r.next = p;
        r = r.next;
    }
    t.next = null;
    r.next = d2.next;
    return d1.next;
};

/*
                               h 
   1 > 2 > 3 > 4 > 5 > 6 > 7

                p    o
  odds > 1 > 3 > 5 > 7
                 e
  even > 2 > 4 > 6
*/
const oddEvenList = (head: Node): Node => {
  let odds = new ListNode(0);
  let even = new ListNode(0);

  let o = odds;
  let e = even;

  while (head) {
    o.next = head;
    o = o.next;
    head = head.next;

    if (!head) break;

    e.next = head;
    e = e.next;
    head = head.next;
  }
  
  e.next = null;
  o.next = even.next;
  return odds.next;
}

export default () => {
    const n = new ListNode(1);
    n.next = new ListNode(2);
    n.next.next = new ListNode(3);
    n.next.next.next = new ListNode(4);
    n.next.next.next.next = new ListNode(5);
    n.next.next.next.next.next = new ListNode(6);
    n.next.next.next.next.next.next = new ListNode(7);
    PrintList(oddEvenList(n));
};
