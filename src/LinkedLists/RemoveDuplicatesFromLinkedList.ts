/**
 * 328. Odd Even Linked List
 */

import { ListNode } from '../DataStructures/LinkedListClass';
import { PrintList } from '../DataStructures/LinkedListClass';

type Node = ListNode<number> | null;

type LinkedList = Node;
const removeDuplicates = (head: LinkedList): LinkedList => {
    let n: LinkedList = head;

    while (n) {
        while (n && n.next && n.value === n.next.value) {
            n.next = n.next.next;
        }
        n = n.next;
    }
    return head;
};

export default () => {
    const n = new ListNode(1);
    n.next = new ListNode(1);
    n.next.next = new ListNode(3);
    n.next.next.next = new ListNode(4);
    n.next.next.next.next = new ListNode(4);
    n.next.next.next.next.next = new ListNode(4);
    n.next.next.next.next.next.next = new ListNode(5);
    n.next.next.next.next.next.next.next = new ListNode(6);
    n.next.next.next.next.next.next.next.next = new ListNode(6);
    PrintList(removeDuplicates(n));
};
