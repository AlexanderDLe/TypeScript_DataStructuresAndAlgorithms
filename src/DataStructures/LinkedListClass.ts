export class ListNode<T> {
    val: T;
    next: ListNode<T> | null;
    prev: ListNode<T> | null;
    constructor(val: T) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}
export class LinkedList<T> {
    head: ListNode<T>;
    constructor(vals: T[]) {
        this.head = new ListNode(vals[0]);
        let n = this.head;

        for (let i = 1; i < vals.length; i++) {
            let t = new ListNode(vals[i]);
            n.next = t;
            n = t;
        }
    }
    print(): void {
        let n: ListNode<T> | null = this.head;
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
