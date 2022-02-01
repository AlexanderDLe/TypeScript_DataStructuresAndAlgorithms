"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BST = void 0;
/**
 * 102. Binary Tree Level Order Traversal
 */
const TreeClass_1 = require("../DataStructures/TreeClass");
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    insert(value) {
        let n = this;
        let node = new BST(value);
        while (n) {
            if (node.value < n.value) {
                if (n.left)
                    n = n.left;
                else {
                    n.left = node;
                    break;
                }
            }
            else {
                if (n.right)
                    n = n.right;
                else {
                    n.right = node;
                    break;
                }
            }
        }
        return this;
    }
    contains(value) {
        let n = this;
        while (n) {
            if (value === n.value)
                return true;
            if (value < n.value)
                n = n.left;
            if (value > n.value)
                n = n.right;
        }
        return false;
    }
    remove(value, p) {
        let n = this;
        p = p ? p : null;
        while (n) {
            if (value < n.value) {
                p = n;
                n = n.left;
            }
            else if (value > n.value) {
                p = n;
                n = n.right;
            }
            else {
                if (n.left && n.right) {
                    n.value = n.right.getMinValue();
                    n.right.remove(n.value, n);
                }
                else if (p.left === n) {
                    p.left = n.left ? n.left : n.right;
                }
                else if (p.right === n) {
                    p.right = n.left ? n.left : n.right;
                }
                else if (!p) {
                    if (n.left) {
                        n.value = n.left.value;
                        n.right = n.left.right;
                        n.left = n.left.left;
                    }
                    else if (n.right) {
                        n.value = n.right.value;
                        n.left = n.right.left;
                        n.right = n.right.right;
                    }
                    else {
                        break;
                    }
                }
            }
        }
        return this;
    }
    getMinValue() {
        let n = this;
        while (n.left) {
            n = n.left;
        }
        return n.value;
    }
}
exports.BST = BST;
exports.default = () => {
    const t = new TreeClass_1.TreeNode(10);
    t.left = new TreeClass_1.TreeNode(5);
    t.right = new TreeClass_1.TreeNode(15);
    t.left.left = new TreeClass_1.TreeNode(2);
    t.left.right = new TreeClass_1.TreeNode(5);
    t.right.left = new TreeClass_1.TreeNode(13);
    t.right.right = new TreeClass_1.TreeNode(22);
    t.left.left.left = new TreeClass_1.TreeNode(1);
    t.right.left.right = new TreeClass_1.TreeNode(14);
    const tree = new BST(1);
};
