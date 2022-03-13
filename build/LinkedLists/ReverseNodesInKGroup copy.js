"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedListClass_1 = require("../DataStructures/LinkedListClass");
const reverseBetween = (head, k) => {
    let dummy = new LinkedListClass_1.ListNode(0);
    dummy.next = head;
    let node = dummy;
    const scanForKNodes = (n) => {
        let i = 0;
        while (i < k && n) {
            n = n.next;
            i++;
        }
        if (n)
            return true;
        return false;
    };
    const reverseNextKNodes = (n) => {
        let p = n;
        let q = null;
        let r = null;
        let end = n.next;
        let i = 0;
        while (p && i <= k) {
            r = q;
            q = p;
            p = p.next;
            q.next = r;
            i++;
        }
        n.next = q;
        end.next = p;
        return end;
    };
    while (node && node.next) {
        if (!scanForKNodes(node))
            break;
        node = reverseNextKNodes(node);
    }
    return dummy.next;
};
exports.default = () => {
    let list1 = new LinkedListClass_1.LinkedList([1, 2, 3, 4, 5]);
    let list2 = new LinkedListClass_1.LinkedList([1, 2, 3, 4, 5]);
    (0, LinkedListClass_1.PrintList)(reverseBetween(list1.head, 2));
    (0, LinkedListClass_1.PrintList)(reverseBetween(list2.head, 3));
};
