/**
 * 206. Reverse Linked List
 */
import {
    ListNode,
    LinkedList,
    PrintList,
} from '../DataStructures/LinkedListClass';

type Node = ListNode<number> | null;

const reverseListA = (head: Node): Node => {
    if (!head) return null;
    let p: Node = head;
    let q: Node = null;
    let r: Node = null;

    while (p) {
        r = q;
        q = p;
        p = p.next;
        q.next = r;
    }

    return q;
};

const reverseListRecursively = (head: Node): Node => {
    if (!head || !head.next) return null;
    let p = reverseListRecursively(head.next);
    head.next.next = head;
    head.next = null;
    return p;
};

const reverseListB = (head: Node): Node => {
    let p: Node = head;
    let q: Node = null;
    let r: Node = null;

    while (p) {
        r = q;
        q = p;
        p = p.next;
        q.next = r;
    }
    
    return q;
}

const reverseListC = (head: Node): Node => {
    let p: Node = head;
    let q: Node = null;
    let r: Node = null;

    while (p) {
        r = q;
        q = p;
        p = p.next;
        q.next = r;
    }

    return q;
}

const reverseList = (head: Node): Node => {
  let p = head;
  let q = null;
  let r = null;

  while (p) {
    r = q;
    q = p;
    p = p.next;
    q.next = r;
  }

  return q;
}

export default () => {
    let nums = [1, 2, 3, 4, 5];
    let list = new LinkedList(nums);
    PrintList(reverseList(list.head));
};
