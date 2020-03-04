"use strict";
/**
 *  2. Add Two Numbers
 */
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedListClass_1 = require("../DataStructures/LinkedListClass");
const LinkedListClass_2 = require("../DataStructures/LinkedListClass");
const addTwoNumbers = (l1, l2) => {
    let carry = 0;
    let dummy = new LinkedListClass_1.ListNode(0);
    let head = dummy;
    while (l1 || l2 || carry) {
        let add = 0;
        if (l1) {
            add += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            add += l2.val;
            l2 = l2.next;
        }
        if (carry) {
            add += carry;
            carry = 0;
        }
        carry = Math.floor(add / 10);
        add = add % 10;
        dummy.next = new LinkedListClass_1.ListNode(add);
        dummy = dummy.next;
    }
    return head.next;
};
exports.default = () => {
    const nums1 = [2, 4, 3];
    const nums2 = [5, 6, 4];
    const l1 = new LinkedListClass_1.LinkedList(nums1);
    const l2 = new LinkedListClass_1.LinkedList(nums2);
    LinkedListClass_2.PrintList(addTwoNumbers(l1.head, l2.head));
};
