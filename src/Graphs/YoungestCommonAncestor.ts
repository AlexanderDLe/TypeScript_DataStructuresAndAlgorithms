/**
*/

import { PrintArray } from "../utils/Utilities";
class AncestralTree {
    name: string;
    ancestor: AncestralTree | null;
  
    constructor(name: string) {
      this.name = name;
      this.ancestor = null;
    }
}

const youngestCommonAncestor = (
    topAncestor: AncestralTree | null,
    descendantOne: AncestralTree | null,
    descendantTwo: AncestralTree | null): AncestralTree => {

    const getDistance = (node: AncestralTree | null): number => {
        if (!node) return 0;
        let distance = 0;
        while (node.ancestor) {
            distance++;
            node = node.ancestor;
        }
        return distance;
    }

    let nodeOneDistance = getDistance(descendantOne);
    let nodeTwoDistance = getDistance(descendantTwo);

    while (nodeOneDistance !== nodeTwoDistance) {
        if (nodeOneDistance > nodeTwoDistance) {
            nodeOneDistance--;
            if (descendantOne.ancestor) descendantOne = descendantOne.ancestor;
        } else {
            nodeTwoDistance--;
            if (descendantTwo.ancestor) descendantTwo = descendantTwo.ancestor;
        }
    }

    while (descendantOne !== descendantTwo) {
        if (descendantOne.ancestor) descendantOne = descendantOne.ancestor;
        if (descendantTwo.ancestor) descendantTwo = descendantTwo.ancestor;
    }
    
    return descendantOne;
}

export default () => {
    let A = new AncestralTree('A');

    let B = new AncestralTree('B');
    B.ancestor = A;
    let C = new AncestralTree('C');
    C.ancestor = A;

    let D = new AncestralTree('D');
    D.ancestor = B;
    let E = new AncestralTree('E');
    E.ancestor = B;
    
    let F = new AncestralTree('F');
    F.ancestor = C;
    let G = new AncestralTree('G');
    G.ancestor = C;

    let H = new AncestralTree('H');
    H.ancestor = D;
    let I = new AncestralTree('I');
    I.ancestor = D;
    
    console.log(youngestCommonAncestor(A, I, G));
};
