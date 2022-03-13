"use strict";
/**
 * 252. Meeting Rooms
*/
Object.defineProperty(exports, "__esModule", { value: true });
const meetingRooms = (intervals) => {
    intervals = intervals.sort((a, b) => a[0] - b[0]);
    for (let i = 1; i < intervals.length; i++) {
        let currStart = intervals[i][0];
        let prevEnd = intervals[i - 1][1];
        if (currStart < prevEnd)
            return false;
    }
    return true;
};
exports.default = () => {
    let arr1A = [[0, 30], [5, 10], [15, 20]];
    let arr1B = [[7, 10], [2, 4]];
    console.log(meetingRooms(arr1A));
    console.log(meetingRooms(arr1B));
};
