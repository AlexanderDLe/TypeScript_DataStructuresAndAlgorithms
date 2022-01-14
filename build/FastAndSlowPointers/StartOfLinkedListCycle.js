"use strict";
/**
 * Grokking the Coding Interview
*/
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedListClass_1 = require("../DataStructures/LinkedListClass");
const startOfLinkedListCycle = (head) => {
    let s = head;
    let f = head;
    // First cycle meeting
    while (f) {
        s = s.next;
        f = f.next.next;
        if (s === f)
            break;
    }
    // Determine cycle length
    let cycleLength = 0;
    while (true) {
        s = s.next;
        f = f.next.next;
        cycleLength++;
        if (s === f)
            break;
    }
    console.log(cycleLength);
    s = head;
    f = head;
    // Iterate fast pointer forward by length value
    while (cycleLength > 0) {
        f = f.next;
        cycleLength--;
    }
    // Iterate both pointers until meeting at cycle start
    while (s !== f) {
        s = s.next;
        f = f.next;
    }
    return s;
};
exports.default = () => {
    let head = new LinkedListClass_1.ListNode(1);
    head.next = new LinkedListClass_1.ListNode(2);
    head.next.next = new LinkedListClass_1.ListNode(3);
    head.next.next.next = new LinkedListClass_1.ListNode(4);
    head.next.next.next.next = new LinkedListClass_1.ListNode(5);
    head.next.next.next.next.next = new LinkedListClass_1.ListNode(6);
    (0, LinkedListClass_1.PrintList)(head);
    head.next.next.next.next.next.next = head.next.next;
    console.log(`LinkedList Cycle Start: ${startOfLinkedListCycle(head).val}`);
    head.next.next.next.next.next.next = head.next.next.next;
    console.log(`LinkedList Cycle Start: ${startOfLinkedListCycle(head).val}`);
    head.next.next.next.next.next.next = head;
    console.log(`LinkedList Cycle Start: ${startOfLinkedListCycle(head).val}`);
};
