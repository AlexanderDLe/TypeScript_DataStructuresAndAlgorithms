"use strict";
/**
   143. Reorder List
   
    1. Split the list in two. Requires while (f) NOT while(f && f.next)
   
    Even List
        p   s      f
    1 > 2 > 3 > 4
   
    Odd List
            p   s       f
    1 > 2 > 3 > 4 > 5
   
    2. Break link and reverse the 2nd half of the list.
   
    Even List
            r   q   s
    1 > 2   3 < 4
   
    Odd List
                r   q   s
    1 > 2 > 3   4 < 5
    
    3. Now list looks like this:

    Even List
    p       q
    1 > 2   4 > 3

    Odd List
    p           q
    1 > 2 > 3   5 > 4

    4. Alternate adding both nodes.

    Even List
    1 > 4 > 2 > 3

    Odd List
    1 > 5 > 2 > 4 > 3
*/
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedListClass_1 = require("../DataStructures/LinkedListClass");
const reorderList = (head) => {
    var _a;
    if (!head || !head.next)
        return head;
    let p = null;
    let s = head;
    let f = head;
    while (f) {
        p = s;
        s = s.next;
        f = (_a = f.next) === null || _a === void 0 ? void 0 : _a.next;
    }
    p.next = null;
    p = null;
    let r = null;
    while (s) {
        r = p;
        p = s;
        s = s.next;
        p.next = r;
    }
    s = head;
    let dummy = new LinkedListClass_1.ListNode(0);
    let curr = dummy;
    while (s || p) {
        if (s) {
            curr.next = s;
            s = s.next;
            curr = curr.next;
        }
        if (p) {
            curr.next = p;
            p = p.next;
            curr = curr.next;
        }
    }
    return dummy.next;
};
exports.default = () => {
    const nums1 = [1, 2, 3, 4];
    const nums2 = [1, 2, 3, 4, 5];
    const list1 = new LinkedListClass_1.LinkedList(nums1);
    const list2 = new LinkedListClass_1.LinkedList(nums2);
    (0, LinkedListClass_1.PrintList)(reorderList(list1.head));
    (0, LinkedListClass_1.PrintList)(reorderList(list2.head));
};
