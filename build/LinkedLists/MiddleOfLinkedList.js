"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 876. Middle of the Linked List
 */
const LinkedListClass_1 = require("../DataStructures/LinkedListClass");
const middleOfLinkedList = (head) => {
    let s = head;
    let f = head;
    while (f && f.next) {
        s = s.next;
        f = f.next;
        if (f)
            f = f.next;
    }
    return s;
};
exports.default = () => {
    const numsA = [1, 2, 3, 4, 5];
    const numsB = [1, 2, 3, 4, 5, 6];
    const listA = new LinkedListClass_1.LinkedList(numsA);
    const listB = new LinkedListClass_1.LinkedList(numsB);
    (0, LinkedListClass_1.PrintList)(listA.head);
    (0, LinkedListClass_1.PrintList)(listB.head);
    console.log(middleOfLinkedList(listA.head).val);
    console.log(middleOfLinkedList(listB.head).val);
};
