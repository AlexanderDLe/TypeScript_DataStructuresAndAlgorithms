"use strict";
/**
 * 207. Course Schedule
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
    breadthFirstSearch(array) {
        let queue = [this];
        while (queue.length) {
            let curr = queue.shift();
            array.push(curr.name);
            for (let child of curr.children) {
                queue.push(child);
            }
        }
        return array;
    }
}
exports.Node = Node;
exports.default = () => {
};
