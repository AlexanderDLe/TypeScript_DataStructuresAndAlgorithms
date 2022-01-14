/**
 * Grokking the Coding Interview
*/

import { PrintArray } from "../utils/Utilities";
import { ListNode, PrintList } from '../DataStructures/LinkedListClass';

type Node = ListNode<number> | null;

const LinkedListCycle = (head: Node): boolean => {
    let s: Node = head;
    let f: Node = head;

    while (f) {
        s = s.next;
        f = f.next;
        if (f) f = f.next;

        if (s === f) return true;
    }

    return false;
}

export default () => {
    let head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    head.next.next.next = new ListNode(4);
    head.next.next.next.next = new ListNode(5);
    head.next.next.next.next.next = new ListNode(6);
    PrintList(head);

    console.log(`LinkedList has cycle: ${LinkedListCycle(head)}`)

    head.next.next.next.next.next.next = head.next.next
    console.log(`LinkedList has cycle: ${LinkedListCycle(head)}`)

    head.next.next.next.next.next.next = head.next.next.next
    console.log(`LinkedList has cycle: ${LinkedListCycle(head)}`)
};