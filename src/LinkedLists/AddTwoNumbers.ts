/**
 *  2. Add Two Numbers
 */

import { ListNode, LinkedList } from '../DataStructures/LinkedListClass';
import { PrintList } from '../DataStructures/LinkedListClass';

type Node = ListNode<number> | null;
const addTwoNumbersOld = (l1: Node, l2: Node): Node => {
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

const addTwoNumbersB = (l1: Node, l2: Node): Node => {
    let head: Node = new ListNode(0);
    let curr: Node = head;
    let carry: number = 0;

    while (l1 || l2 || carry) {
        let sum = 0;
        if (l1) sum += l1.val;
        if (l2) sum += l2.val;
        if (carry) {
            sum += 1;
            carry = 0;
        }
        
        if (sum >= 10) {
            sum -= 10;
            carry = 1;
        }

        curr.val = sum;

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;

        if (l1 || l2 || carry) {
            curr.next = new ListNode(0);
            curr = curr.next;
        }
    }

    return head;
};

const addTwoNumbers = (l1: Node, l2: Node): Node => {
    let head: Node = new ListNode(0);
    let curr: Node = head;
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

        curr.next = new ListNode(sum);
        curr = curr.next;
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
