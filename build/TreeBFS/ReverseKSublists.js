"use strict";
/**
 * Grokking the Coding Interview
 *
 * k = 3
 *
 *******************************************
 *
 * k = 3 | i = 0
 *
 * p
 * d -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8  Initialize dummy. c as in Connector
 * c    rS                                    rS as in reverseStart
 *
 *******************************************
 *
 * k = 3 | i = 1
 *
 * q    p
 * d -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8  Iterate triple pointers (r,q,p) forward.
 * c    rS                                    If (i % k === 1), then reconnect.
 *
 *******************************************
 *
 * k = 3 | i = 2
 *
 * r    q    p
 * d <- 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8  Iterate forward.
 * c    rS                                    i % k = 2
 *
 *******************************************
 *
 * k = 3 | i = 3
 *
 *      r    q    p
 * d <- 1 <- 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8  Iterate forward.
 * c    rS                                    i % k = 0
 *
 *******************************************
 *
 * k = 3 | i = 4
 *
 *           r    q    p
 * d <- 1 <- 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8  Iterate forward.
 * c    rS                                    i % k = 1, so reconnect.
 *
 * c.next = q       rS.next = p
 * c = rS           rS = p
 *
 *******************************************
 *
 * k = 3 | i = 4
 *                     p
 * d -> 3 -> 2 -> 1 -> 4 -> 5 -> 6 -> 7 -> 8  Reassign connector and reverseStart
 *                c    rS                     p and r = null
 *
 *******************************************
 *
 * k = 3 | i = 5
 *                     q    p
 * d -> 3 -> 2 -> 1 -> 4 -> 5 -> 6 -> 7 -> 8  Iterate forward.
 *                c    rS                     i % k = 2
 *
 *******************************************
 *
 * k = 3 | i = 6
 *                     r    q    p
 * d -> 3 -> 2 -> 1 <- 4 <- 5 -> 6 -> 7 -> 8  Iterate forward.
 *                c    rS                     i % k = 0
 *
 *******************************************
 *
 * k = 3 | i = 7
 *                          r    q    p
 * d -> 3 -> 2 -> 1 <- 4 <- 5 -> 6 -> 7 -> 8  Iterate forward.
 *                c    rS                     i % k = 1, so reconnect.
 *
 * c.next = q       rS.next = p
 * c = rS           rS = p
 *
 *******************************************
 *
 * k = 3 | i = 7
 *                                    p
 * d -> 3 -> 2 -> 1 -> 6 -> 5 -> 4 -> 7 -> 8  Reassign connector and reverseStart
 *                               c   rS       p and r = null
 *
 *******************************************
 *
 * k = 3 | i = 8
 *                                    q    p
 * d -> 3 -> 2 -> 1 -> 6 -> 5 -> 4 <- 7 -> 8  Iterate forward.
 *                               c   rS       i % k = 2
 *
 *******************************************
 *
 * k = 3 | i = 9
 *                                         q    p
 * d -> 3 -> 2 -> 1 -> 6 -> 5 -> 4 <- 7 -> 8  Iterate forward.
 *                               c   rS       !p, so reconnect
 *
 * c.next = q       rS.next = p
 * c = rS           rS = p
 *
 *******************************************
 *
 * k = 3 | i = 9
 *                                         q    p
 * d -> 3 -> 2 -> 1 -> 6 -> 5 -> 4 <- 8 -> c
 *
 *******************************************
 *
 * return d.next
 */
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedListClass_1 = require("../DataStructures/LinkedListClass");
const reverseSublist = (head, k) => {
    let dummy = new LinkedListClass_1.ListNode(0);
    dummy.next = head;
    let p = dummy;
    let q = null;
    let r = null;
    let prevConnector = dummy;
    let reverseStart = head;
    let i = 0;
    while (p) {
        i++;
        r = q;
        q = p;
        p = p.next;
        q.next = r;
        if ((i > 1 && i % k === 1) || !p) {
            prevConnector.next = q;
            prevConnector = reverseStart;
            reverseStart.next = p;
            reverseStart = p;
            q = null;
            r = null;
        }
        if (!p)
            break;
    }
    return dummy.next;
};
exports.default = () => {
    let list = new LinkedListClass_1.LinkedList([1, 2, 3, 4, 5, 6, 7, 8]);
    let k = 3;
    list.print();
    (0, LinkedListClass_1.PrintList)(reverseSublist(list.head, k));
};
