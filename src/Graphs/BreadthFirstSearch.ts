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
  
    addChild(name: string): Node {
      this.children.push(new Node(name));
      return this;
    }
  
    breadthFirstSearch(array: string[]) {
      let queue: Node[] = [this];

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

export default () => {
    
};
