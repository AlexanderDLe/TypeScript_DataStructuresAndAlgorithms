"use strict";
/**
 * 61. Rotate List
 *
 *
 * k = 2
 *
 *                      end
 *  D > 1 > 2 > 3 > 4 > 5
 *
 *              r   q       p
 *  D > 1 > 2 > 3   4 > 5
 *
 *  D > 4 > 5 > 1 > 2 > 3
 *
 *  Basically, put k last nodes in front.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedListClass_1 = require("../DataStructures/LinkedListClass");
const rotateRight = (head, k) => {
    let dummy = new LinkedListClass_1.ListNode(0);
    dummy.next = head;
    let len = 0;
    let end = dummy;
    while (end && end.next) {
        len++;
        end = end.next;
    }
    k = k % len;
    if (!k)
        return head;
    let p = dummy;
    let q = dummy;
    let r = null;
    while (k) {
        p = p.next;
        k--;
    }
    while (p) {
        r = q;
        q = q.next;
        p = p.next;
    }
    r.next = null;
    end.next = head;
    return q;
};
exports.default = () => {
    let nums = [1, 2, 3, 4, 5];
    let list = new LinkedListClass_1.LinkedList(nums);
    (0, LinkedListClass_1.PrintList)(rotateRight(list.head, 5));
};
