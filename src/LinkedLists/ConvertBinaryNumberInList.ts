/**
 *  1290. Convert Binary Number in a Linked List to Integer
 */
import { ListNode, LinkedList } from '../DataStructures/LinkedListClass';
import { PrintArray } from '../utils/Utilities';

const SolutionA = (head: ListNode<number>): number => {
    let n: ListNode<number> | null = head;
    let binaries = [];
    while (n) {
        binaries.push(n.val);
        n = n.next;
    }
    let power = 0;
    let result = 0;
    for (let i = binaries.length - 1; i >= 0; i--) {
        result += Math.pow(2, power) * binaries[i];
        power++;
    }
    return result;
};

const SolutionB = (head: ListNode<number> | null): number => {
    let result = 0;

    while (head) {
        result = result * 2 + head.val;
        head = head.next;
    }
    return result;
};

const ConvertBinaryNumberInLinkedList = () => {
    const list = new LinkedList([1, 0, 1]);
    console.log(SolutionB(list.head));
};

export default ConvertBinaryNumberInLinkedList;
