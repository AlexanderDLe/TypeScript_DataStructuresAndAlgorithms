"use strict";
/**
                 v
 1988 1995    ====
                            v
 1995 2005       ============
                            v
 2000 2005              =====

 2005 2010                  =====
 
prevEnd = 1995

*/
Object.defineProperty(exports, "__esModule", { value: true });
const priority_queue_1 = require("@datastructures-js/priority-queue");
const peopleAlive = (years) => {
    years.sort((a, b) => a[0] - b[0]);
    const minHeap = new priority_queue_1.MinPriorityQueue({ compare: (x) => x });
    let maxResult = 0;
    let maxYear = 0;
    for (let [start, end] of years) {
        while (minHeap.size() && start > minHeap.front().element) {
            minHeap.dequeue();
        }
        minHeap.enqueue(end);
        if (minHeap.size() > maxResult) {
            maxResult = minHeap.size();
            maxYear = start;
        }
    }
    return maxYear;
};
exports.default = () => {
    console.log(peopleAlive([
        [2000, 2005],
        [1995, 2005],
        [2005, 2010],
        [1988, 1995],
    ]));
};
