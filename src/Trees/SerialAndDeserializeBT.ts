/**
 * 297. Serialize and Deserialize Binary Tree
 */

import { ListNode } from '../DataStructures/LinkedListClass';
import { TreeNode, BinaryPreorderTraversal } from '../DataStructures/TreeClass';
import { PrintArray } from '../utils/Utilities';
type Node = TreeNode<number> | null;


const serializeRef = (root: Node): string => {
  let string = '';

  const DFS = (n: Node): void => {
    if (!n) {
      string += 'null,';
      return;
    }
    string += `${n.val},`

    DFS(n.left);
    DFS(n.right);
  }

  DFS(root);
  return `${string}`;
}
const deserializeRef = (data: string): Node => {
  let arr = data.split(',')
  arr.pop();

  PrintArray(arr)
  let index = 0;

  const build = (): Node => {
    if (index === arr.length) return;
    let node: Node = null;

    let curr = arr[index];
    if (curr !== 'null') {
      let val = Number(curr);
      node = new TreeNode(val)
    }
    index++;

    if (node) {
      node.left = build();
      node.right = build();
    }
    return node;
  }
  
  
  return build();
}

const serializeTooSlow = (root:Node):string => {
  if (!root) return 'null'
  let result = '';

  const DFS = (n:Node) => {
    if (!n) return;
    result +=n.val;
    result += '[';
    if (n.left) DFS(n.left);
    else result += 'null';
    result += ']';
    
    result += '[';
    if (n.right) DFS(n.right)
    else result += 'null'
    result += ']';
  }
  
  DFS(root)
  return result;
}
const deserializeTooSlow = (data: string): Node => {
  // Mistake: use new string argument - not original data because the string changes
  const getBracketContents = (str:string, index:number):any => {
    let stack: string[] = ['['];
    index++;
    let i = index;
    
    while (stack.length) {
      let curr = str[index];
      if (curr === ']') stack.pop();
      if (curr === '[') stack.push('[');
      index++;
    }
    
    let content = str.substring(i, index - 1);
    return {index, content}
  }

  const DFS = (str:string):Node => {
    if (str === 'null') return null;

    let i = 0;
    while (!isNaN(Number(str[i]))) i++;
    let num = Number(str.substring(0, i));

    let node = new TreeNode(num);
    let {index, content: leftContent} = getBracketContents(str, i);
    let {content: rightContent} = getBracketContents(str, index);
    
    node.left = DFS(leftContent);
    node.right = DFS(rightContent);

    return node;
  }

  return DFS(data);
}

const serialize = (root: Node): string => {
  let result = '';

  const DFS = (n:Node) => {
    if (!n) {
      result += 'null,';
      return;
    }
    result += `${n.val},`
    DFS(n.left);
    DFS(n.right);
  }

  DFS(root);
  return result;
}

const deserialize = (data: string): Node => {
  const arr = data.split(',');
  arr.pop();
  let index = 0;

  const build = (): Node => {
    if (index === arr.length) return;
    
    if (arr[index] === 'null') {
      index++;
      return null;
    }
    
    let num = Number(arr[index]);
    let node: Node = new TreeNode(num);
    index++;
    node.left = build();
    node.right = build();
    
    return node;
  }

  return build();
}

export default () => {
  const t = new TreeNode(1);
  t.left = new TreeNode(2);
  t.right = new TreeNode(3);
  t.right.left = new TreeNode(4);
  t.right.right = new TreeNode(5);

  console.log('Tree: ');
  BinaryPreorderTraversal(t);
  
  let serialized = serialize(t);
  console.log('\nSerialized Result:\n', serialized);
  
  let deserialized = deserialize(serialized);
  console.log('\nDeserialized Result: ');
  BinaryPreorderTraversal(deserialized);
};
