"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 973. K Closest Points To Origin
*/
const priority_queue_1 = require("@datastructures-js/priority-queue");
const smallestRangeHeapRef = (nums) => {
    const heap = new priority_queue_1.MinPriorityQueue({ priority: (x) => x[0] });
    const answer = [-Infinity, Infinity];
    let max = -Infinity;
    for (let group = 0; group < nums.length; group++) {
        let minOfGroup = nums[group][0];
        heap.enqueue([minOfGroup, group, 0]);
        max = Math.max(minOfGroup, max);
    }
    while (heap.size() === nums.length) {
        const [min, group, index] = heap.dequeue().element;
        if (max - min < answer[1] - answer[0]) {
            answer[0] = min;
            answer[1] = max;
        }
        let nextVal = nums[group][index + 1];
        if (nextVal === undefined)
            break;
        heap.enqueue([nextVal, group, index + 1]);
        max = Math.max(nextVal, max);
    }
    return answer;
};
const smallestRange = (nums) => {
    const heap = new priority_queue_1.MinPriorityQueue({ priority: (x) => x[0] });
    const answer = [-Infinity, Infinity];
    let max = -Infinity;
    for (let group = 0; group < nums.length; group++) {
        let minValueOfGroup = nums[group][0];
        heap.enqueue([minValueOfGroup, group, 0]);
        max = Math.max(max, minValueOfGroup);
    }
    while (nums.length === heap.size()) {
        const [min, group, index] = heap.dequeue().element;
        if (max - min < answer[1] - answer[0]) {
            answer[0] = min;
            answer[1] = max;
        }
        let nextValue = nums[group][index + 1];
        if (nextValue === undefined)
            break;
        heap.enqueue([nextValue, group, index + 1]);
        max = Math.max(max, nextValue);
    }
    return answer;
};
exports.default = () => {
    console.log(smallestRange([
        [4, 10, 15, 24, 26],
        [0, 9, 12, 20],
        [5, 18, 22, 30]
    ]));
};
