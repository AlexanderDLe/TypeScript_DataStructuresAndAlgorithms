"use strict";
/**
 * AlgoExpert
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinaryTree = void 0;
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
exports.BinaryTree = BinaryTree;
const findNodesDistanceK = (tree, target, k) => {
    const getParentsAndTargetNode = () => {
        let parents = {};
        let targetNode;
        const DFS = (n, p) => {
            if (!n)
                return;
            if (n.value === target)
                targetNode = n;
            parents[n.value] = p;
            DFS(n.left, n);
            DFS(n.right, n);
        };
        DFS(tree, null);
        return [parents, targetNode];
    };
    let [parents, targetNode] = getParentsAndTargetNode();
    let queue = [targetNode];
    let count = queue.length;
    let usedSet = new Set();
    while (queue.length && k) {
        while (count) {
            let node = queue.shift();
            let parent = parents[node.value];
            usedSet.add(node.value);
            if (parent && !usedSet.has(parent.value))
                queue.push(parent);
            if (node.left && !usedSet.has(node.left.value))
                queue.push(node.left);
            if (node.right && !usedSet.has(node.right.value))
                queue.push(node.right);
            count--;
        }
        count = queue.length;
        k--;
    }
    if (k)
        return [];
    else
        return queue.map(node => node.value);
};
exports.default = () => {
    let n0 = new BinaryTree(0);
    let n1 = new BinaryTree(1);
    let n2 = new BinaryTree(2);
    let n3 = new BinaryTree(3);
    let n4 = new BinaryTree(4);
    let n5 = new BinaryTree(5);
    let n6 = new BinaryTree(6);
    let n7 = new BinaryTree(7);
    let n8 = new BinaryTree(8);
    let n9 = new BinaryTree(9);
    n1.left = n2;
    n1.right = n3;
    n2.left = n4;
    n2.right = n5;
    n3.right = n6;
    n6.left = n7;
    n6.right = n8;
    console.log(findNodesDistanceK(n1, 3, 2));
};
