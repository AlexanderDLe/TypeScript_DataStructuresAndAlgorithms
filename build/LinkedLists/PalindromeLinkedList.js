"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 234. Palindrome Linked List
 */
const LinkedListClass_1 = require("../DataStructures/LinkedListClass");
const isPalindrome = (head) => {
    if (!head || !head.next)
        return true;
    let s = head;
    let f = head;
    let q = null;
    let r = null;
    while (f && f.next) {
        r = q;
        q = s;
        s = s.next;
        f = f.next;
        if (f)
            f = f.next;
        if (q)
            q.next = r;
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
};
const isPalindromeOld = (head) => {
    if (!head || !head.next)
        return true;
    let s = head; // Slow
    let f = head; // Fast
    let q = null; // Follow s
    let r = null; // Follow q
    // Find midpoint.
    while (f.next) {
        r = q;
        q = s;
        s = s.next;
        f = f.next;
        if (f.next)
            f = f.next;
    }
    q.next = null;
    // s = midpoint. Reverse from midpoint.
    while (s) {
        r = q;
        q = s;
        s = s.next;
        if (q)
            q.next = r;
    }
    s = head;
    LinkedListClass_1.PrintList(s);
    LinkedListClass_1.PrintList(f);
    while (s && f) {
        if (s.val !== f.val)
            return false;
        s = s.next;
        f = f.next;
    }
    return true;
};
exports.default = () => {
    const nums = [1, 4, -1, 4, 1];
    const list = new LinkedListClass_1.LinkedList(nums);
    console.log(isPalindrome(list.head));
};
