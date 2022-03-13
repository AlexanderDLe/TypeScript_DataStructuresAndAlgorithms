"use strict";
/**
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
class Node {
    constructor(name) {
        this.name = name;
        this.children = [];
    }
    addChild(name) {
        this.children.push(new Node(name));
        return this;
    }
    depthFirstSearch(array) {
        let stack = [];
        stack.push(this);
        while (stack.length) {
            let curr = stack.pop();
            let children = curr.children;
            array.push(curr.name);
            for (let i = children.length - 1; i >= 0; i--) {
                stack.push(children[i]);
            }
        }
        return array;
    }
}
exports.Node = Node;
exports.default = () => {
};
