/**
 * Grokking the Coding Interview
*/

import { PrintArray } from "../utils/Utilities";
import { ListNode, PrintList } from '../DataStructures/LinkedListClass';

type Node = ListNode<number> | null;

const rearrangeLinkedList = (head: Node): Node => {
    let s: Node = head;
    let f: Node = head;
    let q: Node = null
    let r: Node = null

    // Find midpoint
    while (f && f.next) {
        r = q;
        q = s;
        s = s.next;
        f = f.next;
        if (f) f = f.next;
    }

    // If f is odd, then iterate one more time
    if (f) {
        r = q;
        q = s;
        s = s.next;
    }
    
    // Detach first half
    q.next = null;
    q = null;
    r = null;

    // Reverse the second half
    while (s) {
        r = q;
        q = s;
        s = s.next;
        q.next = r;
    }

    s = head;
    while (s && q) {
        let st = s.next;
        let qt = q.next;

        s.next = q;
        q.next = st;
        q = qt;

        s = s.next;
    }

    return head;
}

export default () => {
    let t1 = new ListNode(2)
    t1.next = new ListNode(4)
    t1.next.next = new ListNode(6)
    t1.next.next.next = new ListNode(8)
    t1.next.next.next.next = new ListNode(10)
    t1.next.next.next.next.next = new ListNode(12)

    PrintList(t1);
    PrintList(rearrangeLinkedList(t1))

    let t2 = new ListNode(2)
    t2.next = new ListNode(4)
    t2.next.next = new ListNode(6)
    t2.next.next.next = new ListNode(8)
    t2.next.next.next.next = new ListNode(10)

    PrintList(t2);
    PrintList(rearrangeLinkedList(t2))
};
