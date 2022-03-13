"use strict";
/**
 * Grokking the Coding Interview
 *
 *
 *  let input1 = [
 *      [new Interval(1, 3), new Interval(5, 6)],
 *      [new Interval(2, 3), new Interval(6, 8)],
 *  ];
 *
 *  EmployeeInterval = {interval, employeeIndex, intervalIndex }
 *
 *    minHeap<EmployeeInterval> = [
 *      {[1, 3], 0, 0},
 *      {[2, 3], 1, 0}
 *    ]
 *
 ********************************************************
 *
 * 1. prevInterval = [1,3]
 *    qTop = {[1, 3], 0, 0}
 *
 *    Both will be the same at first. qTop will pop minHeap.
 *
 *    minHeap<EmployeeInterval> = [
 *      {[2, 3], 1, 0}
 *    ]
 *
 *    There is no gap between prev and qTop, so do not push to result.
 *
 *    Use qTop to push next available interval.
 *    qTop = {[1, 3], 0, 0}
 *
 *    const employeeSchedule = schedule[qTop.employeeIndex];
 *    if (employeeSchedule.length > qTop.intervalIndex + 1) {
 *      minHeap.push(new EmployeeInterval(
 *          employeeSchedule[qTop.intervalIndex + 1],
 *          qTop.employeeIndex,
 *          qTop.intervalIndex + 1
 *      ))
 *    }
 *
 *    Using the Employee Index from qTop will push the next interval from the
 *    same employee schedule as qTop.
 *
 *    minHeap<EmployeeInterval> = [
 *      {[2, 3], 1, 0},
 *      {[5, 6], 0, 1}, <--- [5,6] is the next interval of employee 0 at pos 1
 *    ]
 *
 ********************************************************
 *
 *  2. prevInterval = [1,3]
 *     qTop = {[2, 3], 1, 0}
 *
 *    qTop will take the top of the queue. The queue is now:
 *
 *    minHeap<EmployeeInterval> = [
 *      {[5, 6], 0, 1}
 *    ]
 *
 *    There is no gap between [1,3] and [2,3]
 *
 *    Use qTop to push next available interval.
 *    qTop = {[2, 3], 1, 0} <-- Use employeeIndex and intervalIndex
 *
 *    minHeap<EmployeeInterval> = [
 *      {[5, 6], 0, 1},
 *      {[6, 8], 1, 1} <--- [6,8] is the next interval of employee 1 at pos 1
 *    ]
 *
 *********************************************************
 *
 *  3. prevInterval = [1,3]
 *     qTop = {[5, 6], 0, 1}
 *
 *    qTop will take the top of the queue. The queue is now:
 *
 *    minHeap<EmployeeInterval> = [
 *      {[6, 8], 1, 1}
 *    ]
 *
 *    There is a gap between [1,3] and [5,6]
 *    The gap is [3,5]. Push into result.
 *    result = [[3,5]]
 *
 *    Update prev = [5,6]
 *
 *    Use qTop to push next available interval.
 *    qTop = {[5, 6], 0, 1} <-- Use employeeIndex and intervalIndex.
 *    There is no greater interval index so nothing is added to minHeap.
 *
 *    minHeap<EmployeeInterval> = [
 *      {[6, 8], 1, 1}
 *    ]
 *
 *********************************************************
 *
 *  4. prevInterval = [5,6]
 *     qTop = {[6, 8], 1, 1}
 *
 *    qTop will take the top of the queue. The queue is now empty:
 *
 *    minHeap<EmployeeInterval> = [
 *    }
 *
 *    There is no between [5,6] and [6,8]
 *
 *    Use qTop to push next available interval.
 *    qTop = {[5, 6], 0, 1} <-- Use employeeIndex and intervalIndex.
 *    There is no greater interval index so nothing is added to minHeap.
 *
 *    minHeap<EmployeeInterval> = [
 *    }
 *
 *********************************************************
 *
 *  minHeap.length is now 0 so exit while loop and return result.
*/
Object.defineProperty(exports, "__esModule", { value: true });
let Heap = require('collections/heap');
class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
    print_interval() {
        process.stdout.write(`[${this.start}, ${this.end}]`);
    }
}
// Use EmployeeInterval class instances
class EmployeeInterval {
    constructor(interval, employeeIndex, intervalIndex) {
        // interval representing employee's working hours
        this.interval = interval;
        // index of the list containing working hours of this employee
        this.employeeIndex = employeeIndex;
        // index of the interval in the employee list
        this.intervalIndex = intervalIndex;
    }
}
const employeeFreeTimeRef = (schedule) => {
    const sortPattern = (a, b) => {
        return b.interval.start - a.interval.start;
    };
    let sLen = schedule.length;
    let result = [];
    let minHeap = new Heap([], null, sortPattern);
    if (schedule === null || sLen === 0)
        return result;
    // Insert the first interval of each employee to the queue
    for (let i = 0; i < sLen; i++) {
        minHeap.push(new EmployeeInterval(schedule[i][0], i, 0));
    }
    console.log(minHeap.content);
    let prev = minHeap.peek().interval;
    while (minHeap.length) {
        const qTop = minHeap.pop();
        console.log('Before');
        console.log('prev: ', prev);
        console.log('qTop: ', qTop.interval);
        console.log('\n');
        // If prevInterval is not overlapping with the next interval, insert a free interval
        if (prev.end < qTop.interval.start) {
            result.push(new Interval(prev.end, qTop.interval.start));
            prev = qTop.interval;
            // If qTop's end is larger than prev's end, then update prev to qTop
        }
        else if (prev.end < qTop.interval.end) {
            prev = qTop.interval;
        }
        // If there are more intervals available for the same employee, add their interval
        const employeeSchedule = schedule[qTop.employeeIndex];
        if (employeeSchedule.length > qTop.intervalIndex + 1) {
            minHeap.push(new EmployeeInterval(employeeSchedule[qTop.intervalIndex + 1], qTop.employeeIndex, qTop.intervalIndex + 1));
        }
    }
    return result;
};
const employeeFreeTime = (schedule) => {
    const sortPattern = ((a, b) => {
        return b.interval.start - a.interval.start;
    });
    let len = schedule.length;
    let result = [];
    let minHeap = new Heap([], null, sortPattern);
    for (let i = 0; i < len; i++) {
        let startInterval = {
            interval: schedule[i][0],
            employeeIndex: i,
            intervalIndex: 0
        };
        minHeap.push(startInterval);
    }
    let prev = minHeap.peek().interval;
    while (minHeap.length) {
        let qTop = minHeap.pop();
        let qInterval = qTop.interval;
        if (prev.end < qInterval.start) {
            result.push(new Interval(prev.end, qInterval.start));
            prev = qInterval;
        }
        else if (prev.end > qInterval.end) {
            prev = qInterval;
        }
        let employeeSchedule = schedule[qTop.employeeIndex];
        if (qTop.intervalIndex + 1 < employeeSchedule.length) {
            let nextInterval = {
                interval: employeeSchedule[qTop.intervalIndex + 1],
                employeeIndex: qTop.employeeIndex,
                intervalIndex: qTop.intervalIndex + 1
            };
            minHeap.push(nextInterval);
        }
    }
    return result;
};
exports.default = () => {
    let input1 = [
        [new Interval(1, 3), new Interval(5, 6)],
        [new Interval(2, 3), new Interval(6, 8)],
    ];
    let input2 = [
        [new Interval(1, 3), new Interval(9, 12)],
        [new Interval(2, 4)],
        [new Interval(6, 8)],
    ];
    let input3 = [
        [new Interval(1, 3)],
        [new Interval(2, 4)],
        [new Interval(3, 5), new Interval(7, 9)],
    ];
    console.log(employeeFreeTime(input1));
    console.log(employeeFreeTime(input2));
    console.log(employeeFreeTime(input3));
};
