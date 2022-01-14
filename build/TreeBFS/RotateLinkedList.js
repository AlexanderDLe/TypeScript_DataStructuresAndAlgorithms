"use strict";
/**
 * Grokking the Coding Interview
 *
 * We want to rotate until the head is at the kth (k % len) position.
 * However, setting the kth element as head will make the head at (len - k) position.
 *
 *    k = 3 rotations
 *
 *    1 -> 2 -> 3 -> 4 -> 5
 *    h              k
 *
 *    4 -> 5 -> 1 -> 2 -> 3
 *
 * INCORRECT: Because the head is at 2 rotations instead of 3.
 *
 ****************************************************************
 *
 *    1 -> 2 -> | 3 -> 4 -> 5|
 *    h         | k elements |
 *
 * Instead, the way to correctly think about it is we want the last k elements BEFORE head.
 *
 *
 ****************************************************************
 *
 *    | 3 -> 4 -> 5| -> 1 -> 2
 *    | k elements |    h
 *
 * Instead, the way to correctly think about it is we want the last k elements BEFORE head.
 *
 * That is why len - k is closer.
 * However, sometimes, k can be greater than length.
 *
 * Therefore, we use rotations = k % len.*
 *
 * len - rotations.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedListClass_1 = require("../DataStructures/LinkedListClass");
const rotateLinkedList = (head, rotations) => {
    let dummy = new LinkedListClass_1.ListNode(0);
    dummy.next = head;
    let len = 0;
    let p = head;
    let q = null;
    let end = null;
    // Get length of the list. Once end is reached, set end pointer there
    while (p) {
        len++;
        if (!p.next)
            end = p;
        p = p.next;
    }
    let actualRotations = rotations % len;
    len = len - actualRotations;
    p = head;
    if (!len)
        return dummy.next;
    while (len) {
        len--;
        q = p;
        p = p.next;
    }
    // q is now the last node
    q.next = null;
    // the end of the list now links to start
    end.next = head;
    // The start of the list is now p
    dummy.next = p;
    return dummy.next;
};
exports.default = () => {
    let list1 = new LinkedListClass_1.LinkedList([1, 2, 3, 4, 5, 6]);
    let k1 = 3;
    let list2 = new LinkedListClass_1.LinkedList([1, 2, 3, 4, 5]);
    let k2 = 8;
    list1.print();
    (0, LinkedListClass_1.PrintList)(rotateLinkedList(list1.head, k1));
    list2.print();
    (0, LinkedListClass_1.PrintList)(rotateLinkedList(list2.head, k2));
};
