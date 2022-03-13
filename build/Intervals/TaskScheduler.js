"use strict";
/**
 * 621. Task Scheduler
 *
*/
Object.defineProperty(exports, "__esModule", { value: true });
const taskScheduler = (tasks, n) => {
};
exports.default = () => {
    let tasks1 = ["A", "A", "A", "B", "B", "B"];
    let tasks2 = ["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G"];
    console.log(taskScheduler(tasks1, 2));
    console.log(taskScheduler(tasks1, 0));
    console.log(taskScheduler(tasks2, 2));
};
