/**
 * Grokking the Coding Interview
*/

import { PrintArray } from "../utils/Utilities";
let Heap = require('collections/heap');

class Point {
    point:number[];
    distance: number;

    constructor(point:number[], distance:number) {
        this.point = point;
        this.distance = distance;
    }
}

const KClosestPointsToOrigin = (points:number[][], k:number): number[][] => {
    // Max heap will hide smallest values behind max.
    // We're looking for the k smallest
    const maxSortPattern = (a:Point,b:Point) => {
        return a.distance - b.distance;
    }

    const computeDistance = (point:number[]):number => {
        let innerVal = (point[0] * point[0]) + (point[1] * point[1]);
        let euclideanDistance = Math.sqrt(innerVal);
        return euclideanDistance;
    }

    let maxHeap = new Heap([], null, maxSortPattern);

    for (let point of points) {
        let distance = computeDistance(point);
        let newPoint = new Point(point, distance);

        if (maxHeap.length < k) maxHeap.push(newPoint);
        else if (distance < maxHeap.peek().distance) {
            maxHeap.pop();
            maxHeap.push(newPoint);
        }
    }

    let result: number[][] = [];
    while (maxHeap.length) result.push(maxHeap.pop().point);

    return result;
}

export default () => {
    let arr1 = [[1,2],[1,3]], k1 = 1;
    let arr2 = [[1, 3], [3, 4], [2, -1]], k2 = 2;

    console.log(KClosestPointsToOrigin(arr1, k1));
    console.log(KClosestPointsToOrigin(arr2, k2));
};
