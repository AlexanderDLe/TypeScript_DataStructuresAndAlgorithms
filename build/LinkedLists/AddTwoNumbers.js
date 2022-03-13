"use strict";
/**
 *  2. Add Two Numbers
 */
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedListClass_1 = require("../DataStructures/LinkedListClass");
const LinkedListClass_2 = require("../DataStructures/LinkedListClass");
const addTwoNumbersOld = (l1, l2) => {
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
const addTwoNumbersB = (l1, l2) => {
    let head = new LinkedListClass_1.ListNode(0);
    let curr = head;
    let carry = 0;
    while (l1 || l2 || carry) {
        let sum = 0;
        if (l1)
            sum += l1.val;
        if (l2)
            sum += l2.val;
        if (carry) {
            sum += 1;
            carry = 0;
        }
        if (sum >= 10) {
            sum -= 10;
            carry = 1;
        }
        curr.val = sum;
        if (l1)
            l1 = l1.next;
        if (l2)
            l2 = l2.next;
        if (l1 || l2 || carry) {
            curr.next = new LinkedListClass_1.ListNode(0);
            curr = curr.next;
        }
    }
    return head;
};
const addTwoNumbersC = (l1, l2) => {
    let head = new LinkedListClass_1.ListNode(0);
    let curr = head;
    let carry = 0;
    while (l1 || l2 || carry) {
        let sum = 0;
        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }
        if (carry) {
            sum += carry;
            carry = 0;
        }
        carry = Math.floor(sum / 10);
        sum = sum % 10;
        curr.next = new LinkedListClass_1.ListNode(sum);
        curr = curr.next;
    }
    return head.next;
};
const addTwoNumbers = (l1, l2) => {
    let dummy = new LinkedListClass_1.ListNode(0);
    let p = dummy;
    let carry = 0;
    while (l1 || l2 || carry) {
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;
        let sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);
        sum = sum % 10;
        if (l1)
            l1 = l1.next;
        if (l2)
            l2 = l2.next;
        p.next = new LinkedListClass_1.ListNode(sum);
        p = p.next;
    }
    return dummy.next;
};
exports.default = () => {
    const nums1 = [2, 4, 3];
    const nums2 = [5, 6, 4];
    const l1 = new LinkedListClass_1.LinkedList(nums1);
    const l2 = new LinkedListClass_1.LinkedList(nums2);
    (0, LinkedListClass_2.PrintList)(addTwoNumbers(l1.head, l2.head));
};
