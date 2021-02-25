/**
 * 148. Sort List
 *
 * Split list in half, sort each half using custom merge algorithm, then merge together.
 */

import {
    ListNode,
    LinkedList,
    PrintList,
} from '../DataStructures/LinkedListClass';

type Node = ListNode<number> | null;

const sortList = (head: Node): Node => {
    const merge = (L: Node, R: Node): Node => {
        let dummy: Node = new ListNode(0);
        let p: Node = dummy;

        while (L && R) {
            if (L.val <= R.val) {
                p.next = L;
                L = L.next;
            } else {
                p.next = R;
                R = R.next;
            }
            p = p.next;
        }
        if (!R) p.next = L;
        else if (!L) p.next = R;

        return dummy.next;
    };
    const split = (n: Node): Node => {
        if (!n || !n.next) return n;
        let temp: Node = n;
        let slow: Node = n;
        let fast: Node = n;

        while (fast && fast.next) {
            temp = slow;
            fast = fast.next.next;
            slow = slow.next;
        }

        temp.next = null;

        let L: Node = split(n);
        let R: Node = split(slow);

        return merge(L, R);
    };

    return split(head);
};

const merge = (l1: Node, l2: Node): Node => {
    let l: Node = new ListNode(0);
    let p = l;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            p.next = l1;
            l1 = l1.next;
        } else {
            p.next = l2;
            l2 = l2.next;
        }
        p = p.next;
    }
    if (l1) p.next = l1;
    if (l2) p.next = l2;
    return l.next;
};
const sortListB = (head: Node): Node => {
    if (!head || !head.next) return head;

    // 1. Cut the list to two halves
    let prev: Node = null;
    let slow: Node = head;
    let fast: Node = head;

    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    prev.next = null;

    // 2. Sort each half
    let l1 = sortList(head);
    let l2 = sortList(slow);

    // 3. merge l1 and l2
    return merge(l1, l2);
};

export default () => {
    const nums = [4, 2, 1, 3];
    const list = new LinkedList(nums);
    PrintList(list.head);
    PrintList(sortList(list.head));
};
