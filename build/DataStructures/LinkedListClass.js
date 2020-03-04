"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}
exports.ListNode = ListNode;
class RandomListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
        this.random = null;
    }
}
exports.RandomListNode = RandomListNode;
class LinkedList {
    constructor(vals) {
        this.head = new ListNode(vals[0]);
        let n = this.head;
        for (let i = 1; i < vals.length; i++) {
            let t = new ListNode(vals[i]);
            n.next = t;
            n = t;
        }
    }
    print() {
        let n = this.head;
        let str = '';
        while (n) {
            str += n.val;
            if (n.next) {
                str += '->';
            }
            n = n.next;
        }
        console.log(str);
    }
}
exports.LinkedList = LinkedList;
exports.PrintList = (head) => {
    let n = head;
    let str = '';
    while (n) {
        str += n.val;
        if (n.next) {
            str += '->';
        }
        n = n.next;
    }
    console.log(str);
};
