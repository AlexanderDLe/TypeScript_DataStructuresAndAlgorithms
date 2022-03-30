/**
 * 234. Palindrome Linked List
 * 
 * 
 * Odd List: s will be at middle
 * q will be behind. Iterate s before comparing palindrome.
 * 
 * After inital loop: if (f) then s = s.next
 * 
 *     q  s     f
 * [1, 4, 2, 4, 1]
 * 
 * 
 * Even List: s will be one past middle
 * q will be behind. Start comparing palindrome.
 * 
 *        q  s        f
 * [1, 4, 2, 2, 4, 1]
 * 
 * 
 * 

 */
import {
    ListNode,
    LinkedList,
    PrintList
} from '../DataStructures/LinkedListClass';

type Node = ListNode<number> | null;

const isPalindromeB = (head: Node): boolean => {
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

const isPalindromeA = (head: Node): boolean => {
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

const isPalindromeC = (head: Node): boolean => {
    if (!head) return true;

    let s: Node = head;
    let f: Node = head;
    let q: Node = null;
    let r: Node = null;

    while (f && f.next) {
        r = q;
        q = s;
        s = s.next;
        f = f.next;
        if (f) f = f.next;
        
    }
    if (q && q.next) {
        q.next = null;
        q = null;
    }

    while (s) {
        r = q;
        q = s;
        s = s.next;
        q.next = r;
    }
    
    let n = head;

    while (n && q) {
        if (n.val !== q.val) return false;
        n = n.next;
        q = q.next;
    }

    return true;
}

const isPalindrome = (head: Node): boolean => {
  // Use slow and fast pointers until you find midpoint
  // reverse list until you find midpoint
  
  // When you get to the middle, there will be two distinct scenarios:
  // 1. (!f) = list is even
  // 2. (f) = list is odd

  // if (!f), then begin iterating/comparing
  // if (f), then iterate s forward first, then iterate/compare

  // Edge Case: Only one node? Then return true.
  if (!head.next) return true;
  let s = head;
  let f = head;

  let q = null;
  let r = null;

  while (f && f.next) {
    r = q;
    q = s;
    s = s.next;
    f = f.next;
    q.next = r;
    
    if (f) f = f.next;
  }
  
  if (f) s = s.next;

  while (s) {
    if (s.val !== q.val) return false;
    q = q.next;
    s = s.next;
  }

  return true;
}

export default () => {
    const nums = [1, 4, 4, 1];
    
    const list = new LinkedList(nums);
    console.log(isPalindrome(list.head));
};
