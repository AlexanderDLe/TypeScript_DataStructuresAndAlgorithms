"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 876. Middle of the Linked List
 *
 * Odd List:
 *         s       f
 * 1 > 2 > 3 > 4 > 5
 * When using slow/fast and condition is (f&f.next),
 * then odd list fast pointer will end at the tail.
 *
 * Even List:
 *             s           f
 * 1 > 2 > 3 > 4 > 5 > 6
 * When using slow/fast and condition is (f&f.next),
 * then even list fast pointer will end past tail (null)
 *
 * Odd list:
 *     s   f
 * 1 > 2 > 3
 *
 * Even list:
 *         s       f
 * 1 > 2 > 3 > 4
 *
 * Edge Case:
 * sf
 * 1 > null
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
