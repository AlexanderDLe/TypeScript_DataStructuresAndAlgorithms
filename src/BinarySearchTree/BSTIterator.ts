/**
 * 173. Binary Search Tree Iterator
  
  
          7 
        .   . 
       3     5
      <     .  .
           9    20

  stack = [7, 3]

  1. Go all the way to root.left.

          7 
        .   . 
       3 <   5
            .  .
           9    20

  stack = [7]

  2. Set root to stack.pop();
  3. Return this value (3)
  4. Go to the next right node (it's null);

-------------------------------

          7 
        .   . 
       3     5
          < .  .
           9    20


  5. Repeat the process. While node exists, go to the left, otherwise pop from stack.
    stack = 7

          7 <
        .   . 
       3     5
            .  .
           9    20

  stack = []

  6. Return this value and set root to right node.


*/

import { TreeNode } from "../DataStructures/TreeClass";

type Node = TreeNode<number> | null;
class BSTIteratorRef {
  stack:Node[];
  root:Node;

  constructor(root: Node) {
    this.stack = [];
    this.root = root;
  }

  next(): number {
    while (this.root) {
      this.stack.push(this.root);
      this.root = this.root.left;
    }
    this.root = this.stack.pop();
    let result = this.root.val;
    this.root = this.root.right;
    return result;
  }

  hasNext(): boolean {
    return !!this.root || !!this.stack.length;
  }
}

class BSTIterator {
  stack:Node[];
  root:Node;

  constructor(root: Node) {
    this.stack = [];
    this.root = root;
  }

  next(): number {
    while (this.root) {
      this.stack.push(this.root);
      this.root = this.root.left;
    }

    this.root = this.stack.pop();
    let result = this.root.val;
    this.root = this.root.right;

    return result;
  }

  hasNext(): boolean {
    return !!this.root || !!this.stack.length;
  }
}


export default () => {

  let t = new TreeNode(7);
  t.left = new TreeNode(3);
  t.right = new TreeNode(15);
  t.right.left = new TreeNode(9);
  t.right.right = new TreeNode(20);

  const bSTIterator = new BSTIterator(t);
  console.log(bSTIterator.next())    // return 3
  console.log(bSTIterator.next())    // return 7
  console.log(bSTIterator.hasNext()) // return True
  console.log(bSTIterator.next())    // return 9
  console.log(bSTIterator.hasNext()) // return True
  console.log(bSTIterator.next())    // return 15
  console.log(bSTIterator.hasNext()) // return True
  console.log(bSTIterator.next())    // return 20
  console.log(bSTIterator.hasNext()) // return False
};
