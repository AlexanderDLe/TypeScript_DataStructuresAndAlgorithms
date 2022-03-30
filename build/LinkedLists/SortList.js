"use strict";
/**
 * 148. Sort List
 *
 * Split list in half, sort each half using custom merge algorithm, then merge together.
 *
 * 4 > 2 > 1 > 3
 *
 * 4 > 2    1 > 3
 *
 * 4   2    1   3
 *
 * 2 > 4    1 > 3
 *
 * 1 > 2 > 3 > 4
 */
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedListClass_1 = require("../DataStructures/LinkedListClass");
const sortListA = (head) => {
    const merge = (L, R) => {
        let dummy = new LinkedListClass_1.ListNode(0);
        let p = dummy;
        while (L && R) {
            if (L.val <= R.val) {
                p.next = L;
                L = L.next;
            }
            else {
                p.next = R;
                R = R.next;
            }
            p = p.next;
        }
        if (!R)
            p.next = L;
        else if (!L)
            p.next = R;
        return dummy.next;
    };
    const split = (n) => {
        if (!n || !n.next)
            return n;
        let temp = n;
        let slow = n;
        let fast = n;
        while (fast && fast.next) {
            temp = slow;
            fast = fast.next.next;
            slow = slow.next;
        }
        temp.next = null;
        let L = split(n);
        let R = split(slow);
        return merge(L, R);
    };
    return split(head);
};
const sortListB = (head) => {
    if (!head || !head.next)
        return head;
    const merge = (l1, l2) => {
        let l = new LinkedListClass_1.ListNode(0);
        let p = l;
        while (l1 && l2) {
            if (l1.val < l2.val) {
                p.next = l1;
                l1 = l1.next;
            }
            else {
                p.next = l2;
                l2 = l2.next;
            }
            p = p.next;
        }
        if (l1)
            p.next = l1;
        if (l2)
            p.next = l2;
        return l.next;
    };
    // 1. Cut the list to two halves
    let prev = null;
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    prev.next = null;
    // 2. Sort each half
    let l1 = sortList(head);
    let l2 = sortList(slow);
    // 3. merge l1 and l2
    return merge(l1, l2);
};
const sortListC = (head) => {
    if (!head || !head.next)
        return head;
    const merge = (l1, l2) => {
        if (!l1)
            return l2;
        if (!l2)
            return l1;
        let temp = new LinkedListClass_1.ListNode(0);
        let p = temp;
        while (l1 && l2) {
            if (l1.val < l2.val) {
                p.next = l1;
                l1 = l1.next;
            }
            else {
                p.next = l2;
                l2 = l2.next;
            }
            p = p.next;
        }
        if (l1)
            p.next = l1;
        if (l2)
            p.next = l2;
        return temp.next;
    };
    // First, cut in half.
    let p = null;
    let s = head;
    let f = head;
    while (f) {
        p = s;
        s = s.next;
        f = f.next;
        if (f)
            f = f.next;
    }
    p.next = null;
    // Recursively cut in half
    let l1 = sortList(head);
    let l2 = sortList(s);
    // Recursively merge and return sublists.
    return merge(l1, l2);
};
const sortList = (head) => {
    const merge = (l1, l2) => {
        let dummy = new LinkedListClass_1.ListNode(0);
        let n = dummy;
        while (l1 && l2) {
            if (l1.val < l2.val) {
                n.next = l1;
                l1 = l1.next;
            }
            else {
                n.next = l2;
                l2 = l2.next;
            }
            n = n.next;
        }
        (0, LinkedListClass_1.PrintList)(dummy);
        if (!l1)
            n.next = l2;
        if (!l2)
            n.next = l1;
        return dummy.next;
    };
    const sort = (n) => {
        if (!n || !n.next)
            return n;
        let s = n;
        let f = n;
        let p = null;
        while (f && f.next) {
            p = s;
            s = s.next;
            f = f.next;
            if (f)
                f = f.next;
        }
        if (p)
            p.next = null;
        let l1 = sort(n);
        let l2 = sort(s);
        return merge(l1, l2);
    };
    return sort(head);
};
exports.default = () => {
    const nums = [4, 2, 1, 3];
    const list = new LinkedListClass_1.LinkedList(nums);
    (0, LinkedListClass_1.PrintList)(list.head);
    (0, LinkedListClass_1.PrintList)(sortList(list.head));
};
