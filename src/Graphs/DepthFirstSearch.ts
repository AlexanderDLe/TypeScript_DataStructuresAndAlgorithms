/**
 * 207. Course Schedule
 */

export class Node {
    name: string;
    children: Node[];
  
    constructor(name: string) {
        this.name = name;
        this.children = [];
    }
  
    addChild(name: string) {
        this.children.push(new Node(name));
        return this;
    }
  
    depthFirstSearch(array: string[]) {
        let stack: Node[] = [];
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

export default () => {
    
};
