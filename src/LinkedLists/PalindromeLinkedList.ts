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
    
    let s = head;
    let f = head;
    let q: Node = null;
    let r: Node = null;

    while (f && f.next) {
        r = q;
        q = s;
        s = s.next;
        f = f.next;
        if (f) f = f.next;
        if (q) q.next = r;
    }
    
    if (f && !f.next) {
        s = s.next;
    }

    while (q && s) {
        if (q.val !== s.val) {
            return false;
        }
        q = q.next;
        s = s.next;
    }
    return true;
}

const isPalindromeOld = (head: Node): boolean => {
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

    PrintList(s);
    PrintList(f);
    while (s && f) {
        if (s.val !== f.val) return false;
        s = s.next;
        f = f.next;
    }

    return true;
};

export default () => {
    const nums = [1,4,-1,4,1]
;
    const list = new LinkedList(nums);
    console.log(isPalindrome(list.head));
};
