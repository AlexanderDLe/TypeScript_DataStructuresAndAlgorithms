/**
 */
import { ListNode } from '../DataStructures/LinkedListClass';

type Node = ListNode<number> | null;

const hasCycle = (head: Node): Node => {
    let s: Node = head.next!;
    let f: Node = head.next!.next!;

    while (s !== f) {
        s = s.next!;
        f = f.next!.next!;
    }

    let len = 1;
    s = s.next!;
    f = f.next!.next!;

    while (s !== f) {
        len++;
        s = s.next!;
        f = f.next!.next!;
    }

    s = head;
    f = head;

    while (len) {
        f = f.next!;
        len--;
    }

    while (s !== f) {
        s = s.next!;
        f = f.next!;
    }
    
    return s;
}

export default () => {
    let n = new ListNode(0);
    n.next = new ListNode(1);
    n.next.next = new ListNode(2);
    n.next.next.next = new ListNode(3);
    n.next.next.next.next = new ListNode(4);
    
    n.next.next.next.next.next = new ListNode(5);
    n.next.next.next.next.next.next = new ListNode(6);
    n.next.next.next.next.next.next.next = new ListNode(7);
    n.next.next.next.next.next.next.next.next = new ListNode(8);
    n.next.next.next.next.next.next.next.next.next = new ListNode(9);
    
    let startCycle = n.next.next.next.next;
    let endCycle = n.next.next.next.next.next.next.next.next.next;
    endCycle.next = startCycle;

    // console.log(endCycle);
    console.log(hasCycle(n));
};
