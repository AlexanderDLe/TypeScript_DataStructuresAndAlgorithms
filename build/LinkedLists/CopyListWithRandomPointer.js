'use strict';
/**
 *  138. Copy List With Random Pointer
 */
Object.defineProperty(exports, '__esModule', { value: true });
const LinkedListClass_1 = require('../DataStructures/LinkedListClass');
const copyRandomList = head => {
    let dummy = new LinkedListClass_1.RandomListNode(0);
    let newHead = dummy;
    let n = head;
    let oldArr = [];
    let newArr = [];
    while (n) {
        dummy.next = new LinkedListClass_1.RandomListNode(n.val);
        dummy = dummy.next;
        newArr.push(dummy);
        oldArr.push(n);
        n = n.next;
    }
    for (let i = 0; i < oldArr.length; i++) {
        if (oldArr[i].random === null) newArr[i].random = null;
        else {
            let index = oldArr.indexOf(oldArr[i].random);
            newArr[i].random = newArr[index];
        }
    }
    return newHead.next;
};
exports.default = () => {
    const n1 = new LinkedListClass_1.RandomListNode(7);
    const n2 = new LinkedListClass_1.RandomListNode(13);
    const n3 = new LinkedListClass_1.RandomListNode(11);
    const n4 = new LinkedListClass_1.RandomListNode(10);
    const n5 = new LinkedListClass_1.RandomListNode(1);
    n1.next = n2;
    n2.next = n3;
    n3.next = n4;
    n4.next = n5;
    n5.next = null;
    n1.random = null;
    n2.random = n1;
    n3.random = n5;
    n4.random = n3;
    n5.random = n1;
    console.log(copyRandomList(n1));
};
