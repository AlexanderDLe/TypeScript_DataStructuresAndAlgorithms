/**
 *  2. Add Two Numbers
 */

import { ListNode, LinkedList } from '../DataStructures/LinkedListClass';
import { PrintList } from '../DataStructures/LinkedListClass';

type Node = ListNode<number> | null;
const addTwoNumbers = (l1: Node, l2: Node): Node => {
    let carry = 0;
    let dummy = new ListNode(0);
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

        dummy.next = new ListNode(add);
        dummy = dummy.next;
    }

    return head.next;
};

export default () => {
    const nums1 = [2, 4, 3];
    const nums2 = [5, 6, 4];
    const l1 = new LinkedList(nums1);
    const l2 = new LinkedList(nums2);
    PrintList(addTwoNumbers(l1.head, l2.head));
};
