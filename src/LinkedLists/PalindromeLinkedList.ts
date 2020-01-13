/**
 * 234. Palindrome Linked List
 */
import {
    ListNode,
    LinkedList,
    PrintList
} from '../DataStructures/LinkedListClass';

type Node = ListNode<number> | null;

const isPalindrome = (head: Node): boolean => {
    if (!head || !head.next) return true;

    let s: Node = head; // Slow
    let f: Node = head; // Fast
    let q: Node = null; // Follow s
    let r: Node = null; // Follow q

    // Find midpoint.
    while (f.next) {
        r = q;
        q = s;
        s = s.next;
        f = f.next;
        if (f.next) f = f.next;
    }
    q.next = null;
    // s = midpoint. Reverse from midpoint.
    while (s) {
        r = q;
        q = s;
        s = s.next;
        if (q) q.next = r;
    }
    s = head;

    while (s && f) {
        if (s.val !== f.val) return false;
        s = s.next;
        f = f.next;
    }

    return true;
};

export default () => {
    const nums = [1, 3, 2, 3, 1];
    const list = new LinkedList(nums);
    console.log(isPalindrome(list.head));
};
