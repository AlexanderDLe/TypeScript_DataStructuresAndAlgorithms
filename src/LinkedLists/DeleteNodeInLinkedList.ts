/**
 *  237. Delete Node In Linked List
 */
import { ListNode, LinkedList } from '../DataStructures/LinkedListClass';
import { PrintList } from '../DataStructures/LinkedListClass';
type Node = ListNode<number> | null;

const deleteNode = (node: Node): void => {
    node.val = node.next.val;
    node.next = node.next.next;
};

export default () => {
    const nums1 = [4, 5, 1, 9];
    const l1 = new LinkedList(nums1);
    PrintList(l1.head);
    const node = l1.head.next;
    deleteNode(node);
    PrintList(l1.head);
};
