/**
   143. Reorder List
   
    1. Split the list in two. Requires while (f) NOT while(f && f.next)
   
    Even List
        p   s      f
    1 > 2 > 3 > 4
   
    Odd List
            p   s       f                   
    1 > 2 > 3 > 4 > 5
   
    2. Break link and reverse the 2nd half of the list. 
   
    Even List
            r   q   s       
    1 > 2   3 < 4
   
    Odd List
                r   q   s                           
    1 > 2 > 3   4 < 5
    
    3. Now list looks like this:

    Even List
    p       q          
    1 > 2   4 > 3

    Odd List
    p           q   
    1 > 2 > 3   5 > 4

    4. Alternate adding both nodes.

    Even List
    1 > 4 > 2 > 3

    Odd List
    1 > 5 > 2 > 4 > 3
*/

import { ListNode, LinkedList, PrintList } from '../DataStructures/LinkedListClass';

type Node = ListNode<number> | null;

const reorderList = (head: Node): Node => {
  if (!head || !head.next) return head;

  let p = null;
  let s = head;
  let f = head;

  while (f) {
    p = s;
    s = s.next;
    f = f.next?.next;
  }

  p.next = null;
  p = null;
  let r = null;

  while (s) {
    r = p;
    p = s;
    s = s.next;

    p.next = r;
  }

  s = head;

  let dummy = new ListNode(0);
  let curr = dummy;

  while (s || p) {
    if (s) {
      curr.next = s;
      s = s.next;
      curr = curr.next;
    }
    if (p) {
      curr.next = p;
      p = p.next;
      curr = curr.next;
    }
  }
  
  return dummy.next;
}

export default () => {
  const nums1 = [1, 2, 3, 4];
  const nums2 = [1, 2, 3, 4, 5];
  const list1 = new LinkedList(nums1);
  const list2 = new LinkedList(nums2);
  
  PrintList(reorderList(list1.head));
  PrintList(reorderList(list2.head));
};
