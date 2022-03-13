"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 973. K Closest Points To Origin
*/
const priority_queue_1 = require("@datastructures-js/priority-queue");
const kClosest = (points, k) => {
    const result = [];
    const heap = new priority_queue_1.MaxPriorityQueue({ priority: (x) => x.distance });
    for (let point of points) {
        const [x, y] = point;
        const distance = Math.sqrt((x * x) + (y * y));
        if (heap.size() >= k) {
            let topDistance = heap.front().element.distance;
            if (distance < topDistance) {
                heap.dequeue();
                heap.enqueue({ distance, point });
            }
        }
        if (heap.size() < k)
            heap.enqueue({ distance, point });
    }
    while (heap.size())
        result.push(heap.dequeue().element.point);
    return result;
};
exports.default = () => {
    console.log(kClosest([[1, 3], [-2, 2]], 1));
    console.log(kClosest([[3, 3], [5, -1], [-2, 4]], 2));
};
