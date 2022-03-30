"use strict";
/**
 * 253. Meeting Rooms 2
 *
 * Return the high amount of overlap at one moment.
 *
 * Keep track of overlap on every iteration:
 *  1. If continues to overlap, increment overlap count and update overlap range
 *  2. If no overlapping, reset overlap range to curr.
 *
 * ===============
 *    ====  =====
 * =         ===
 *
 * [0,30]  [5,10]  [15,20]  [16, 31] <--- Sort.
 *
 *
 * ========================== [0,30]    Count = 1
 *
 ***************************************************
 *
 * ========================== [0,30]
 *    ====                    [5,10]    Count = 2
 *          =======           [15,20]   Count = 2
 *
 ***************************************************
 *
 * ========================== [0,30]
 *    ====                    [5,10]
 *          =======           [15,20]   Count = 2
 *
 *  minHeap can keep track of earliest end times.
 *  v v v
 *
 * Previously:
 * [5, 10]
 * [0, 30]
 *
 * Next element = [15,20]
 * [15,20] does NOT overlap with top element of minHeap, so we can pop
 * ie. prevTopEnd = 10 and currStart = 15
 *
 * Current:
 * [15, 20]
 * [0, 30]
 *
 *
 ***************************************************
 *
 * ========================== [0,30]
 *    ====                    [5,10]
 *          =======           [15,20]
 *               =======      [16,31]   Count = 3
 *
 * Previously:
 * [15, 20]
 * [0, 30]
 *
 * Next element = [16,31]
 * [16,31] DOES overlap with top element of minHeap, so we can keep
 *
 * 16 < 20 === true
 *
 * Current:
 * [15, 20]
 * [0, 30]
 *
 *
*/
Object.defineProperty(exports, "__esModule", { value: true });
const priority_queue_1 = require("@datastructures-js/priority-queue");
const meetingRooms2Ref = (intervals) => {
    intervals = intervals.sort((a, b) => a[0] - b[0]);
    const currentMeetings = new priority_queue_1.MinPriorityQueue({ priority: (x) => x });
    let result = 0;
    for (let curr of intervals) {
        let [start, end] = curr;
        // Remove meetings that have ended
        if (currentMeetings.size() && currentMeetings.front().element <= start) {
            currentMeetings.dequeue();
        }
        currentMeetings.enqueue(end);
        result = Math.max(result, currentMeetings.size());
    }
    return result;
};
const meetingRooms2 = (intervals) => {
    intervals.sort((a, b) => a[0] - b[0]);
    const minHeap = new priority_queue_1.MinPriorityQueue({ priority: (x) => x });
    let count = 0;
    for (let [currStart, currEnd] of intervals) {
        while (minHeap.size() && currStart >= minHeap.front().element) {
            minHeap.dequeue();
        }
        minHeap.enqueue(currEnd);
        // Mistake, use Math.max to track overall meeting rooms required
        count = Math.max(count, minHeap.size());
    }
    return count;
};
exports.default = () => {
    let arr1A = [[0, 30], [5, 10], [15, 20], [16, 31]];
    let arr1B = [[7, 10], [2, 4]];
    console.log(meetingRooms2(arr1A));
    console.log(meetingRooms2(arr1B));
};
