"use strict";
/**
 * Grokking the Coding Interview
*/
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedListClass_1 = require("../DataStructures/LinkedListClass");
const is_palindromic_linked_list = (head) => {
    if (!head.next)
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
    if (f)
        s = s.next;
    while (s || q) {
        if (s.val !== q.val)
            return false;
        s = s.next;
        q = q.next;
    }
    return true;
};
exports.default = () => {
    let head = new LinkedListClass_1.ListNode(2);
    head.next = new LinkedListClass_1.ListNode(4);
    head.next.next = new LinkedListClass_1.ListNode(6);
    head.next.next.next = new LinkedListClass_1.ListNode(4);
    head.next.next.next.next = new LinkedListClass_1.ListNode(2);
    head.next.next.next.next.next = new LinkedListClass_1.ListNode(2);
    (0, LinkedListClass_1.PrintList)(head);
    console.log(is_palindromic_linked_list(head));
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
