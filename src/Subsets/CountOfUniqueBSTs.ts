/**
 * Grokking the Coding Interview
 * 
 * n(1): 1
 * 
 * o
 * 
 * 1
 *
 ********************************************* 
 * n(2): 2
 *  
 *     o        o
 *   /            \
 * n(1)           n(1)
 * 
 * 1      +      1           = 2
 * 
 ********************************************* 
 * n(3): 5
 *  
 *     o        o               o
 *   /            \           /   \
 * n(2)           n(2)      n(1)  n(1)
 * 
 * (2 * 1)  +   (2 * 1)   +   (1 * 1)        = 5
 * 
 ********************************************* 
 * n(4): 12
 *  
 *     o      o             o            o     
 *   /          \         /   \        /   \   
 * n(3)         n(3)    n(2)  n(1)   n(1)  n(2)
 * 
 * (5 * 1) + (5 * 1)  +  (2 * 1)    + (2 * 1) = 14
 * 
 * 
 ********************************************* 
 * n(5): 
 *  
 *     o     o           o           o            o     
 *   /         \       /   \       /   \        /   \   
 * n(4)        n(4)  n(2)  n(2)  n(1)  n(3)   n(3)  n(1)
 * 
 * (14 * 1)+(14 * 1) + (2 * 2)   + (1 * 5) + (5 * 1) = 42
 * 
 ********************************************* 
 * 
 * [n]
 * 
 * [n1, 1n]
 * 
 * [n2, 1n1, 2n]
 * 
 ********************************************* 

 * 
*/

import { TreeNode, BinaryPreorderTraversal } from '../DataStructures/TreeClass';
type Node = TreeNode<number> | null;


const countOfUniqueBSTs = (n: number): number => {
    if (n <= 0) return 0;
    let map: any = {0: 1, 1: 1};
    
    for (let currentNode = 2; currentNode <= n; currentNode++) {
        let sum = 0;

        /* For each iteration of midpoint, we want to know the count of the variations
           of the left subtrees and the count of the variations of the right subtree.
           
           Once we know the variations of both, we multiply them to obtain the combined
           variations (for that midpoint position) and add to sum.*/
        for (let midpoint = 0; midpoint < currentNode; midpoint++) {
            let leftVariations = map[midpoint];
            let rightVariations = map[currentNode - midpoint - 1];
            sum += (leftVariations * rightVariations);
        }
        map[currentNode] = sum;
    }
    
    return map[n];
}

export default () => {
    console.log(countOfUniqueBSTs(2));
    console.log(countOfUniqueBSTs(3));
};

