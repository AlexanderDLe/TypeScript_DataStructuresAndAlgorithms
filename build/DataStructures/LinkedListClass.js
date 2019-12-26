"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ListNode = /** @class */ (function () {
    function ListNode(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
    return ListNode;
}());
exports.ListNode = ListNode;
var LinkedList = /** @class */ (function () {
    function LinkedList(vals) {
        this.head = new ListNode(vals[0]);
        var n = this.head;
        for (var i = 1; i < vals.length; i++) {
            var t = new ListNode(vals[i]);
            n.next = t;
            n = t;
        }
    }
    LinkedList.prototype.print = function () {
        var n = this.head;
        var str = '';
        while (n) {
            str += n.val;
            if (n.next) {
                str += '->';
            }
            n = n.next;
        }
        console.log(str);
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
