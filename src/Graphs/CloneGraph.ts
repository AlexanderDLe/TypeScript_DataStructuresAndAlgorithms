/**
 * 133. Clone Graph
 * 
  
    1___2
    |   |
    4___3
 
 1. Start with the first node and clone via DFS from that position.
 2. At each recursive call, create new clone and add cloned neighbors.
 3. 
 
 
 1__2    <---- Start with 1 
 |
 4
 
 We want to create the clone for current node, and we want to recursively
 create clones for the neighboring nodes. To do so, we can use DFS to return
 the neighboring clones.
 
 1__2       <--- At this position, clone 1 has already been created.
    |            We can create a map to store those previously created clones.
    3
 */
class Node {
  val: number
  neighbors: Node[]
  constructor(val?: number, neighbors?: Node[]) {
    this.val = (val===undefined ? 0 : val)
    this.neighbors = (neighbors===undefined ? [] : neighbors)
  }
}
type NodeNull = Node | null;

const cloneQueue = (node: NodeNull): NodeNull => {
  if (!node) return null;

  let toVisit = new Set();
  let queue: Node[] = [node];
  let map:any = {}
  toVisit.add(node.val);

  while (queue.length) {
    let n = queue.shift();
    let newNode = new Node(n.val);
    map[n.val] = newNode;
    
    for (let neighbor of n.neighbors) {
      if (!toVisit.has(neighbor.val)) {
        toVisit.add(neighbor.val);
        queue.push(neighbor);
      }
    }
  }

  toVisit.clear();
  queue = [node];
  toVisit.add(node.val);

  while (queue.length) {
    let n = queue.shift();
    let copy = map[n.val];

    for (let neighbor of n.neighbors) {
      if (!toVisit.has(neighbor.val)) {
        toVisit.add(neighbor.val);
        queue.push(neighbor);
      }
      copy.neighbors.push(map[neighbor.val]);
    }
  }
  return map[node.val];
};

const cloneA = (node: NodeNull): NodeNull => {
  const map: any = {};

  const DFS = (n: NodeNull): NodeNull => {
    if (map[n.val]) return map[n.val];

    const copy = new Node(n.val);
    map[n.val] = copy;

    for (let nb of n.neighbors) {
      copy.neighbors.push(DFS(nb));
    }

    return copy;
  }

  return DFS(node);
}

/*
  1______2
  |      |
  |      |
  4______3      
*/
const clone = (node: NodeNull): NodeNull => {
  const nodesMade: any = {};

  const DFS = (n:NodeNull): NodeNull => {
    if (nodesMade[n.val]) return nodesMade[n.val];

    let copy = new Node(n.val);
    nodesMade[n.val] = copy;

    for (let nb of n.neighbors) {
      copy.neighbors.push(DFS(nb));
    }
    return copy;
  }

  return DFS(node);
}

export default () => {
  let node1 = new Node(1);
  let node2 = new Node(2);
  let node3 = new Node(3);
  let node4 = new Node(4);

  node1.neighbors = [node2, node4];
  node2.neighbors = [node1, node3];
  node3.neighbors = [node2, node4];
  node4.neighbors = [node1, node3];

  console.log(clone(node1));
};
