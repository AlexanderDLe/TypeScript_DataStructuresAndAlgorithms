/**
 * Grokking the Coding Interview
 * 
 * Visual Representation
 * 
 * Meetings: [ [ 2, 3 ], [ 2, 4 ], [ 3, 5 ], [ 4, 5 ] ]
 * 
 * 0. We create MinHeap and modify it so that peek() returns the earliest ending meeting.
 * Therefore, when we call peek(), it shall provide us with the meeting that will end first.
 * We will compare the current iteration of to the earliest ending meeting to check if there is
 * an overlap. If it overlaps, then we must add the current iteration to the heap - otherwise,
 * we will continue to pop earlier meetings until an overlap is found.
 * 
 * On every iteration, meeting rooms required will be minHeap.length.
 * 
 * 1. Current = [2,3]
 *    MinHeap = [[2,3]]
 * -  We push the first meeting into room.
 *    Meeting Rooms required = 1.
 * 
 * 2. Current = [2,4]
 *    MinHeap = [[2,3], [2,4]]
 * -  Does it overlap with the the earliest ending meeting? Yes, the start time of current [2,4]
 *    comes before the end time of the earliest ending meeting [2,3]. 2 < 3. Therefore, this is an overlap.
 *    Meeting Rooms required = 2.
 * 
 * 3. Current: [3,5]
 *    MinHeap = [[2,4], [3,5]]
 * -  We peeked at the earliest meeting, [2,3] and we detect that it does not overlap. 3 < 3 = false.
 *    Since it does not overlap, we pop that earliest meeting and check again. Does the new earliest meeting
 *    overlap with the current meeting? Yes: 3 < 4 = true. Therefore, we now add this value onto the minHeap.
 *    Meeting Rooms required = 2.
 * 
 * 4. Current: [4,5]
 *    MinHeap = [[3,5], [4,5]]
 * -  We peeked at the earliest meeting, [2,4] and we detect that it does not overlap. 4 < 4 = false.
 *    Since it does not overlap, we pop that earliest meeting and check again. Does the new earliest meeting
 *    overlap with the current meeting? Yes: 4 < 5 = true. Therefore, we now add this value onto the minHeap.
 *    Meeting Rooms required = 2.
 *  
 * 
*/

import { PrintArray } from "../utils/Utilities";
let Heap = require('collections/heap');


const minimumMeetingRooms = (meetings: number[][]): number => {
    meetings = meetings.sort((a, b) => a[0] - b[0]);
    let minRooms = 0;
    // This sort (b - a) will give you smallest value when peeking.
    let minHeap = new Heap([], null, ((a: number[], b: number[]) => b[1] - a[1]));

    for (let i = 0; i < meetings.length; i++) {
        let curr = meetings[i];

        // Remove all the meetings that have ended
        while (minHeap.length > 0 && curr[0] >= minHeap.peek()[1]) {
            minHeap.pop();
        }
        // Add the current meeting into min heap
        minHeap.push(meetings[i]);

        // All active meetings are in the min heap, so we need rooms for all of them.
        minRooms = Math.max(minRooms, minHeap.length);
    }

    return minRooms;
}

export default () => {
    let arr1 = [[1,4], [2,5], [7,9]];
    let arr2 = [[6,7], [2,4], [8,12]];
    let arr3 = [[1,4], [2,3], [3,6]];
    let arr4 = [[4,5], [2,3], [2,4], [3,5]];

    console.log(minimumMeetingRooms(arr1));
    console.log(minimumMeetingRooms(arr2));
    console.log(minimumMeetingRooms(arr3));
    console.log(minimumMeetingRooms(arr4));
};