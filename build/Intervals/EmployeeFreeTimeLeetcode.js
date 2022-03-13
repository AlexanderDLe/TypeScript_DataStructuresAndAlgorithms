"use strict";
/**
 *  759. Employee Free Time
*/
Object.defineProperty(exports, "__esModule", { value: true });
const priority_queue_1 = require("@datastructures-js/priority-queue");
class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
}
const employeeFreeTimeNlogN = (schedule) => {
    if (schedule.length < 2)
        return [];
    const buildSorted = () => {
        let sorted = [];
        for (let group of schedule)
            sorted = [...sorted, ...group];
        sorted = sorted.sort((a, b) => a.start - b.start);
        return sorted;
    };
    const mergeSorted = (sorted) => {
        const merged = [];
        let prev = sorted[0];
        for (let i = 1; i < sorted.length; i++) {
            let curr = sorted[i];
            if (curr.start <= prev.end) {
                prev.start = Math.min(prev.start, curr.start);
                prev.end = Math.max(prev.end, curr.end);
            }
            else {
                merged.push(prev);
                prev = curr;
            }
        }
        merged.push(prev);
        return merged;
    };
    const getGaps = (merged) => {
        if (merged.length === 1)
            return [];
        const gaps = [];
        let prev = merged[0];
        for (let i = 1; i < merged.length; i++) {
            let curr = merged[i];
            gaps.push(new Interval(prev.end, curr.start));
            prev = curr;
        }
        return gaps;
    };
    const sorted = buildSorted();
    const merged = mergeSorted(sorted);
    const gaps = getGaps(merged);
    return gaps;
};
class EmployeeInterval {
    constructor(interval, employeeSchedule, intervalIndex) {
        // interval representing employee's working hours
        this.interval = interval;
        // index of the list containing working hours of this employee
        this.employeeSchedule = employeeSchedule;
        // index of the interval in the employee list
        this.intervalIndex = intervalIndex;
    }
}
const employeeFreeTimeHeapRef = (schedule) => {
    if (!schedule.length)
        return [];
    let sLen = schedule.length;
    let result = [];
    let minHeap = new priority_queue_1.MinPriorityQueue({ priority: (x) => x.interval.start });
    for (let i = 0; i < sLen; i++) {
        minHeap.enqueue(new EmployeeInterval(schedule[i][0], schedule[i], 0));
    }
    let prev = minHeap.front().element.interval;
    while (minHeap.size()) {
        const curr = minHeap.dequeue().element;
        console.log('prev:', prev, 'curr:', curr.interval);
        if (prev.end < curr.interval.start) {
            result.push(new Interval(prev.end, curr.interval.start));
            prev = curr.interval;
        }
        else if (prev.end < curr.interval.end) {
            prev = curr.interval;
        }
        const nextIntervalIndex = curr.intervalIndex + 1;
        if (curr.employeeSchedule[nextIntervalIndex]) {
            minHeap.enqueue(new EmployeeInterval(curr.employeeSchedule[nextIntervalIndex], curr.employeeSchedule, nextIntervalIndex));
        }
    }
    return result;
};
const employeeFreeTime = (schedule) => {
    if (!schedule.length)
        return [];
    const heap = new priority_queue_1.MinPriorityQueue({ priority: (x) => x[0].start });
    const result = [];
    for (let i = 0; i < schedule.length; i++) {
        let employeeSchedule = schedule[i];
        let startInterval = employeeSchedule[0];
        heap.enqueue([startInterval, schedule[i], 0]);
    }
    let prev = heap.front().element[0];
    while (heap.size()) {
        const [curr, employeeSchedule, index] = heap.dequeue().element;
        if (prev.end < curr.start) {
            result.push(new Interval(prev.end, curr.start));
            prev = curr;
        }
        else if (prev.end < curr.end) {
            prev = curr;
        }
        if (!employeeSchedule[index + 1])
            continue;
        heap.enqueue([employeeSchedule[index + 1], employeeSchedule, index + 1]);
    }
    return result;
};
exports.default = () => {
    const s1 = [
        [new Interval(1, 2), new Interval(5, 6)],
        [new Interval(1, 3)],
        [new Interval(4, 10)]
    ];
    const s2 = [
        [new Interval(1, 3), new Interval(6, 7)],
        [new Interval(2, 4)],
        [new Interval(2, 5), new Interval(9, 12)],
    ];
    // console.log(employeeFreeTime(s1));
    console.log(employeeFreeTime(s2));
    // console.log(employeeFreeTime([]));
};
