"use strict";
/**
 * Grokking the Coding Interview
*/
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedListClass_1 = require("../DataStructures/LinkedListClass");
const reverseAlternatingKElementSublist = (head, k) => {
    let dummy = new LinkedListClass_1.ListNode(0);
    dummy.next = head;
    let p = dummy;
    let q = null;
    let r = null;
    let prevConnector = dummy;
    let reverseStart = head;
    let reversing = true;
    let i = 0;
    while (p) {
        i++;
        r = q;
        q = p;
        p = p.next;
        if (reversing)
            q.next = r;
        if ((i > 1 && i % k === 1) || !p) {
            if (reversing) {
                prevConnector.next = q;
                prevConnector = reverseStart;
                reverseStart.next = p;
                reverseStart = p;
            }
            else {
                prevConnector = q;
                reverseStart = p;
            }
            reversing = !reversing;
        }
        if (!p)
            break;
    }
    return dummy.next;
};
exports.default = () => {
    let list = new LinkedListClass_1.LinkedList([1, 2, 3, 4, 5, 6, 7, 8]);
    let k = 2;
    list.print();
    (0, LinkedListClass_1.PrintList)(reverseAlternatingKElementSublist(list.head, k));
};
