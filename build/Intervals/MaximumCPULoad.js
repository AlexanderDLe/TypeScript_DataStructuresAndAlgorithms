"use strict";
/**
 * Grokking the Coding Interview
 *
 * A traditional merge carry doesn't work, because we are not merging;
 * we are not combining intervals and setting new start/end times.
 *
 * If A overlaps with B, that doesn't mean A will overlap with C.
 *
 * Once you determine A overlaps with B, how can you determine if C overlaps with A? etc.
 *
 * Perhaps you can use a heap to store earlier intervals, then if you pop out that interval,
 * you can also decrement the maxLoad with the corresponding amount.
 *
 * minHeap = []
 *
 ******************************************************************
 *
 * 1. [1, 4, 2]
 *
 *    minHeap = [[1, 4, 2]]
 *    First element goes into the minHeap. Add load onto maxLoad.
 *    currentMaxLoad = 3
 *    maxLoad = 3
 *
 ******************************************************************
 *
 * 2. [2, 5, 4]
 *
 *    minHeap = [[1, 4, 2], [2, 5, 4]]
 *                   ^
 *            Earliest job
 *
 *    End time of earliest job is compared with starting time of current job.
 *    2 < 4 = true
 *    Since starting time of current is lower than end time of earliest job, then it overlaps.
 *    We add load onto maxLoad.
 *    currentMaxLoad = 7
 *    maxLoad = 7.
 *
 ******************************************************************
 *
 * 3. [7,9,6]
 *
 *    minHeap = [[1, 4, 2], [2, 5, 4]]
 *                   ^
 *            Earliest job
 *
 *    Starting time of current is higher than end time of earliest job, then it does not overlap.
 *    7 < 4 = false
 *    Therefore, we pop earliest job and subtract the maxLoad with load of earliest job.
 *    currentMaxLoad = 4
 *    maxLoad = 7
 *
 *    minHeap = [[2, 5, 4]]
 *                   ^
 *            Earliest job
 *
 *    Since starting time of current is higher than end time of earliest job, then it does not overlap.
 *    7 < 5 = false
 *    Therefore, we pop earliest job and subtract the maxLoad with load of earliest job.
 *    currentMaxLoad = 3
 *    maxLoad = 7
 *
 *    Since heap is empty, we can simply add current job onto heap and add load to the maxLoad.
 *    [[7, 9, 6]]
 *    currentMaxLoad = 6
 *    maxLoad = 7
*/
Object.defineProperty(exports, "__esModule", { value: true });
let Heap = require('collections/heap');
const maximumCPULoad = (jobs) => {
    jobs = jobs.sort((a, b) => a[0] - b[0]);
    let minHeap = new Heap([], null, (a, b) => b[1] - a[1]);
    let currMaxLoad = 0;
    let maxLoad = 0;
    for (let job of jobs) {
        while (minHeap.length > 0 && job[0] >= minHeap.peek()[1]) {
            let earliestJob = minHeap.pop();
            currMaxLoad -= earliestJob[2];
        }
        minHeap.push(job);
        currMaxLoad += job[2];
        maxLoad = Math.max(maxLoad, currMaxLoad);
    }
    return maxLoad;
};
exports.default = () => {
    let arr1 = [[1, 4, 3], [2, 5, 4], [7, 9, 6]];
    let arr2 = [[6, 7, 10], [2, 4, 11], [8, 12, 15]];
    let arr3 = [[1, 4, 2], [2, 4, 1], [3, 6, 5]];
    console.log(maximumCPULoad(arr1));
    console.log(maximumCPULoad(arr2));
    console.log(maximumCPULoad(arr3));
};
