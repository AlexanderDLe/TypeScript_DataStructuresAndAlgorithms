"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 21. Merge Two Sorted Lists
 */
const LinkedListClass_1 = require("../DataStructures/LinkedListClass");
const mergeTwoLists = (l1, l2) => {
    if (!l1)
        return l2;
    if (!l2)
        return l1;
    let l3 = new LinkedListClass_1.ListNode(0);
    let dummy = l3;
    while (l1 || l2) {
        if (l1 && l2) {
            if (l1.val < l2.val) {
                l3.next = l1;
                l3 = l3.next;
                l1 = l1.next;
            }
            else {
                l3.next = l2;
                l3 = l3.next;
                l2 = l2.next;
            }
        }
        else if (!l1) {
            l3.next = l2;
            l2 = null;
        }
        else if (!l2) {
            l3.next = l1;
            l1 = null;
        }
    }
    return dummy.next;
};
exports.default = () => {
    const numsA = [1, 2, 4];
    const numsB = [1, 3, 4];
    const listA = new LinkedListClass_1.LinkedList(numsA);
    const listB = new LinkedListClass_1.LinkedList(numsB);
    LinkedListClass_1.PrintList(listA.head);
    LinkedListClass_1.PrintList(listB.head);
    LinkedListClass_1.PrintList(mergeTwoLists(listA.head, listB.head));
};
