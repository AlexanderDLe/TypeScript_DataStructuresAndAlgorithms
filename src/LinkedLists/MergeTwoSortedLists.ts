/**
 * 21. Merge Two Sorted Lists
 */
import {
    ListNode,
    LinkedList,
    PrintList
} from '../DataStructures/LinkedListClass';

type Node = ListNode<number> | null;

const mergeTwoListsA = (l1: Node, l2: Node): Node => {
    if (!l1) return l2;
    if (!l2) return l1;

    let l3: Node = new ListNode(0);
    let dummy = l3;

    while (l1 || l2) {
        if (!l1 || !l2) {
            if (!l1) l3.next = l2;
            if (!l2) l3.next = l1;
            break;
        }

        if (l1.val <= l2.val) {
            l3.next = l1;
            l1 = l1.next;
        } else {
            l3.next = l2;
            l2 = l2.next;
        }

        l3 = l3.next;
    }

    return dummy.next;
}

const mergeTwoListsB = (l1: Node, l2: Node): Node => {
    if (!l1) return l2;
    if (!l2) return l1;

    let l3: Node = new ListNode(0);
    let dummy = l3;

    while (l1 || l2) {
        if (l1 && l2) {
            if (l1.val < l2.val) {
                l3.next = l1;
                l3 = l3.next;
                l1 = l1.next;
            } else {
                l3.next = l2;
                l3 = l3.next;
                l2 = l2.next;
            }
        } else if (!l1) {
            l3.next = l2;
            l2 = null;
        } else if (!l2) {
            l3.next = l1;
            l1 = null;
        }
    }

    return dummy.next;
};

const mergeTwoListsC = (l1: Node, l2: Node): Node => {
    let dummy: Node = new ListNode(0);
    let curr = dummy;

    while (l1 && l2) {
        if (l1 && l2) {
            if (l1.val <= l2.val) {
                curr.next = l1;
                l1 = l1.next;
            } else {
                curr.next = l2;
                l2 = l2.next;
            }
        }
        curr = curr.next;
    }

    if (l1) curr.next = l1;
    if (l2) curr.next = l2;

    return dummy.next;
}

const mergeTwoListsD = (l1: Node, l2: Node): Node => {
    if (!l1) return l2;
    if (!l2) return l1;

    let dummy = new ListNode(0);
    let n = dummy;

    while (l1 || l2) {
        if (l1 && l2) {
            if (l1.value <= l2.value) {
                n.next = l1;
                l1 = l1.next!;
            } else {
                n.next = l2;
                l2 = l2.next!;
            }
            n = n.next!;
            continue;
        }

        if (!l1) n.next = l2;
        if (!l2) n.next = l1;
        break;
    }

    return dummy.next;
}

const mergeTwoLists = (l1: Node, l2: Node): Node => {
  let dummy = new ListNode(0);
  let n = dummy;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      n.next = l1;
      l1 = l1.next;
    } else {
      n.next = l2;
      l2 = l2.next;
    }

    n = n.next;
  }
  
  if (!l1) n.next = l2;
  if (!l2) n.next = l1;

  return dummy.next;
}

export default () => {
    const numsA = [1, 2, 4];
    const numsB = [1, 3, 4];
    const listA = new LinkedList(numsA);
    const listB = new LinkedList(numsB);

    PrintList(listA.head);
    PrintList(listB.head);
    PrintList(mergeTwoLists(listA.head, listB.head));
};
