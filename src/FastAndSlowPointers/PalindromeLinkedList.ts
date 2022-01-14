/**
 * Grokking the Coding Interview
*/

import { PrintArray } from "../utils/Utilities";
import { ListNode, PrintList } from '../DataStructures/LinkedListClass';

type Node = ListNode<number> | null;

const is_palindromic_linked_list = (head: Node): boolean => {
    if (!head.next) return true;
    let s: Node = head;
    let f: Node = head;
    let q: Node = null
    let r: Node = null

    while (f && f.next) {
        r = q;
        q = s;
        s = s.next;
        f = f.next;
        if (f) f = f.next;

        if (q) q.next = r;
    }

    if (f) s = s.next;

    while (s || q) {
        if (s.val !== q.val) return false;
        s = s.next;
        q = q.next;
    }

    return true;
}

export default () => {
    let head = new ListNode(2)
    head.next = new ListNode(4)
    head.next.next = new ListNode(6)
    head.next.next.next = new ListNode(4)
    head.next.next.next.next = new ListNode(2)
    head.next.next.next.next.next = new ListNode(2)

    PrintList(head);
    console.log(is_palindromic_linked_list(head))
};

// ODD
//               r    q    s         f
// null  null<- [2 <- 4    6 -> 4 -> 2];

// EVEN
//                    r    q    s             f
// null  null<- [2 <- 4 <- 6    4 -> 2 -> 2];


// A. Reverse half of linked list
    
    // r = q
    // q = s
    // s = s.next
    // f = f.next
    // if (f) f = f.next
    // q.next = r;

// B. if (!f), then list is even, else list is odd
// C. if (!f), 