/**
 * Grokking the Coding Interview
*/

import { PrintArray } from "../utils/Utilities";
import { ListNode, PrintList } from '../DataStructures/LinkedListClass';

type Node = ListNode<number> | null;

const startOfLinkedListCycle = (head: Node): Node => {
    let s = head;
    let f = head;

    // First cycle meeting
    while (f) {
        s = s.next;
        f = f.next.next;
        if (s === f) break;
    }

    // Determine cycle length
    let cycleLength = 0;
    while (true) {
        s = s.next;
        f = f.next.next;
        cycleLength++;

        if (s === f) break;
    }
    console.log(cycleLength)
    s = head;
    f = head;

    // Iterate fast pointer forward by length value
    while (cycleLength > 0) {
        f = f.next;
        cycleLength--;
    }

    // Iterate both pointers until meeting at cycle start
    while(s !== f) {
        s = s.next;
        f = f.next;
    }

    return s;
}

export default () => {
    let head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    head.next.next.next = new ListNode(4);
    head.next.next.next.next = new ListNode(5);
    head.next.next.next.next.next = new ListNode(6);
    PrintList(head);

    head.next.next.next.next.next.next = head.next.next
    console.log(`LinkedList Cycle Start: ${startOfLinkedListCycle(head).val}`)

    head.next.next.next.next.next.next = head.next.next.next
    console.log(`LinkedList Cycle Start: ${startOfLinkedListCycle(head).val}`)

    head.next.next.next.next.next.next = head;
    console.log(`LinkedList Cycle Start: ${startOfLinkedListCycle(head).val}`)
};