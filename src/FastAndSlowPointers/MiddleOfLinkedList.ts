/**
 * Grokking the Coding Interview
*/

import { PrintArray } from "../utils/Utilities";
import { ListNode, PrintList } from '../DataStructures/LinkedListClass';

type Node = ListNode<number> | null;

const findMiddleOfLinkedList = (head: Node): Node => {
    let s = head;
    let f = head;

    while (f && f.next) {
        s = s.next;
        f = f.next;
        if (f) f = f.next;
    }

    return s;
}

export default () => {
    let head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    head.next.next.next = new ListNode(4);
    head.next.next.next.next = new ListNode(5);
    
    PrintList(head);
    console.log(findMiddleOfLinkedList(head).val)
    
    head.next.next.next.next.next = new ListNode(6);
    PrintList(head);
    console.log(findMiddleOfLinkedList(head).val)
    
    head.next.next.next.next.next.next = new ListNode(7);
    PrintList(head);
    console.log(findMiddleOfLinkedList(head).val)
};