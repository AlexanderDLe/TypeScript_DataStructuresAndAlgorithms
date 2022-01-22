"use strict";
/**
 * Grokking the Coding Interview
*/
Object.defineProperty(exports, "__esModule", { value: true });
let Heap = require('collections/heap');
class Point {
    constructor(point, distance) {
        this.point = point;
        this.distance = distance;
    }
}
const KClosestPointsToOrigin = (points, k) => {
    // Max heap will hide smallest values behind max.
    // We're looking for the k smallest
    const maxSortPattern = (a, b) => {
        return a.distance - b.distance;
    };
    const computeDistance = (point) => {
        let innerVal = (point[0] * point[0]) + (point[1] * point[1]);
        let euclideanDistance = Math.sqrt(innerVal);
        return euclideanDistance;
    };
    let maxHeap = new Heap([], null, maxSortPattern);
    for (let point of points) {
        let distance = computeDistance(point);
        let newPoint = new Point(point, distance);
        if (maxHeap.length < k)
            maxHeap.push(newPoint);
        else if (distance < maxHeap.peek().distance) {
            maxHeap.pop();
            maxHeap.push(newPoint);
        }
    }
    let result = [];
    while (maxHeap.length)
        result.push(maxHeap.pop().point);
    return result;
};
exports.default = () => {
    let arr1 = [[1, 2], [1, 3]], k1 = 1;
    let arr2 = [[1, 3], [3, 4], [2, -1]], k2 = 2;
    console.log(KClosestPointsToOrigin(arr1, k1));
    console.log(KClosestPointsToOrigin(arr2, k2));
};
