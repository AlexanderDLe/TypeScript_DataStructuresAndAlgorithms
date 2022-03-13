"use strict";
/**
 * 452. Minimum Number of Arrows To Burst Balloons
 *
 * 1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16
 *
 *   =============   ====================
 * ==========
 *              =============
*/
Object.defineProperty(exports, "__esModule", { value: true });
const priority_queue_1 = require("@datastructures-js/priority-queue");
const minNumOfArrowsToBurstBalloons = (intervals) => {
    if (!intervals.length)
        return 0;
    intervals = intervals.sort((a, b) => a[0] - b[0]);
    const heap = new priority_queue_1.MinPriorityQueue({ priority: (x) => x });
    heap.enqueue(intervals[0][1]);
    let arrows = 1;
    for (let i = 1; i < intervals.length; i++) {
        let [currStart, currEnd] = intervals[i];
        if (currStart > heap.front().element) {
            arrows++;
            heap.clear();
        }
        heap.enqueue(currEnd);
    }
    return arrows;
};
exports.default = () => {
    let arr1 = [[10, 16], [2, 8], [1, 6], [7, 12]];
    let arr2 = [[1, 2], [3, 4], [5, 6], [7, 8]];
    let arr3 = [[1, 2], [2, 3], [3, 4], [4, 5]];
    console.log(minNumOfArrowsToBurstBalloons(arr1));
    console.log(minNumOfArrowsToBurstBalloons(arr2));
    console.log(minNumOfArrowsToBurstBalloons(arr3));
};
