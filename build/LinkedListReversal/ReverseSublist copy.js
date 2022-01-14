"use strict";
/**
 * Grokking the Coding Interview
 *
 *         p              q
 *  dum -> 1 -> 2 -> 3 -> 4 -> 5*
 *    n    m                       Found p, detach from n.
 *   c1 reverseStart               Assign n to c1. To detach, c1.next = null;
 *                                 Assign m to reverseStart.
 *
**********************************************************************************
 *         p              q
 *  dum    1 -> 2 -> 3 -> 4    5
 *  c1     o         n    m        Found q, detach from next. Iterate one more time.
 *     reverseStart       n    m   Detach from n. n.next = null.
 *                             c2  Assign m to c2.
 *
**********************************************************************************
 *         p              q
 *  dum    1 -> 2 -> 3 -> 4    5   Now, reverse the sublist starting at reverseStart.
 *   c1 reverseStart      n    c2
 *
**********************************************************************************
 *         p              q
 *  dum    4 -> 3 -> 2 -> 1    5   Complete sublist reversal.
 *   c1    n                  c2     reverseStart is now null.
 *
**********************************************************************************
 *         p              q
 *  dum -> 4 -> 3 -> 2 -> 1 -> 5   Connect c1 to n. Connect reverseStart to c2.
 *   c1    n      reverseStart c2
 *
**********************************************************************************
 *
 *  return dum.next.
*/
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedListClass_1 = require("../DataStructures/LinkedListClass");
const reverseSublist = (head, p, q) => {
    let dummy = new LinkedListClass_1.ListNode(0);
    dummy.next = head;
    // Travelers
    let m = dummy;
    let n = null;
    let o = null;
    // Placements
    let reverseStart = null;
    let reverseEnd = null;
    let c1 = null;
    let c2 = null;
    // Start at the dummy. Iterate forward.
    let i = 0;
    while (i < q) {
        i++;
        n = m;
        m = m.next;
        // If iterator meets p, then set initial pointers.
        if (i === p) {
            c1 = n;
            c1.next = null;
            reverseStart = m;
            reverseEnd = m;
        }
        // If iterator meets q, then set ending pointers.
        if (i === q) {
            n = m;
            m = m.next;
            c2 = m;
            n.next = null;
            break;
        }
    }
    // Start reversal at reverseStart
    n = null;
    o = null;
    while (reverseStart) {
        o = n;
        n = reverseStart;
        reverseStart = reverseStart.next;
        n.next = o;
    }
    c1.next = n;
    reverseEnd.next = c2;
    return dummy.next;
};
exports.default = () => {
    let list = new LinkedListClass_1.LinkedList([1, 2, 3, 4, 5]);
    let p = 1, q = 4;
    list.print();
    (0, LinkedListClass_1.PrintList)(reverseSublist(list.head, p, q));
};
