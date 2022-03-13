/**
 * 25. Reverse Node in K-Group
 * 
 *   n  end
 * dum > 1 > 2 > 3 > 4 > 5 > 6
 * rqp
 * 
 * i = 0
 * 
 *******************************

 *        >  >   >   >
 *   n  end          V
 * dum   1 < 2 < 3   4 > 5 
 *  V        r   q   p
 *  >   >   >  > ^
 * 
 * dum > 3 > 2 > 1 > 4 > 5 
 * 
 ****************************** 

 *   n  end
 * dum < 1 < 2
 *       r   q   p 
 * 
 * 
 ****************************** 
 */
import { start } from 'repl';
import { ListNode,LinkedList,PrintList } from '../DataStructures/LinkedListClass';

type Node = ListNode<number> | null;
const reverseBetween = (head: Node, k:number): Node => {
  let dummy = new ListNode(0);
  dummy.next = head;
  let node = dummy;

  const scanForKNodes = (n:Node): boolean => {
    let i = 0;
    while (i < k && n) {
      n = n.next;
      i++;
    }
    
    if (n) return true;
    return false;
  }

  const reverseNextKNodes = (n:Node): Node => {
    let p = n;
    let q = null;
    let r = null;
    let end = n.next;

    let i = 0;
    while (p && i <= k) {
      r = q;
      q = p;
      p = p.next;
      q.next = r;
      i++;
    }
    n.next = q;
    end.next = p;
    return end;
  }

  while (node && node.next) {
    if (!scanForKNodes(node)) break;
    node = reverseNextKNodes(node);
  }

  return dummy.next;
}

export default () => {
  let list1 = new LinkedList([1, 2, 3, 4, 5]);
  let list2 = new LinkedList([1, 2, 3, 4, 5]);
  PrintList(reverseBetween(list1.head, 2));
  PrintList(reverseBetween(list2.head, 3));
};
